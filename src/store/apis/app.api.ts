export const fetchTest = async () => {
  const data = await fetch("http://127.0.0.1:4000/api/user");

  return data.json();
};
