"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../master-templates/hvac-professional/config/site-config';

function YesPageContent() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessName: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const emailParam = searchParams.get('email');
        if (emailParam) {
            setFormData(prev => ({ ...prev, email: emailParam }));
        }
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/submit-yes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
            } else {
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to submit. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div style={{
                minHeight: '100vh',
                backgroundColor: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.1)',
                    maxWidth: '500px',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                        <CheckCircle2 size={60} color="#16a34a" /> {/* Success Green */}
                    </div>
                    <h2 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: '800', marginBottom: '16px' }}>You're All Set!</h2>
                    <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Thank you for confirming. Our team has received your details and will be in touch shortly to discuss the next steps.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        style={{
                            marginTop: '32px',
                            backgroundColor: '#001f3f', // Branding Blue
                            color: 'white',
                            border: 'none',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'opacity 0.2s',
                            boxShadow: '0 4px 12px rgba(0,31,63,0.3)'
                        }}
                    >
                        Return to Homepage
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f0f4f8',
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                maxWidth: '480px',
                width: '100%'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    {/* Placeholder for Logo - using text if image not perfect fit or use configured logo */}
                    <img
                        src={siteConfig.logoUrl}
                        alt="Ocean Plumbing"
                        style={{ height: '180px', objectFit: 'contain', marginBottom: '30px' }}
                    />
                    <h1 style={{ fontSize: '1.75rem', color: '#1e293b', fontWeight: '800' }}>Let's Get Started!</h1>
                    <p style={{ color: '#64748b', marginTop: '8px' }}>
                        Complete the form below to confirm your interest and connect with our team.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#334155' }}>Full Name</label>
                        <input
                            required
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                borderRadius: '12px',
                                border: '1px solid #cbd5e1',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#001f3f'}
                            onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#334155' }}>Email Address</label>
                        <input
                            required
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                borderRadius: '12px',
                                border: '1px solid #cbd5e1',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#001f3f'}
                            onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#334155' }}>Phone Number</label>
                        <input
                            required
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                borderRadius: '12px',
                                border: '1px solid #cbd5e1',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#001f3f'}
                            onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#334155' }}>Business Name</label>
                        <input
                            type="text"
                            placeholder="Your Business Name"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                borderRadius: '12px',
                                border: '1px solid #cbd5e1',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#001f3f'}
                            onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                        />
                    </div>

                    {error && (
                        <div style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'center', backgroundColor: '#fef2f2', padding: '10px', borderRadius: '8px' }}>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        style={{
                            marginTop: '10px',
                            backgroundColor: '#001f3f',
                            color: 'white',
                            border: 'none',
                            padding: '16px',
                            borderRadius: '12px',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            opacity: isLoading ? 0.7 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            boxShadow: '0 4px 14px rgba(0,31,63,0.4)'
                        }}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} /> Processing...
                            </>
                        ) : (
                            'Confirm & Connect'
                        )}
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8', marginTop: '10px' }}>
                        Your information is secure. By submitting, you agree to receive communications from Ocean Plumbing.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default function YesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <YesPageContent />
        </Suspense>
    );
}
