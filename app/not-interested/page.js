'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '../../config/site-config';
import { theme } from '../../config/theme';

function NotInterestedContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    useEffect(() => {
        if (email) {
            fetch('/api/submit-no', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            }).catch(err => console.error('Error reporting No:', err));
        }
    }, [email]);

    return (
        <main style={{
            backgroundColor: '#fff',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            fontFamily: '"Syne", sans-serif'
        }}>
            <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                <img src={siteConfig.logoUrl} alt={siteConfig.businessName} style={{ height: '100px', marginBottom: '40px' }} />
                <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3.5rem', color: theme.colors.secondary, marginBottom: '20px' }}>No problem at all.</h1>
                <p style={{ fontSize: '1.2rem', color: '#64748b' }}>If you ever change your mind, we're here to help you grow. Have a great day!</p>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        </main>
    );
}

export default function NotInterested() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NotInterestedContent />
        </Suspense>
    );
}
