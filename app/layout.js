import './globals.css';

export const metadata = {
    title: 'Roan Plumbing Service | Quality Plumbing Done Right',
    description: 'Expert, honest, and affordable plumbing in Land O\' Lakes, FL. 24/7 emergency services and smart plumbing solutions.',
    openGraph: {
        title: 'Roan Plumbing Service',
        description: 'Elite plumbing repairs, water heaters, and smart bathroom transformations.',
        url: 'https://roan-plumbing-site.vercel.app',
        siteName: 'Roan Plumbing Service',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200',
                width: 1200,
                height: 630,
                alt: 'Roan Plumbing Service Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
