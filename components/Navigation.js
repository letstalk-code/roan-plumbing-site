import { Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site-config';

export default function Navigation() {
    return (
        <nav style={{ padding: '20px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                    {/* Logo Placeholder */}
                    <div style={{ fontWeight: '700', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '8px' }}></div>
                        {siteConfig.businessName}
                    </div>

                    <div style={{ display: 'flex', gap: '25px', fontWeight: '500', color: '#666' }}>
                        <span>Home</span>
                        <span>Services</span>
                        <span>Service Areas</span>
                        <span>Contact</span>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                        <Phone size={18} />
                        {siteConfig.phoneNumber}
                    </div>
                    <button className="btn-primary">
                        Get Free Estimate <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
