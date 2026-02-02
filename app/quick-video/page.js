'use client';
import { siteConfig } from '../../master-templates/plumbing-luxury/config/site-config';
import Link from 'next/link';

export default function QuickVideo() {
    const { brandColors } = siteConfig;

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

                {/* Loom Video Placeholder - In a real app, the user would paste their Loom embed code here */}
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
                        src="https://www.loom.com/embed/placeholder"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Link href="/yes-build" style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: brandColors.primary,
                            color: '#fff',
                            padding: '20px 40px',
                            borderRadius: '16px',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            boxShadow: `0 10px 20px ${brandColors.primary}33`
                        }}>
                            YES — Finish & Put It Live
                        </button>
                    </Link>

                    <Link href="/not-interested" style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: '#f1f5f9',
                            color: brandColors.secondary,
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
