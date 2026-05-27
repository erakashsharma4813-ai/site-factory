# Neighborhood+ Dental Website Creation Prompt

Use this prompt only after the clinic has already been researched and classified as Neighborhood+.

Reference template:
`dental-sites/clinic-1-dr-annu/index.html`

## Prompt

```
You are creating a one-page website for a Neighborhood+ dental clinic.

Use this reference template:
dental-sites/clinic-1-dr-annu/index.html

Target clinic research:
[Paste confirmed research output here]

Build a customized single-file React HTML website for this clinic.

Neighborhood+ rules:
- Warm, doctor-led, polished, but not premium/cosmetic.
- City-level reach. Do not repeat one locality throughout the website.
- The site should build patient confidence through clear content, not by repeatedly saying "trust".
- WhatsApp is for patient questions.
- Appointment booking is a secondary path with a calendar/date input, time slots, concern select, and a predefined WhatsApp message.
- Call is clearly available for urgent pain, swelling, or immediate concerns.
- Use modest dental imagery only. Healthy teeth, dental chair, consultation, X ray discussion, treatment explanation.
- Avoid uncomfortable close-up mouth procedure photos.
- Do not reuse the same image in hero and lower sections.
- Treatment cards should use clean icons or icon panels, not repeated photos.
- Mobile must not overlap.
- Sticky bottom WhatsApp and Call bar must show a visible WhatsApp icon.

Facts:
- Use real facts only.
- If a fact is missing, do not add a placeholder.
- Write the sentence so the missing fact is not required.
- If review names are unavailable, use patient-style testimonial labels only when supported by review context, or use anonymous feedback wording.

Required sections:
1. Header.
2. Hero with clinic positioning, rating if known, WhatsApp query CTA, Plan a Visit CTA, and dental visual collage.
3. Reviews or patient voices near the top.
4. About the doctor.
5. Treatments at the clinic with icon-led cards.
6. Questions are welcome section.
7. Before Treatment Starts section.
8. Appointment request section.
9. Contact, phone, hours, map.
10. Mobile sticky WhatsApp and Call bar.
11. Desktop floating WhatsApp bubble.

Copy rules:
- Avoid generic filler like "your trusted partner in oral health".
- Avoid repeatedly using the word "trust".
- Build confidence through specifics:
  - clear explanation
  - prepared room
  - clean equipment
  - treatment options
  - call for urgent pain
  - WhatsApp for simple queries
  - appointment confirmation before visiting
- Button labels should be meaningful:
  - Ask a Dental Question
  - Plan a Visit
  - WhatsApp the Clinic
  - Send Appointment Request
  - Call the Clinic

Output:
- Create or update only the target clinic `index.html`.
- Keep it single-file.
- Keep styling mobile-first.
- Verify no horizontal overlap on mobile.
- Verify WhatsApp links include predefined messages.
```
