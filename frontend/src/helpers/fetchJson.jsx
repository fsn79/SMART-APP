export const HOST = 'http://localhost:4000';
export async function fetchJson(path, options = {}) {
  try {
    const responce = await fetch(`${HOST}${path}`, options);
  } catch (e) {
    return { error: true, message: "Can't connect to server" };
  }

  const data = await responce.json();
  return data;
}
