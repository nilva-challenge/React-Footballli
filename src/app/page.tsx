'use client';

import Head from 'next/head';
import * as React from 'react';

export default function HomePage() {
    return (
        <main>
            <Head>
                <title>React Footballi</title>
            </Head>
            <section className='bg-white'>
                <div
                    className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>

                    Home page

                </div>
            </section>
        </main>
    );
}
