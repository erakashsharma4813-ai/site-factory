# Premium/Cosmetic Dental Website Creation Prompt

Use this prompt only after the clinic has already been researched and classified as Premium/Cosmetic or Neighborhood + Cosmetic.

Reference template:
`dental-sites/clinic-4-dream-smile/index.html`

## Prompt

```
You are creating a one-page website for a Premium/Cosmetic dental clinic.

Use this reference template:
dental-sites/clinic-4-dream-smile/index.html

Target clinic research:
[Paste confirmed research output here]

Build a customized single-file React HTML website for this clinic.

Premium/Cosmetic rules:
- The site should feel polished, aspirational, calm, and result-oriented.
- Use the Dream Smile website structure as the reference: full first-viewport hero, slideshow background, content card over the slideshow, premium color tone, scroll reveal cards, tooth/service map, appointment planner, mobile sticky actions, and desktop floating WhatsApp.
- Do not make it look like the Neighborhood+ or Family templates.
- The website should build confidence through proof, clarity, and careful treatment explanation. Do not repeatedly use the word "trust".
- Keep locality references mostly in the contact/address section. The site should speak to patients across the city.
- If the clinic has Instagram or social media, include it as a real clinic update link. Do not copy social media images unless they are provided or approved by the owner.
- Use dental/cosmetic visuals: healthy smile, shade matching, consultation, dental X ray discussion, dental chair, clean treatment room, aligner/smile planning.
- Avoid uncomfortable close-up procedure photos, blood, extraction visuals, aggressive tools, or repeated mouth photos.
- Do not reuse the same image in multiple sections.

Facts:
- Use real facts only.
- If a fact is missing, do not add a placeholder.
- Write the sentence so the missing fact is not required.
- If phone or WhatsApp is user-verified, use it directly in `tel:` and `wa.me` links.
- If Instagram is verified, include a top-strip or contact-section Instagram link.
- If doctor qualification is not fully confirmed, phrase it using only confirmed wording such as "orthodontic practice context" or "publicly listed as owner".

Required design direction:
- Hero must cover the first viewport so the next section does not look cut off.
- Hero background should be a slideshow.
- The first hero slide should usually be the strongest cosmetic/smile image.
- Hero content and CTA card remain fixed over the slideshow while only the background changes.
- Use a premium color palette: plum, rose gold, muted mauve, off-white, soft charcoal, or similar calm cosmetic tones.
- Avoid green as a main palette color except for WhatsApp.
- Use smooth scroll reveal effects for cards and sections.
- Use a large central tooth/service explanation section similar to Dream Smile.
- Use cards with the same premium motion/elevation style as the reference site.

Required sections:
1. Top strip with verified location, phone, and Instagram if available.
2. Header with clinic branding and appointment CTA.
3. Full-viewport slideshow hero with:
   - clinic positioning
   - main cosmetic/dental care headline
   - WhatsApp question CTA
   - appointment CTA
   - call CTA
   - fixed welcome/need-help card over background
4. Quick proof cards near top.
5. About the doctor/clinic with confirmed doctor context.
6. Services grid.
7. Large tooth/service map explaining all main services.
8. Why choose section written through care process, clarity, comfort, and clean clinical flow.
9. Gallery/clinic experience section with modest dental visuals and Instagram link if available.
10. Patient voices/testimonial-style section based on review themes only.
11. Appointment planner:
   - patient name
   - date input
   - exact time slots
   - concern select
   - optional notes
   - visible "Send Appointment Request" button
   - predefined WhatsApp message with selected date/time/concern
12. Contact section with address, phone, WhatsApp, doctor info, care focus, map.
13. Mobile sticky WhatsApp + Call bar.
14. Desktop floating WhatsApp bubble.

CTA rules:
- WhatsApp is for simple patient questions.
- Appointment booking is for date/time planning and sends a predefined WhatsApp message.
- Call is for urgent pain, swelling, same-day guidance, or patients who prefer speaking directly.
- Button labels must be meaningful:
  - WhatsApp a Question
  - Book an Appointment
  - Send Appointment Request
  - Call Clinic
  - View Instagram Updates

Copy rules:
- Avoid generic filler like "your trusted partner in oral health".
- Avoid overusing locality names in every heading.
- Build confidence through specifics:
  - smile planning
  - shade and alignment discussion
  - treatment sequence
  - diagnosis before treatment
  - comfort and privacy
  - clean clinical setup
  - WhatsApp questions welcome
  - call for urgent dental concerns
- For missing reviews, do not invent reviewer names. Use "patient voices" or "common patient concerns" phrasing based on actual review themes.
- For missing years of experience, do not invent years. Say "doctor-led care" or refer to confirmed education/publication/clinic ownership context.

Technical rules:
- Create or update only the target clinic `index.html`.
- Keep it single-file.
- Use React 18 UMD, Babel Standalone, Font Awesome, and Google Fonts as in the existing templates.
- Keep styling mobile-first.
- Verify no mobile overlap.
- Verify the hero does not expose a cut-off second section on first load.
- Verify WhatsApp links include predefined messages and direct `wa.me` when the number is known.
- Verify no duplicate image URLs are used.
- Verify no placeholder text remains.
```
