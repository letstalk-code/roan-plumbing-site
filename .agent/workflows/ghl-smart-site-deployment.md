---
description: Standard Operating Procedure for Deploying Smart Websites with GHL Integration
---

# Smart Website Deployment SOP

This document outlines the standard procedure for deploying new client websites using the Smart Website Engine and integrating them with GoHighLevel (GHL).

## 1. Codebase Setup
1.  **Duplicate Template**: Copy the relevant master template (e.g., `hvac-professional`, `plumbing-luxury`) for the new client.
2.  **Config Update**: Update `config/site-config.js` with the client's specific details:
    *   Business Name, Phone, Email
    *   Logo (Upload to `/public/images/`)
    *   Service Areas & Neighborhoods
    *   Images (Team, Projects, etc.)
3.  **Theme Customization**: Adjust `config/theme.js` to match the client's brand colors to ensure the site feels bespoke.

## 2. GHL Bridge Integration (The "Universal Pipe")
We use a single Agency-Level Access Token to manage all clients.

### Environment Utility
The route handlers (`/api/submit-yes`, `/api/submit-no`) are already pre-configured to look for:
*   `GHL_ACCESS_TOKEN` (Your Agency Master Key)
*   `GHL_LOCATION_ID` (The Client's Specific Location ID)

### Deployment Steps (Vercel)
1.  **Import Project**: Import the new client's repo/folder into Vercel.
2.  **Environment Variables**: In the Vercel Project Settings > Environment Variables, add:
    *   `GHL_ACCESS_TOKEN`: [Your Fixed Agency PAT] **(Do not change this per client)**
    *   `GHL_LOCATION_ID`: [The New Client's GHL Location ID] **(This is the only variable that changes)**

## 3. "Yes/No" Page Bridge Setup (Loom Integration)
1.  **Yes Page**: The page is live at `/yes`.
    *   **Link Format**: `https://[client-domain].com/yes?email={contact.email}`
    *   **Function**: Auto-fills user data and tags them as `smartsite_yes` in GHL.
2.  **No Page**: The page is live at `/no` (if implemented, or just a trackable link).
    *   **Link Format**: `https://[client-domain].com/no?email={contact.email}`
    *   **Function**: Tags the user as `smartsite_no` in GHL for follow-up nurturing.

## 4. GoHighLevel (GHL) Automation Setup
Since the tags are standardized, you can copy/paste this workflow for every client.

### Workflow: "Smart Website - Interest Confirmed"
*   **Trigger**: Contact Tag Added -> `smartsite_yes`
*   **Action 1**: Send Internal Notification (SMS/Email) to Client: "Hot Lead: [Contact Name] just confirmed interest via the video bridge!"
*   **Action 2**: Add Opportunity to Pipeline (Stage: "Hot Lead")
*   **Action 3**: Send SMS to Lead: "Thanks [Name]! We received your info and [Owner Name] will reach out shortly."

## 5. Verification Checklist
- [ ] Site loads correctly with client branding.
- [ ] Contact form submits and data appears in GHL.
- [ ] `/yes` page routes correctly and tags contact as `smartsite_yes`.
- [ ] Mobile responsiveness check (especially maps and nav).
- [ ] SEO Meta tags updated in `layout.js` or config.

---
**Note**: This SOP ensures we can scale to hundreds of clients without rewriting code or generating new API tokens for every single deployment.
