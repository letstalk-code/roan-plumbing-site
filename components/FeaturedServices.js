import { siteConfig } from '../config/site-config';
import { ChevronRight } from 'lucide-react';

export default function FeaturedServices() {
    return (
        <section style={{ padding: '100px 0', backgroundColor: '#1A1A3F', color: '#fff', borderRadius: '48px', margin: '0 20px' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem' }}>Top HVAC Services In<br />Lancaster CA</h2>
                    </div>
                    <button style={{ backgroundColor: '#FFD700', color: '#000', padding: '15px 30px', borderRadius: '50px', border: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        Browse Services <ChevronRight size={18} />
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                    {siteConfig.featuredServices.map((service, i) => (
                        <div key={i} className="glass-card" style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ marginBottom: '20px', height: '200px', borderRadius: '20px', overflow: 'hidden' }}>
                                <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '20px' }}>{service.desc}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', cursor: 'pointer' }}>
                                Learn More <ChevronRight size={16} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
