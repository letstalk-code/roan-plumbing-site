'use client';
import { useEffect } from 'react';
import { siteConfig } from '../../master-templates/plumbing-luxury/config/site-config';
import Link from 'next/link';

export default function NotInterested() {
    const { brandColors } = siteConfig;

    useEffect(() => {
        // Automatically tag as 'NO' if email is in the URL
        const params = new URLSearchParams(window.location.search);
        const email = params.get('email');

        if (email) {
            fetch('/api/submit-no', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
        }
    }, []);

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
                <img src={siteConfig.logoUrl} alt={siteConfig.businessName} style={{ height: '60px', marginBottom: '40px' }} />

                <h1 style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '3.5rem',
                    color: brandColors.secondary,
                    marginBottom: '20px',
                    lineHeight: '1.1'
                }}>
                    All good — appreciate <span style={{ color: brandColors.primary }}>you checking it out.</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: '#64748b',
                    marginBottom: '40px',
                    lineHeight: '1.6'
                }}>
                    If you ever want help later, feel free to reach out. No hard feelings!
                </p>

                <Link href="/" style={{ textDecoration: 'none' }}>
                    <button style={{
                        backgroundColor: '#f1f5f9',
                        color: brandColors.secondary,
                        padding: '15px 30px',
                        borderRadius: '12px',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: '700',
                        cursor: 'pointer'
                    }}>
                        Back to Website
                    </button>
                </Link>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        </main>
    );
}
