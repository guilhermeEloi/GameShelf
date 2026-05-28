const IGDB_AUTH_URL = "https://id.twitch.tv/oauth2/token";
const IGDB_BASE_URL = "https://api.igdb.com/v4";

interface IGDBToken {
  access_token: string;
  expires_at: number;
}

let cachedToken: IGDBToken | null = null;

async function getAccessToken(): Promise<string> {
  const now = Date.now();

  if (cachedToken && cachedToken.expires_at > now) {
    return cachedToken.access_token;
  }

  const response = await fetch(IGDB_AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.IGDB_CLIENT_ID as string,
      client_secret: process.env.IGDB_CLIENT_SECRET as string,
      grant_type: "client_credentials",
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao autenticar com a IGDB");
  }

  const data = (await response.json()) as {
    access_token: string;
    expires_in: number;
  };

  cachedToken = {
    access_token: data.access_token,
    expires_at: now + data.expires_in * 1000 - 60000,
  };

  return cachedToken.access_token;
}

export async function igdbFetch(endpoint: string, body: string) {
  const token = await getAccessToken();

  const response = await fetch(`${IGDB_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Client-ID": process.env.IGDB_CLIENT_ID as string,
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/plain",
    },
    body,
  });

  if (!response.ok) {
    throw new Error("Erro na requisição IGDB");
  }

  return response.json() as Promise<any[]>;
}
