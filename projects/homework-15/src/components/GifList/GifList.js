import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const API_KEY = process.env.REACT_APP_GIPHY_KEY;
const LIMIT = 18;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
`;

const GifCard = styled.div`
  overflow: hidden;
  border: 1px solid #334155;
  border-radius: 16px;
  background: #1e293b;
  transition: 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: #a78bfa;
  }
`;

const GifImage = styled.img`
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const GifTitle = styled.p`
  margin: 0;
  padding: 12px;
  overflow: hidden;
  color: #cbd5e1;
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 45px;
  height: 45px;
  margin: 40px auto;
  border: 5px solid #334155;
  border-top-color: #a78bfa;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const Message = styled.p`
  padding: 35px 0;
  color: #94a3b8;
  text-align: center;
`;

const ErrorText = styled(Message)`
  color: #f87171;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin: 35px 0;
`;

const PageButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  background: #8b5cf6;
  color: white;
  font-weight: 600;

  &:hover:not(:disabled) {
    background: #7c3aed;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const PageNumber = styled.span`
  color: #cbd5e1;
  font-weight: 600;
`;

class GifList extends Component {
  state = {
    gifs: [],
    page: 1,
    totalCount: 0,
    loading: false,
    error: '',
  };

  controller = null;

  componentDidMount() {
    // Загружаем стартовые GIF при первом запуске
    this.fetchGifs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.keyword !== this.props.keyword) {
      this.setState(
        {
          page: 1,
          gifs: [],
          totalCount: 0,
          error: '',
        },
        this.fetchGifs
      );
      return;
    }

    if (prevState.page !== this.state.page) {
      this.fetchGifs();
    }
  }

  componentWillUnmount() {
    if (this.controller) {
      this.controller.abort();
    }
  }

  fetchGifs = async () => {
    const { keyword } = this.props;
    const { page } = this.state;

    if (this.controller) {
      this.controller.abort();
    }

    const controller = new AbortController();
    this.controller = controller;

    this.setState({
      loading: true,
      error: '',
    });

    try {
      if (!API_KEY || API_KEY === 'PASTE_YOUR_GIPHY_KEY_HERE') {
        throw new Error('Add your Giphy API key to .env.local');
      }

      const params = new URLSearchParams({
        api_key: API_KEY,
        q: keyword || 'funny',
        limit: String(LIMIT),
        offset: String((page - 1) * LIMIT),
        rating: 'g',
        lang: 'en',
      });

      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?${params}`,
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error(`Giphy API error: ${response.status}`);
      }

      const result = await response.json();

      if (this.controller !== controller) return;

      this.setState({
        gifs: result.data,
        totalCount: result.pagination.total_count,
      });
    } catch (error) {
      if (error.name === 'AbortError') return;

      if (this.controller !== controller) return;

      this.setState({
        error: error.message,
        gifs: [],
      });
    } finally {
      if (this.controller === controller) {
        this.controller = null;
        this.setState({ loading: false });
      }
    }
  };

  nextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  previousPage = () => {
    this.setState(prevState => ({
      page: Math.max(1, prevState.page - 1),
    }));
  };

  render() {
    const {
      gifs,
      page,
      totalCount,
      loading,
      error,
    } = this.state;

    const totalPages = Math.ceil(totalCount / LIMIT);

    return (
      <>
        {loading && <Spinner role="status" aria-label="Loading" />}

        {error && <ErrorText>{error}</ErrorText>}

        {!loading && !error && gifs.length === 0 && (
          <Message>No GIFs found. Try another keyword.</Message>
        )}

        {!loading && !error && (
          <>
            <Gallery>
              {gifs.map(gif => {
                const image =
                  gif.images?.fixed_height?.url ||
                  gif.images?.original?.url;

                if (!image) return null;

                return (
                  <GifCard key={gif.id}>
                    <GifImage
                      src={image}
                      alt={gif.title || 'GIF'}
                      loading="lazy"
                    />
                    <GifTitle>
                      {gif.title || 'Untitled GIF'}
                    </GifTitle>
                  </GifCard>
                );
              })}
            </Gallery>

            {totalPages > 1 && (
              <Pagination>
                <PageButton
                  onClick={this.previousPage}
                  disabled={page === 1}
                >
                  Previous
                </PageButton>

                <PageNumber>
                  {page} / {totalPages}
                </PageNumber>

                <PageButton
                  onClick={this.nextPage}
                  disabled={page >= totalPages}
                >
                  Next
                </PageButton>
              </Pagination>
            )}
          </>
        )}
      </>
    );
  }
}

export default GifList;