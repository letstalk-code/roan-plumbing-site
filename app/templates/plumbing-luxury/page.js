import LuxuryHero from '../../../master-templates/plumbing-luxury/components/LuxuryHero';
import LuxuryDetails from '../../../master-templates/plumbing-luxury/components/LuxuryDetails';
import BentoServices from '../../../master-templates/plumbing-luxury/components/BentoServices';
import Testimonials from '../../../master-templates/plumbing-luxury/components/Testimonials';
import ServiceAreas from '../../../master-templates/plumbing-luxury/components/ServiceAreas';
import Footer from '../../../master-templates/plumbing-luxury/components/Footer';


export default function Home() {
    return (
        <main style={{ backgroundColor: '#fff' }}>
            <LuxuryHero />
            <LuxuryDetails />
            <BentoServices />
            <Testimonials />
            <ServiceAreas />

            <Footer />

            {/* Syne Font for this template */}
            <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
        </main>
    );
}

