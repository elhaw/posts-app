const healthCheck = async (req, res) => {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 'max-age=180000')
    res.end(
      JSON.stringify({
        status: 'success',
      })
    )
  } catch (error) {
    res.json(error)
    res.status(405).end()
  }
}

export default healthCheck
