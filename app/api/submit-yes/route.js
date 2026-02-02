import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();

        // -------------------------------------------------------------------------
        // GHL BRIDGE CONFIGURATION
        // -------------------------------------------------------------------------
        // To reuse the "Pivotal Plumbing" token for new clients:
        // 1. Ensure the Access Token is an AGENCY-LEVEL Personal Access Token.
        // 2. Simply change the GHL_LOCATION_ID in your Vercel Environment Variables for each new client site.
        // This allows ONE token to manage unlimited client locations.
        // -------------------------------------------------------------------------

        const GHL_ACCESS_TOKEN = process.env.GHL_ACCESS_TOKEN;
        const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

        if (!GHL_ACCESS_TOKEN || !GHL_LOCATION_ID) {
            console.error('GHL Credentials missing in environment');
            return NextResponse.json({ success: false, error: 'Configuration Error: Missing Credentials' }, { status: 500 });
        }

        const rawPhone = data.phone || '';
        let cleanPhone = rawPhone.replace(/[^\d+]/g, '');

        // Heuristic for US numbers: if 10 digits, add +1.
        if (cleanPhone.length === 10 && !cleanPhone.startsWith('+')) {
            cleanPhone = `+1${cleanPhone}`;
        } else if (cleanPhone.length === 11 && cleanPhone.startsWith('1')) {
            cleanPhone = `+${cleanPhone}`;
        }

        // Prepare GHL API Request
        // API v2 endpoint: https://services.leadconnectorhq.com/contacts/upsert
        const contactPayload = {
            locationId: GHL_LOCATION_ID, // This is dynamic per site deployment
            firstName: data.name ? data.name.split(' ')[0] : 'New',
            lastName: data.name ? data.name.split(' ').slice(1).join(' ') : 'Lead',
            email: data.email,
            phone: cleanPhone,
            companyName: data.businessName || '',
            tags: ['smartsite_yes']
        };

        console.log('Sending to GHL Location:', GHL_LOCATION_ID);

        const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GHL_ACCESS_TOKEN}`,
                'Version': '2021-07-28'
            },
            body: JSON.stringify(contactPayload),
        });

        const responseData = await ghlResponse.json();

        if (ghlResponse.ok) {
            console.log('GHL Success:', JSON.stringify(responseData));
            return NextResponse.json({ success: true, data: responseData });
        } else {
            console.error('GHL API Submission Failed:', JSON.stringify(responseData));
            return NextResponse.json({
                success: false,
                error: responseData.message || 'API submission failed',
                details: responseData
            }, { status: ghlResponse.status });
        }
    } catch (error) {
        console.error('Bridge API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
