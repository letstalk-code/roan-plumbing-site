'use client';
import { useState } from 'react';
import { theme } from '../config/theme';
import { siteConfig } from '../config/site-config';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export default function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
            name: e.target.elements[0].value,
            email: e.target.elements[1].value,
            phone: e.target.elements[2].value,
            service: e.target.elements[3].value,
        };

        try {
            const res = await fetch('/api/submit-yes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    businessName: 'Roan Lead',
                    tags: ['roan_plumbing_lead']
                }),
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error(err);
            alert('Correlation error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" style={{ padding: '120px 0', backgroundColor: theme.colors.primary, color: '#fff' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    {isSuccess ? (
                        <div style={{ padding: '60px 0' }}>
                            <div style={{ backgroundColor: '#fff', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 40px' }}>
                                <CheckCircle2 color={theme.colors.primary} size={60} />
                            </div>
                            <h2 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '20px' }}>Request Received!</h2>
                            <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>We'll be in touch with your free estimate shortly.</p>
                        </div>
                    ) : (
                        <>
                            <h2 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '30px', lineHeight: '0.9' }}>Ready for a <span style={{ color: theme.colors.accent }}>Free Estimate?</span></h2>
                            <p style={{ fontSize: '1.3rem', opacity: 0.8, marginBottom: '60px' }}>Fill out the form below and our team will get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit} style={{ textAlign: 'left', backgroundColor: 'rgba(255,255,255,0.05)', padding: '50px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                                    <div style={inputGroupStyle}>
                                        <label style={labelStyle}>Full Name</label>
                                        <input required type="text" placeholder="John Doe" style={inputStyle} />
                                    </div>
                                    <div style={inputGroupStyle}>
                                        <label style={labelStyle}>Email Address</label>
                                        <input required type="email" placeholder="john@example.com" style={inputStyle} />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                                    <div style={inputGroupStyle}>
                                        <label style={labelStyle}>Phone Number</label>
                                        <input required type="tel" placeholder="(555) 000-0000" style={inputStyle} />
                                    </div>
                                    <div style={inputGroupStyle}>
                                        <label style={labelStyle}>Service Needed</label>
                                        <select style={inputStyle}>
                                            <option>General Repair</option>
                                            <option>Water Heater</option>
                                            <option>Drain Cleaning</option>
                                            <option>Emergency Service</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#fff',
                                        color: theme.colors.primary,
                                        padding: '24px',
                                        borderRadius: '16px',
                                        border: 'none',
                                        fontWeight: '900',
                                        fontSize: '1.3rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '15px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    {isSubmitting ? <><Loader2 className="animate-spin" size={24} /> Processing...</> : <><Send size={24} /> Get My Estimate Now</>}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
};

const labelStyle = {
    fontSize: '0.9rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    opacity: 0.7
};

const inputStyle = {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '18px',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1.1rem',
    outline: 'none'
};
