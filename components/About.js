import { siteConfig } from '../config/site-config';
import { ArrowRight } from 'lucide-react';

export default function About() {
    return (
        <section style={{ padding: '100px 0' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                    <img
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800"
                        alt="HVAC Team"
                        style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '32px' }}
                    />
                </div>

                <div>
                    <span style={{ color: '#666', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>About Us</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>{siteConfig.aboutTitle}</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '25px' }}>
                        {siteConfig.aboutPoints.map((point, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ccc' }}>0{i + 1}</span>
                                <div>
                                    <h4 style={{ fontSize: '1.3rem', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {point.title}
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <ArrowRight size={14} />
                                        </div>
                                    </h4>
                                    <p style={{ color: '#666', lineHeight: '1.6' }}>{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
