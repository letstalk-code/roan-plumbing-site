import { siteConfig } from '../config/site-config';
import { theme } from '../config/theme';

export default function HowItWorks() {
    return (
        <section style={{ padding: '120px 0', backgroundColor: '#F2F6FA' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: theme.colors.primary, fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.secondary }}></div>
                        Our Process
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <h2 style={{ fontSize: '4rem', fontWeight: '600', lineHeight: '1.1', color: theme.colors.primary }}>From Problem To<br />Solution In 5 Steps</h2>
                        <p style={{ color: '#666', marginTop: '20px', maxWidth: '400px', marginLeft: 'auto' }}>
                            Roan Plumbing Service makes plumbing easy. Five simple steps to restore your home's peace of mind.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                    {siteConfig.steps.map((step, i) => (
                        <div key={i} style={{
                            backgroundColor: step.active ? theme.colors.primary : '#fff',
                            color: step.active ? '#fff' : '#111',
                            padding: '40px 30px',
                            borderRadius: '12px',
                            height: '400px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'transform 0.3s ease',
                            boxShadow: step.active ? '0 20px 40px rgba(0,0,0,0.1)' : 'none'
                        }}>
                            <div style={{ fontSize: '0.9rem', fontWeight: '600', opacity: 0.5 }}>{step.id}. {step.title}</div>
                            <div>
                                {step.active && (
                                    <div style={{ border: '1px solid rgba(255,255,255,0.5)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
                                        <div style={{ width: '15px', height: '15px', border: '2px solid #fff', position: 'relative' }}>
                                            <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#fff' }}></div>
                                        </div>
                                    </div>
                                )}
                                <h4 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>{step.active ? 'Professional Fix' : step.title}</h4>
                                <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.5' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
