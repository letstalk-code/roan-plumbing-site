import { Wrench, RefreshCcw, PlusCircle, Snowflake, Home } from 'lucide-react';
import { siteConfig } from '../config/site-config';

const iconMap = {
    wrench: Wrench,
    refresh: RefreshCcw,
    'plus-circle': PlusCircle,
    snowflake: Snowflake,
    home: Home
};

export default function ServicesBar() {
    return (
        <div style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '25px 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {siteConfig.services.map((service, index) => {
                    const Icon = iconMap[service.icon];
                    return (
                        <div key={service.id} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#444', fontWeight: '500', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                            <div style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {Icon && <Icon size={20} />}
                            </div>
                            <span style={{ fontSize: '1.1rem' }}>{service.label}</span>
                            {index !== siteConfig.services.length - 1 && <div style={{ height: '30px', width: '1px', backgroundColor: '#ddd', marginLeft: '40px' }}></div>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
