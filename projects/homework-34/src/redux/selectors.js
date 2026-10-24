export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
  const normalizedFilter = state.filter.toLowerCase().trim();

  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};