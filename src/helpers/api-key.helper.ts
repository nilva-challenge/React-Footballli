// This keys should have been in .env file,
// but I didn't care about them so I put them in here,
// You can supply your own keys in .env file.
export const API_KEY =
    (import.meta.env.VITE_API_KEY as string | undefined) ??
    'da01d512d0bcaf0fc4273307d9282720'
