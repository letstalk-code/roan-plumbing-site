import './globals.css';

export const metadata = {
    title: 'Premium Smart Website | AI-Driven Local Business Solutions',
    description: 'The highest-converting website platform for home service professionals.',
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
