export default function handler(req, res) {
  // Parse form from query here
  console.log(req.query)
  res.redirect('/')
}

export const config = {
  api: {
    bodyParser: false,
  },
}
