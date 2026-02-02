import { siteConfig } from '../config/site-config';
import { Quote } from 'lucide-react';

export default function Testimonials() {
    return (
        <section style={{ padding: '100px 0', backgroundColor: '#fcfcfc' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFD700', fontSize: '1.5rem', marginBottom: '20px' }}>★★★★★ <span style={{ color: '#333', fontSize: '1rem', fontWeight: '600' }}>5.0 (243 reviews)</span></div>
                <h2 style={{ fontSize: '3rem', marginBottom: '60px' }}>What Our Customer Say About Us</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                    {siteConfig.testimonials.map((t, i) => (
                        <div key={i} className="glass-card" style={{ padding: '40px', textAlign: 'left', position: 'relative' }}>
                            <div style={{ color: '#FFD700', marginBottom: '20px' }}><Quote size={32} fill="currentColor" fillOpacity="0.1" /></div>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', marginBottom: '30px', minHeight: '100px' }}>"{t.text}"</p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <img src={t.photo} alt={t.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                                <div>
                                    <h5 style={{ fontWeight: '700', fontSize: '1rem' }}>{t.name}</h5>
                                    <p style={{ fontSize: '0.85rem', color: '#999' }}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
