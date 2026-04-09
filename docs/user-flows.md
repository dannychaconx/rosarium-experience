# User Flows

## Flow 1: New User (QR Scan)

Trigger:
- User scans QR code

System Behavior:
- Load landing page
- Default language = Spanish

User Actions:
1. Tap "Start Prayer"
2. Select intention
3. Progress through prayer steps

System Responses:
- Track progress locally
- Update UI step-by-step

End State:
- Show completion screen

## Flow 2: Returning User

Trigger:
- User revisits the app

System Behavior:
- Detect previous progress using localStorage

User Actions:
1. Resume previous session OR
2. Start a new prayer

System Responses:
- Load correct step
- Maintain language preference

End State:
- Show completion screen

## Flow 3: Language Toggle

Trigger:
- User switches language

System Behavior:
- Update all visible text

User Actions:
- Continue interaction without reset

End State:
- Same screen, new language
