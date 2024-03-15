export const getChars = async (url) => {
  const response = await fetch(url);
  return response.json();
};
