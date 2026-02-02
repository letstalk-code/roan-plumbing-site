'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '../../config/site-config';
import { theme } from '../../config/theme';
import Link from 'next/link';

function QuickVideoContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const emailParam = email ? `?email=${encodeURIComponent(email)}` : '';

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
            <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                <img src={siteConfig.logoUrl} alt={siteConfig.businessName} style={{ height: '80px', marginBottom: '40px' }} />

                {/* Loom Video Placeholder */}
                <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    marginBottom: '60px',
                    backgroundColor: '#f1f5f9'
                }}>
                    <iframe
                        src="https://www.loom.com/embed/d2970d60afa6416d871007e4e27b6b3f"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Link href={`/yes-build${emailParam}`} style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: theme.colors.primary,
                            color: '#fff',
                            padding: '20px 40px',
                            borderRadius: '16px',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            boxShadow: `0 10px 20px ${theme.colors.primary}33`
                        }}>
                            YES — Finish & Put It Live
                        </button>
                    </Link>

                    <Link href={`/not-interested${emailParam}`} style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: '#f1f5f9',
                            color: theme.colors.secondary,
                            padding: '20px 40px',
                            borderRadius: '16px',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            opacity: 0.8
                        }}>
                            NO — Not Interested
                        </button>
                    </Link>
                </div>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
        </main>
    );
}

export default function QuickVideo() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QuickVideoContent />
        </Suspense>
    );
}
