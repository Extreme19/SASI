# Joshiverse modernisation (Phases 1–2)

This branch is for an independent Joshiverse website deployment. Do not modify, connect, or reuse the wedding repository, Vercel project, Supabase project, DNS records, or Resend credentials.

## Approved decisions
- Main domain (future production assignment): `joshiverse.com`
- Public contact: `jjoshiverse@gmail.com`
- `hello@joshiverse.com` forwarding: deferred until after wedding
- Branding: modern Joshiverse / SASI identities
- Build: standalone Next.js / TypeScript application; new Vercel project only
- Release process: preview -> tests/UAT -> production; no domain changes until signed off

## Implementation notes
Existing Create React App remains at repository root on main. A separate Next.js source package has been prepared for review; do not switch Vercel root/build configuration until package code is committed and verified. Contact delivery requires a separately scoped provider API key and verified sender; Gmail is the *recipient*, not an authorised Resend sender.

## Next steps
1. Publish complete source from package on this development branch.
2. Validate install, TypeScript, build, contact endpoint and responsive navigation.
3. Create separate `joshiverse` Vercel project and verify preview deployment.
4. Connect the domain only after reviewing existing DNS, preserving the wedding subdomain and all email records.
