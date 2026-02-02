'use client';
import React from 'react';
import Link from 'next/link';

const templates = [
    {
        id: 'plumbing-luxury',
        name: 'Plumbing Luxury',
        description: 'High-end aesthetic with serif typography. Perfect for premium residential services.',
        industry: 'Plumbing',
        style: 'Luxury / Minimalist',
        color: '#0076BD'
    },
    {
        id: 'hvac-professional',
        name: 'HVAC Professional',
        description: 'Modern corporate look. Focuses on team trust and 24/7 reliability.',
        industry: 'HVAC',
        style: 'Professional / Corporate',
        color: '#FF4500'
    },
    {
        id: 'electrician-industrial',
        name: 'Electrician Industrial',
        description: 'High-contrast, bold industrial design. Great for commercial contractors.',
        industry: 'Electrical',
        style: 'Industrial / Bold',
        color: '#FFD700'
    },
    {
        id: 'roofing-industrial',
        name: 'Roofing Industrial',
        description: 'Rugged, dependable design for heavy-duty roofing services. Built for conversion.',
        industry: 'Roofing',
        style: 'Industrial / Rugged',
        color: '#D97706'
    },
    {
        id: 'hvac-coolfix',
        name: 'HVAC CoolFix',
        description: 'Ice-cool, modern design with a focused 5-step process. High-speed performance and clarity.',
        industry: 'HVAC',
        style: 'Modern / Cool',
        color: '#7AB1ED'
    }
];

export default function TemplateHub() {
    return (
        <main style={{ backgroundColor: '#0f172a', minHeight: '100vh', padding: '80px 20px', color: '#f8fafc', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Template Library
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
                        Choose the foundation for Ocean Plumbing Services LLC. Each template is fully customizable with your logo and colors.
                    </p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    {templates.map((template) => (
                        <div key={template.id} style={{
                            backgroundColor: '#1e293b',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            border: '1px solid #334155',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer'
                        }}>
                            <div style={{ height: '240px', backgroundColor: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <span style={{ fontSize: '4rem', opacity: 0.1, fontWeight: '900' }}>{template.industry}</span>
                                <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: template.color, padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700' }}>
                                    {template.style}
                                </div>
                            </div>
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px' }}>{template.name}</h3>
                                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '30px', height: '80px' }}>{template.description}</p>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <button
                                        onClick={() => alert(`Switching to ${template.name}...`)}
                                        style={{
                                            flex: 1,
                                            backgroundColor: '#3b82f6',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '12px',
                                            border: 'none',
                                            fontWeight: '600',
                                            cursor: 'pointer'
                                        }}>
                                        Apply Template
                                    </button>
                                    <button style={{
                                        padding: '12px 20px',
                                        borderRadius: '12px',
                                        border: '1px solid #475569',
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        fontWeight: '600',
                                        cursor: 'pointer'
                                    }}>
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
