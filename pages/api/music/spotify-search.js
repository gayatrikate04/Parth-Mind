export default async function handler(req, res) {
  const { q, type = "track" } = req.query;

//  get token
  const tokenRes = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/music/spotify-token`);
  const { access_token } = await tokenRes.json();

  // Search Spotify
  const searchRes = await fetch(
    `https://api.spotify.com/v1/search?q=${q}&type=${type}&limit=5`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );

  const data = await searchRes.json();
  res.status(200).json(data);
}
