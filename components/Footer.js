import { siteConfig as defaultSiteConfig } from '../config/site-config';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ config }) {
    const siteConfig = config || defaultSiteConfig;

    return (
        <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #eee', padding: '100px 0 40px 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '80px' }}>

                    <div>
                        <div style={{ marginBottom: '25px' }}>
                            {siteConfig.logoUrl ? (
                                <img src={siteConfig.logoUrl} alt={siteConfig.businessName} style={{ height: '100px', width: 'auto', objectFit: 'contain' }} />
                            ) : (
                                <div style={{ fontWeight: '700', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '32px', height: '32px', backgroundColor: '#1A2B48', borderRadius: '8px' }}></div>
                                    {siteConfig.businessName}
                                </div>
                            )}
                        </div>
                        <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '30px', maxWidth: '300px' }}>
                            {siteConfig.businessName} provides premium solutions done right the first time. Proudly serving {siteConfig.location || 'your local community'}.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <SocialIcon Icon={Facebook} />
                            <SocialIcon Icon={Twitter} />
                            <SocialIcon Icon={Instagram} />
                            <SocialIcon Icon={Linkedin} />
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Company</h4>
                        <FooterLinks links={['About Us', 'Blog', 'Services', 'Careers', 'Contact']} />
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Popular Services</h4>
                        <FooterLinks links={['Water Heaters', 'Drain Cleaning', 'Smart Toilets', 'Fixture Repair', 'Emergency Plumbing']} />
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <ContactItem Icon={MapPin} text={siteConfig.location || 'Land O\' Lakes, FL'} />
                            <ContactItem Icon={Phone} text={siteConfig.phoneNumber} />
                            <ContactItem Icon={Mail} text={siteConfig.email} />
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #eee', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '0.9rem' }}>
                    <p>Licensed & Insured. Copyright © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <span>Terms and Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const SocialIcon = ({ Icon }) => (
    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
        <Icon size={18} color="#333" />
    </div>
);

const FooterLinks = ({ links }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {links.map((link, i) => (
            <a key={i} href="#" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>{link}</a>
        ))}
    </div>
);

const ContactItem = ({ Icon, text }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#666' }}>
        <Icon size={18} color="#1A2B48" />
        <span>{text}</span>
    </div>
);
