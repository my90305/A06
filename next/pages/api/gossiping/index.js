const apiRouter = '192.168.0.1';
const host = '80';
const apiPrefix = `http://${apiRouter}:${host}`;

const getBoxESP8266 = async () => {
  const response = await fetch(`${apiPrefix}`, {
    method: 'GET',
  })
  console.log(response)
}

export function handler (req, res) {
  getBoxESP8266()
  res.status(200).json({response: 'check API'})
}

export default handler