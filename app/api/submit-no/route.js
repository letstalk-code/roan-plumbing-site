import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email } = await request.json();

        const GHL_ACCESS_TOKEN = process.env.GHL_ACCESS_TOKEN;
        const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

        if (!GHL_ACCESS_TOKEN || !GHL_LOCATION_ID) {
            return NextResponse.json({ success: false, error: 'Configuration Error' }, { status: 500 });
        }

        // Add 'smartsite_no' tag to the contact
        // Note: For 'NO' click, we might not have the email in the browser state if they haven't filled a form.
        // Usually, the email is passed as a URL parameter in the Loom link sent via GHL.

        if (!email) {
            return NextResponse.json({ success: false, error: 'Email missing' }, { status: 400 });
        }

        const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GHL_ACCESS_TOKEN}`,
                'Version': '2021-07-28'
            },
            body: JSON.stringify({
                locationId: GHL_LOCATION_ID,
                email: email,
                tags: ['smartsite_no']
            }),
        });

        if (ghlResponse.ok) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
