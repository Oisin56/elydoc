# ElyDoc Site Architecture

## Primary Website Purpose

The website should:

- explain ElyDoc clearly
- build trust
- rank in Google
- convert suitable patients into bookings
- route unsuitable patients appropriately
- educate patients
- generate employer enquiries
- support future content growth

It should not:

- function as the EMR
- store clinical notes
- replace Zanda
- collect unnecessary medical information
- overpromise online care

## Primary Navigation

Suggested main nav:

- Online GP
- Weight Management
- Hair Loss
- Sick Certs
- Prescriptions & Referrals
- Employers
- Health Guides
- About

Primary CTA:

- Book consultation

Secondary CTA:

- Check suitability

Employer CTA:

- Contact for demo / pricing

## Core Routes

Homepage:

/

Service pages:

/online-gp  
/weight-management  
/hair-loss  
/sick-certs  
/prescriptions-referrals  
/employers  

Content hub:

/health-guides  

Individual articles:

/health-guides/[slug]

Policy pages:

/privacy-policy  
/terms  
/clinical-safety  
/prescribing-policy  
/cookie-policy  

About page:

/about

Contact:

/contact

## Homepage Structure

Recommended homepage sections:

1. Hero  
   Clear positioning, primary CTA, secondary CTA.

2. Service overview  
  Cards for Online GP, Weight Management, Hair Loss, Sick Certs, Prescriptions & Referrals.

3. Specialist GP trust block  
   Explain vocational GP training, Irish specialist training, IMC Specialist Division.

4. How it works  
   Simple 3-step process:
   - Choose a suitable service
   - Book through secure patient portal
   - Consult with a GP and receive appropriate advice, prescription, certification or signposting

5. Clinical safety section  
   Explain appropriate online care and limitations.

6. Employer section  
   Introduce online GP care as an employee benefit with CTA to /employers.

7. Health guides preview  
   Latest articles from Sanity.

8. FAQ section  
   Common questions.

9. Final CTA  
   Book consultation / check suitability.

## Service Page Template

Each service page should include:

- hero
- who the service is for
- what ElyDoc can help with
- what may require in-person care
- how it works
- pricing/booking CTA if available
- clinical safety notes
- relevant FAQs
- related health guides
- final CTA

## Employer Page Structure

/employers should include:

1. Hero  
   "Online GP access as an employee benefit"

2. Employer value proposition  
   Timely access to doctor-led online GP care.

3. Benefits for employers  
   - support employee wellbeing
   - reduce unnecessary time away from work
   - modern employee benefit
   - simple access to care
   - clear governance

4. Benefits for employees  
   - convenient GP access
   - discreet consultations
   - appropriate signposting
   - specialist GP standards

5. How it works  
   - employer enquiry
   - demo/pricing
   - onboarding
   - employees access booking flow

6. Confidentiality section  
   Employers do not receive clinical details.

7. Doctor credentials trust block

8. FAQ

9. CTA  
   Contact for demo / pricing

## Health Guides

The health guides section should be CMS-driven through Sanity.

Article categories:

- Online GP care
- Weight management
- GLP-1 medication
- Hair loss
- Prescriptions
- Employer notes / work absence notes
- Referrals
- Employer health
- Clinical safety

## SEO Clusters

### Online GP Cluster

Hub:

/online-gp

Supporting guides:

- What can an online GP treat?
- When is online GP care not suitable?
- Can online doctors prescribe antibiotics?
- Online GP vs in-person GP
- How online consultations work in Ireland

### Weight Management Cluster

Hub:

/weight-management

Supporting guides:

- What are GLP-1 medications?
- Mounjaro in Ireland
- Wegovy in Ireland
- Who is suitable for GLP-1 treatment?
- Side effects of GLP-1 medication
- Weight loss plateau on GLP-1 medication
- Protein intake during medical weight loss

### Hair Loss Cluster

Hub:

/hair-loss

Supporting guides:

- Male pattern hair loss explained
- Finasteride in Ireland
- Minoxidil explained
- Finasteride side effects
- When to see a doctor about hair loss

### Sick Cert Cluster

Hub:

/sick-certs

Supporting guides:

- Can you get an employer note online in Ireland?
- When is a work absence note appropriate?
- Illness Benefit certification and the IB1 process in Ireland

Important policy note:

- ElyDoc currently provides employer notes / work absence notes only, where clinically appropriate following consultation.
- ElyDoc does not currently provide Illness Benefit or social welfare certification.
- Illness Benefit certification generally requires an IB1 form completed by the patient's own GP or appropriate treating doctor.

### Prescriptions & Referrals Cluster

Hub:

/prescriptions-referrals

Supporting guides:

- Can online doctors issue prescriptions?
- What medications are not suitable for online prescribing?
- Private GP referrals in Ireland
- Imaging referrals for MSK injuries

### Employer Cluster

Hub:

/employers

Supporting guides:

- Online GP services as an employee benefit
- How employers can support staff access to healthcare
- Confidentiality in employer-provided GP services

## Sanity Content Types

Initial Sanity schemas should include:

1. BlogPost
2. ServicePage
3. FAQ
4. Author
5. Testimonial
6. PolicyPage
7. Category

Do not create too many schemas initially.

## Conversion Rules

Every page should have a clear next step.

Patient-facing pages:

- Book consultation
- Check suitability

Employer pages:

- Contact for demo / pricing

Educational articles:

- Read related guide
- View relevant service
- Book consultation where appropriate

## Safety Rule

All pages should make clear that ElyDoc is not suitable for emergencies.

Emergency presentations should be directed to appropriate urgent/emergency services.
