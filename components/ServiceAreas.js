import { siteConfig } from '../config/site-config';
import { ChevronRight, MapPin } from 'lucide-react';

export default function ServiceAreas() {
    return (
        <section style={{ padding: '100px 0' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                <div style={{ borderRadius: '32px', overflow: 'hidden', height: '500px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800"
                        alt="Service Area Map"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div>
                    <span style={{ color: '#666', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>Service Area</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>Texas <span style={{ fontStyle: 'italic', fontWeight: '300', textTransform: 'uppercase' }}>Neighborhoods</span><br />We Proudly Serve</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {siteConfig.neighborhoods.map((area, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #eee' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600', fontSize: '1.1rem' }}>
                                    <div style={{ color: '#FFD700' }}><MapPin size={20} fill="currentColor" fillOpacity="0.2" /></div>
                                    {area}
                                </div>
                                <ChevronRight size={18} color="#ccc" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
