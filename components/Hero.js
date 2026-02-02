import { User, Phone, Mail, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../config/site-config';

export default function Hero() {
    return (
        <section style={{ padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

                {/* Left Side: Copy */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#B8860B', marginBottom: '20px' }}>
                        <span style={{ fontSize: '1.2rem' }}>★★★★★</span>
                        <span style={{ fontWeight: '600' }}>5.0 (243 reviews)</span>
                    </div>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '30px', maxWidth: '500px' }}>
                        Innovative and Personalized <span style={{ fontStyle: 'italic', fontWeight: '300' }}>HVAC Solutions.</span>
                    </h1>

                    {/* Decorative Path Element (SVG) */}
                    <div style={{ position: 'relative', marginTop: '40px' }}>
                        <div style={{ width: '100%', height: '200px', backgroundColor: '#eee', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=800" alt="Technician" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        {/* The floating wave line */}
                        <svg style={{ position: 'absolute', top: '50%', right: '-80px', width: '300px', height: '100px', zIndex: 1 }} viewBox="0 0 300 100">
                            <path d="M0,50 Q150,0 300,50" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="10 5" />
                        </svg>
                    </div>
                </div>

                {/* Right Side: Lead Form */}
                <div style={{ position: 'relative' }}>
                    <div className="glass-card" style={{ padding: '40px', maxWidth: '500px', marginLeft: 'auto' }}>
                        <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '30px' }}>Let Us Help You Today.</h3>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={inputGroupStyle}>
                                <User size={18} color="#999" />
                                <input type="text" placeholder="Full Name" style={inputStyle} />
                            </div>
                            <div style={inputGroupStyle}>
                                <Phone size={18} color="#999" />
                                <input type="text" placeholder="Phone Number*" style={inputStyle} />
                            </div>
                            <div style={inputGroupStyle}>
                                <Mail size={18} color="#999" />
                                <input type="email" placeholder="Email Address*" style={inputStyle} />
                            </div>
                            <div style={inputGroupStyle}>
                                <MapPin size={18} color="#999" />
                                <input type="text" placeholder="Select Zip Code*" style={inputStyle} />
                            </div>
                            <div style={inputGroupStyle}>
                                <textarea placeholder="Write your comment" style={{ ...inputStyle, height: '100px' }}></textarea>
                            </div>

                            <button className="btn-primary" style={{ justifyContent: 'center', marginTop: '10px', width: '100%' }}>
                                Get Free Estimate
                            </button>
                        </form>
                    </div>

                    {/* Background blurred sphere for depth */}
                    <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', backgroundColor: 'rgba(255, 215, 0, 0.1)', filter: 'blur(80px)', borderRadius: '50%', zIndex: -1 }}></div>
                </div>

            </div>
        </section>
    );
}

const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    transition: 'border-color 0.3s ease'
};

const inputStyle = {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '1rem',
    color: '#333'
};
