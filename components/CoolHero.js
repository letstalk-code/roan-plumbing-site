import { siteConfig } from '../config/site-config';
import { theme } from '../config/theme';
import { Globe, Phone } from 'lucide-react';

export default function CoolHero() {
    return (
        <section style={{ height: '100vh', minHeight: '900px', position: 'relative', backgroundColor: theme.colors.accent, color: '#fff', overflow: 'hidden' }}>
            {/* Premium Navigation */}
            <nav style={{ padding: '40px 0', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
                    {/* Left Section */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.3)', padding: '10px 20px', borderRadius: '50px', fontSize: '0.9rem', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                            <Globe size={16} /> LAND O' LAKES, FL
                        </div>
                    </div>

                    {/* Center Section - Logo and Text */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                        <img src={siteConfig.logoUrl} alt={siteConfig.businessName} style={{ height: '90px', width: 'auto', objectFit: 'contain' }} />
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ color: theme.colors.primary, fontSize: '1.4rem', fontWeight: '700', letterSpacing: '2px', fontFamily: '"Playfair Display", serif', textTransform: 'uppercase', lineHeight: '1' }}>
                                Roan Plumbing
                            </div>
                            <div style={{ color: theme.colors.primary, fontSize: '0.8rem', fontWeight: '500', letterSpacing: '4px', textTransform: 'uppercase', marginTop: '2px', opacity: 0.8 }}>
                                Service
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '25px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: '800' }}>
                            <Phone size={22} fill="#fff" /> {siteConfig.phoneNumber}
                        </div>
                        <button style={{ backgroundColor: theme.colors.primary, color: '#fff', padding: '16px 35px', borderRadius: '50px', border: 'none', fontWeight: '800', cursor: 'pointer', fontSize: '1.1rem', boxShadow: '0 10px 25px rgba(26,43,72,0.5)' }}>
                            Contact Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 2, paddingTop: '100px' }}>
                <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -75%)', width: '100%', opacity: 0.12, fontSize: '10vw', fontWeight: '900', userSelect: 'none', whiteSpace: 'nowrap', color: theme.colors.primary, letterSpacing: '-2px', lineHeight: '1' }}>
                    ROAN PLUMBING
                </div>

                {/* Featured Image Collage / Large Visual */}
                <div style={{ position: 'relative', marginBottom: '50px' }}>
                    <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200"
                        alt="Premium Bathroom"
                        style={{ width: '850px', height: '520px', objectFit: 'cover', borderRadius: '48px', filter: 'drop-shadow(0 50px 120px rgba(0,0,0,0.4))' }}
                    />
                    {/* Massive floating logo - Transparent as requested */}
                    <div style={{ position: 'absolute', bottom: '-50px', right: '80px', padding: '20px' }}>
                        <img src={siteConfig.logoUrl} style={{ height: '180px', width: 'auto', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))' }} />
                    </div>
                </div>

                <h1 style={{ fontSize: '6rem', fontWeight: '900', maxWidth: '1100px', lineHeight: '0.8', marginBottom: '30px', color: '#fff' }}>
                    {siteConfig.heroTitle}
                </h1>
                <p style={{ fontSize: '1.6rem', opacity: 1, marginBottom: '55px', maxWidth: '800px', fontWeight: '700', color: theme.colors.primary }}>
                    {siteConfig.heroSubtitle}
                </p>

                <div style={{ display: 'flex', gap: '30px' }}>
                    <button style={{ backgroundColor: '#fff', color: theme.colors.primary, padding: '24px 55px', borderRadius: '60px', border: 'none', fontWeight: '900', fontSize: '1.3rem', boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}>Book a Service</button>
                    <button style={{ backgroundColor: 'transparent', color: '#fff', padding: '24px 55px', borderRadius: '60px', border: '3px solid #fff', fontWeight: '900', fontSize: '1.3rem', backdropFilter: 'blur(10px)' }}>Get Free Estimate</button>
                </div>
            </div>
        </section>
    );
}
