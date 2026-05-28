export default function handler(req, res) {
  res.status(200).json({ 
    status: "SafariStyled API is live!",
    message: "Demo mode - ready for Meta AI key later",
    time: new Date().toISOString()
  });
}
