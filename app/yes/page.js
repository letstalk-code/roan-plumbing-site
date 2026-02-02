'use client';
import { siteConfig } from '../config/site-config';
import { theme } from '../config/theme';

export default function Yes() {
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
                <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3.5rem', color: theme.colors.secondary, marginBottom: '20px' }}>Great! We're excited to work with you.</h1>
                <p style={{ fontSize: '1.2rem', color: '#64748b' }}>We'll be in touch shortly to get everything started.</p>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        </main>
    );
}
