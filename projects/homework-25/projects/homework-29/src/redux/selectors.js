export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
  const normalizedFilter = state.filter.toLowerCase().trim();

  return state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};