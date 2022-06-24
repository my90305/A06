const apiRouter = '192.168.0.101';
const host = '80';
const apiPrefix = `http://${apiRouter}/`;

export async function getBerify() {
  const response = await fetch(`${apiPrefix}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}