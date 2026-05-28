export default async function handler(req, res) {
  // Allow requests from any site (for testing)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  
  if (req.method === 'GET') {
    return res.status(200).json({ 
      status: "SafariStyled API is live!",
      demo: true 
    });
  }
  
  if (req.method === 'POST') {
    const { photoBase64 } = req.body || {};
    
    // Demo mode - just confirm we received the photo
    return res.status(200).json({
      success: true,
      message: "Photo received successfully!",
      photoSize: photoBase64 ? `${Math.round(photoBase64.length/1024)} KB` : "0 KB",
      // This is a demo try-on image - we'll replace with real AI later
      tryOnImageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800"
    });
  }
  
  res.status(405).json({ error: "Method not allowed" });
}
