import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html>
        <body>{children}</body>
        </html>
    );
}
