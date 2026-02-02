import { siteConfig } from '../config/site-config';

export default function Team() {
    return (
        <section style={{ padding: '100px 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '60px' }}>Meet Our Dedicated Team</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                    {siteConfig.team.map((photo, i) => (
                        <div key={i} style={{ height: '350px', borderRadius: '24px', overflow: 'hidden' }}>
                            <img src={photo} alt={`Team Member ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
