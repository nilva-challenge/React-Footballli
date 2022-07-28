// This keys should have been in .env file,
// but I didn't care about them so I put them in here,
// You can supply your own keys in .env file.
export const API_KEY =
    (import.meta.env.VITE_API_KEY as string | undefined) ??
    '9aa696294d91644bd81ef04ff40596f9'
