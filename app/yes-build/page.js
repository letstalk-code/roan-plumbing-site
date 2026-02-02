'use client';
import { useState } from 'react';
import { siteConfig } from '../../master-templates/plumbing-luxury/config/site-config';

export default function YesBuild() {
    const { brandColors } = siteConfig;

    // Local state for the component
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
            name: e.target.elements[0].value,
            email: e.target.elements[1].value,
            phone: e.target.elements[2].value,
            businessName: e.target.elements[3].value,
        };

        try {
            const res = await fetch('/api/submit-yes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                const errorData = await res.json();
                alert(`Submission Failed: ${errorData.error || 'Unknown error'}`);
            }
        } catch (err) {
            console.error(err);
            alert('Connection error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
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
                    <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '3.5rem', color: brandColors.secondary }}>Sounds good — <span style={{ color: brandColors.primary }}>I’ll take it from here.</span></h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b' }}>I’ll finish the website and put it live. I’ll follow up shortly once it’s set up 👍</p>
                </div>
            </main>
        );
    }

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
                    Sounds good — I’ll <span style={{ color: brandColors.primary }}>take it from here.</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: '#64748b',
                    marginBottom: '40px',
                    lineHeight: '1.6'
                }}>
                    I’ll finish the website and put it live. There’s no upfront cost — just a small monthly to keep it running.
                </p>

                <form onSubmit={handleSubmit} style={{
                    backgroundColor: '#F8FAFC',
                    padding: '40px',
                    borderRadius: '24px',
                    textAlign: 'left',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    border: '1px solid #f1f5f9'
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: brandColors.secondary }}>Full Name</label>
                        <input required type="text" placeholder="John Doe" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: brandColors.secondary }}>Email Address</label>
                        <input required type="email" placeholder="john@example.com" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: brandColors.secondary }}>Phone Number</label>
                        <input required type="tel" placeholder="(555) 000-0000" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: brandColors.secondary }}>Business Name</label>
                        <input required type="text" placeholder="Pivotal Plumbing" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <button type="submit" disabled={isSubmitting} style={{
                        width: '100%',
                        backgroundColor: isSubmitting ? '#cbd5e1' : brandColors.primary,
                        color: '#fff',
                        padding: '20px',
                        borderRadius: '16px',
                        border: 'none',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        boxShadow: isSubmitting ? 'none' : `0 10px 20px ${brandColors.primary}33`
                    }}>
                        {isSubmitting ? 'Sending...' : 'Start My Website'}
                    </button>
                </form>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        </main>
    );
}
