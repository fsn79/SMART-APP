export const HOST = 'http://localhost:4000';
export async function fetchJson(path, options = {}) {
  const responce = await fetch(`${HOST}${path}`, options);
  const data = await responce.json();
  return data;
}
