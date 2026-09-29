# Portfolio analytics setup

This repository supports Google Analytics 4 (GA4) without hard-coding the measurement ID.

## What it tracks

- page views and engagement
- approximate city, region, and country
- device/browser and traffic source
- a `generate_lead` event when the contact form is submitted

It intentionally does **not** send a visitor's name, email address, message, GPS coordinates, or other personally identifiable information to Google Analytics.

## Enable analytics

1. Create a GA4 property and a Web data stream for `https://niloy-datta.github.io`.
2. Copy the Measurement ID (format: `G-XXXXXXXXXX`).
3. In GitHub, open **Settings → Secrets and variables → Actions → Variables**.
4. Create a repository variable named `NEXT_PUBLIC_GA_ID` and set it to the Measurement ID.
5. Deploy the site again (or merge this branch to `main`).

The GitHub Pages workflow exposes that repository variable only during the static build. The measurement ID is public by design; do not put API secrets in a `NEXT_PUBLIC_` variable.

## Where to view traffic

In Google Analytics:

- **Reports → Realtime** for current visitors
- **Reports → User attributes → Demographic details** for country/region/city
- **Reports → Acquisition** for traffic source
- **Reports → Engagement → Events** for `generate_lead`

## Email identity

A website cannot silently discover a visitor's Gmail address. The current contact form asks for an email address and opens the visitor's email client. If individual lead storage is needed later, connect the form to a consent-based backend (for example Supabase/Formspree) and keep that data separate from GA4.
