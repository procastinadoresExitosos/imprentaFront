const getToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default getToken;
