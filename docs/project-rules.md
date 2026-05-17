# ElyDoc Project Rules

## Project Overview

ElyDoc is a premium Irish online GP and digital healthcare service.

The website is a marketing, education and conversion website. It is not the patient portal, booking system or EMR.

Patient portal, booking and clinical records will be handled through Zanda.

The website should direct patients to appropriate booking flows but should not store confidential medical information.

## Brand Positioning

ElyDoc should feel:

- calm
- premium
- trustworthy
- modern
- evidence-based
- clinically responsible
- minimalist
- elegant
- approachable
- discreet

The brand should communicate:

- doctor-led online healthcare
- specialist GP standards
- convenience without compromising safety
- clear clinical boundaries
- appropriate signposting
- Irish medical professionalism
- modern digital access to care

Core positioning:

"Doctor-led online healthcare for suitable conditions in Ireland."

Alternative positioning:

"Modern GP care, with clear clinical standards."

## Technical Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion for subtle animations only
- lucide-react icons
- Sanity CMS for content management
- Vercel deployment

Do not use:

- Bootstrap
- jQuery
- Material UI
- heavy dependencies
- complex state management unless required
- unnecessary backend systems
- custom EMR functionality
- custom patient portal functionality

## Architecture Principle

The website should be a custom-coded frontend with Sanity as the content backend.

Sanity manages:

- blog posts
- health guides
- service page copy
- FAQs
- testimonials
- policy pages
- SEO metadata
- author/reviewer profiles

Next.js manages:

- layout
- typography
- visual design
- responsive behaviour
- animations
- SEO rendering
- schema markup
- navigation
- conversion components

Do not turn Sanity into a complex drag-and-drop page builder initially.

Use fixed, beautiful templates.

## Clinical Services

ElyDoc offers:

1. General online GP consultations  
   For a wide range of suitable primary care issues. Where physical examination, urgent care or investigations are required, the doctor will signpost the patient to an appropriate service.

2. GP-led weight management clinic  
   Including lifestyle advice and use of GLP-1 medication where clinically suitable.

3. GP-led hair loss clinic  
   Advice and management of male pattern hair loss.

4. Employer notes for work absence  
   Employer notes / work absence notes where clinically appropriate following a brief online GP consultation. ElyDoc does not currently offer Illness Benefit or social welfare certification. Illness Benefit certification generally requires completion of an IB1 form by the patient's own GP or appropriate treating doctor.

5. Private referrals  
   Open referrals to private services where appropriate. Referral is issued to the patient to forward to the private provider of their choice. Selected referrals for investigations may be provided, including imaging for suitable MSK injuries. Chronic lower back pain generally requires in-person assessment.

6. Prescriptions  
   Limited prescription service. This may include bridging prescriptions for medications patients are already established on, short-term treatments, and longer-term treatments for selected suitable conditions.

## What ElyDoc Does Not Do

Frame this as "Clinical Safety & Service Limitations", not as a negative section.

ElyDoc does not:

1. Manage complex medical conditions that require regular physical examination and blood tests.

2. Initiate treatment for complex conditions. In general, ElyDoc does not initiate SSRIs, hormone replacement therapy, or osteoporosis treatment.

3. Manage emergency presentations such as chest pain, severe shortness of breath, stroke symptoms, major trauma, severe acute abdominal pain, suicidal ideation, or other urgent/emergency symptoms.

4. Prescribe controlled or restricted drugs such as morphine, opioid analgesics, benzodiazepines, sleeping tablets or similar high-risk medications.

5. Manage ADHD.

6. Refer to private ADHD clinics.

## Clinical Language Rules

Always use careful medical wording.

Use:

- "where suitable"
- "where clinically appropriate"
- "following GP consultation"
- "employer note"
- "work absence note"
- "may require in-person assessment"
- "the doctor may signpost you"
- "not suitable for emergencies"
- "this service does not replace emergency care"

Avoid:

- "instant prescription"
- "instant sick cert"
- "guaranteed sick cert"
- "social welfare cert"
- "Illness Benefit cert"
- "guaranteed prescription"
- "get medication now"
- "we treat everything"
- "avoid your GP"
- "no questions asked"
- "cure"
- "miracle"
- "risk-free"
- "guaranteed results"

## Doctor Credential Trust Signal

ElyDoc should emphasise that its doctors are:

- vocationally trained General Practitioners
- trained through specialist GP training schemes in Ireland
- registered with the Irish Medical Council
- on the Specialist Division of the Register for General Practice

Suggested copy:

"Our consultations are provided by vocationally trained GPs who have completed specialist GP training in Ireland and are registered on the Specialist Division for General Practice with the Irish Medical Council."

Do not attack competitors directly.

Acceptable wording:

"Not all online doctor services are delivered by specialist-trained GPs. At ElyDoc, specialist GP training is central to our clinical model."

## Employer / Corporate Health Offering

The site should include a dedicated employer-facing section at:

/employers

This section should offer online GP consultations as an employee benefit.

Positioning:

"ElyDoc helps Irish employers provide convenient access to doctor-led online GP care for their teams."

Primary CTA:

"Contact us for demo / pricing"

Employer page should include:

- overview of the service
- benefits for employers
- benefits for employees
- how the service works
- confidentiality reassurance
- demo / pricing enquiry CTA
- FAQ section
- doctor credential trust section

Important privacy language:

- Employers do not receive clinical details from employee consultations.
- The doctor-patient relationship remains confidential.
- Any occupational health reporting would require a separate agreed process and patient consent.

## AI Suitability Assistant

The website may later include an AI suitability assistant.

This should be framed as:

"Can ElyDoc help me?"

It should not diagnose patients.

It should help users understand whether ElyDoc may be suitable for their issue and when urgent or in-person care may be needed.

The assistant should provide:

- service routing
- safety-netting
- suitability guidance
- booking direction

It should not provide:

- diagnosis
- definitive triage
- autonomous clinical decisions
- treatment recommendations
- prescription decisions

## SEO Principles

The website should be structured for strong SEO.

Prioritise:

- service-specific landing pages
- content hubs
- Irish-specific search intent
- clear internal linking
- FAQ sections
- schema markup
- medical article templates
- fast loading
- mobile-first UX
- readable headings
- clean metadata

Important keywords/topics include:

- online GP Ireland
- online doctor Ireland
- online prescription Ireland
- employer note online Ireland
- weight loss clinic Ireland
- Mounjaro Ireland
- Wegovy Ireland
- GLP-1 Ireland
- hair loss treatment Ireland
- finasteride Ireland
- private GP referral Ireland
- corporate online GP Ireland
- employee GP benefit Ireland

## Build Philosophy

Build the site section by section.

Do not generate the entire site in one go.

Preferred build order:

1. Project architecture
2. Design system
3. Layout components
4. Homepage scaffold
5. Navigation/footer
6. Service cards
7. Trust blocks
8. Service page template
9. Blog/article template
10. Sanity integration
11. Employer page
12. SEO metadata and schema
13. AI suitability assistant later

Always prefer simplicity over complexity.
