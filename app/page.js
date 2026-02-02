import CoolHero from '../components/CoolHero';
import HowItWorks from '../components/HowItWorks';
import CoolFAQ from '../components/CoolFAQ';
import Footer from '../components/Footer';
import { theme } from '../config/theme';
import { siteConfig } from '../config/site-config';

export default function Home() {
    return (
        <main>
            <CoolHero />
            <HowItWorks />

            {/* Services Section */}
            <section style={{ padding: '120px 0', backgroundColor: '#fff' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                    <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800"
                        style={{ width: '100%', borderRadius: '24px' }}
                        alt="Plumbing Service"
                    />
                    <div>
                        <h2 style={{ fontSize: '4rem', fontWeight: '600', marginBottom: '30px', color: theme.colors.primary }}>Quality Plumbing For Every Home</h2>
                        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
                            From leaky faucets to high-end smart toilet installations, {siteConfig.businessName} provides expert solutions with 5-star reliability.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <ServiceItem label="Water Heater Repair & Install" />
                            <ServiceItem label="Smart Toilet Technology" active />
                            <ServiceItem label="Drain Cleaning & Stoppage" />
                        </div>
                    </div>
                </div>
            </section>

            <CoolFAQ />
            <Footer config={siteConfig} />
        </main>
    );
}

function ServiceItem({ label, active }) {
    return (
        <div style={{ padding: '25px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600', fontSize: '1.1rem' }}>
            {label}
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', border: active ? 'none' : '1px solid #ddd', backgroundColor: active ? theme.colors.primary : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: active ? '#fff' : '#ddd' }}></div>
            </div>
        </div>
    );
}
