import React, { Component } from 'react';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

const API_KEY = process.env.REACT_APP_PIXABAY_KEY;
const PER_PAGE = 12;

const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 35px 20px;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  text-align: center;
  font-size: 34px;
`;

const Subtitle = styled.p`
  margin: 0 0 35px;
  color: #64748b;
  text-align: center;
`;

const Message = styled.p`
  padding: 30px;
  color: #64748b;
  text-align: center;
`;

const ErrorMessage = styled(Message)`
  color: #dc2626;
`;

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalHits: 0,
    loading: false,
    error: '',
    selectedImage: null,
  };

  controller = null;

  componentDidUpdate(prevProps, prevState) {
    const queryChanged = prevState.query !== this.state.query;
    const pageChanged = prevState.page !== this.state.page;

    if (queryChanged || pageChanged) {
      this.fetchImages();
    }
  }

  componentWillUnmount() {
    if (this.controller) {
      this.controller.abort();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;

    if (!query) return;

    if (this.controller) {
      this.controller.abort();
    }

    const controller = new AbortController();
    this.controller = controller;

    this.setState({ loading: true, error: '' });

    try {
      if (!API_KEY || API_KEY === 'PASTE_YOUR_PIXABAY_KEY_HERE') {
        throw new Error('Add your Pixabay API key to .env.local');
      }

      const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        page: String(page),
        per_page: String(PER_PAGE),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      });

      const response = await fetch(
        `https://pixabay.com/api/?${params.toString()}`,
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error(`Pixabay request failed: ${response.status}`);
      }

      const data = await response.json();

      if (this.controller !== controller) return;

      this.setState(prevState => ({
        images:
          page === 1
            ? data.hits
            : [...prevState.images, ...data.hits],
        totalHits: data.totalHits,
      }));
    } catch (error) {
      if (error.name === 'AbortError') return;

      if (this.controller !== controller) return;

      this.setState({ error: error.message });
    } finally {
      if (this.controller === controller) {
        this.controller = null;
        this.setState({ loading: false });
      }
    }
  };

  handleSearch = query => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return;

    // Сбрасываем страницу и предыдущие результаты
    this.setState({
      query: normalizedQuery,
      page: 1,
      images: [],
      totalHits: 0,
      error: '',
    }, () => {
      // Повторный поиск того же слова
      // также должен отправлять запрос
      if (this.state.query === normalizedQuery &&
          this.state.page === 1 &&
          !this.state.loading &&
          this.state.images.length === 0) {
        // Запрос уже запустится через componentDidUpdate
        // при изменении query или page.
      }
    });

    // Если слово не изменилось, повторяем поиск вручную
    if (normalizedQuery === this.state.query && this.state.page === 1) {
      this.fetchImages();
    }
  };

  loadMore = () => {
    if (this.state.loading) return;

    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (imageUrl, alt) => {
    this.setState({
      selectedImage: { imageUrl, alt },
    });
  };

  closeModal = () => {
    this.setState({
      selectedImage: null,
    });
  };

  render() {
    const {
      images,
      query,
      loading,
      totalHits,
      error,
      selectedImage,
    } = this.state;

    const hasMore = images.length > 0 && images.length < totalHits;

    return (
      <>
        <GlobalStyles />

        <Searchbar onSubmit={this.handleSearch} />

        <Main>
          <Title>Image Finder</Title>
          <Subtitle>
            Discover beautiful photos with Pixabay
          </Subtitle>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          {!query && (
            <Message>
              Enter a keyword above to find images.
            </Message>
          )}

          <ImageGallery
            images={images}
            onImageClick={this.openModal}
          />

          {loading && <Loader />}

          {!loading && query && images.length === 0 && !error && (
            <Message>No images found. Try another keyword.</Message>
          )}

          {hasMore && !loading && (
            <Button onClick={this.loadMore} />
          )}
        </Main>

        {selectedImage && (
          <Modal
            imageUrl={selectedImage.imageUrl}
            alt={selectedImage.alt}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default App;