# Devin Prompt Sequence

## Context
You are building a mobile-first guided prayer application called Rosarium.

The goal is to convert real-world moments (triggered by QR codes) into a guided rosary experience.

The application must be simple, fast, and distraction-free.

All UI should be optimized for mobile devices.

---

## Technical Constraints
- Use Next.js (latest version)
- Use React functional components
- No backend required initially
- Use localStorage for persistence
- Load all content from static JSON files
- Keep dependencies minimal

---

## Prompt 1: Landing Page

Build a mobile-first landing page with:

- Title: "A rose can become a prayer"
- Subtitle: "Turn this moment into a guided prayer"
- Primary button: "Start Prayer"
- Language toggle: English / Spanish
- Clean, minimal, reverent design

---

## Prompt 2: Intention Selection

Create an intention selection screen:

- Title: "Who is this prayer for?"
- Options:
  - Family
  - Healing
  - Gratitude
  - In Memory
  - Guidance
  - Peace
- Continue button
- Persist selected intention

---

## Prompt 3: Guided Rosary Flow

Build the guided prayer experience:

- Display mystery of the day
- Load prayer text dynamically from JSON
- Show one step at a time
- Include:
  - Back button
  - Next button
  - Progress indicator
- Track progress using localStorage

---

## Prompt 4: Completion Screen

Create completion screen:

- Message: "Your prayer is complete"
- Option to restart
- Optional email capture (no backend required yet)

---

## Prompt 5: Language Support

Implement bilingual support:

- Toggle between English and Spanish
- All text loaded from JSON
- Persist language preference

---

## Output Requirements

- Clean component structure
- Reusable components
- Clear file organization
- Mobile-first responsive design

## File Structure Expectations

- /app or /pages for routing (Next.js)
- /components for reusable UI elements
- /content for JSON data files (prayers, mysteries, intentions)
- /styles for global styles
