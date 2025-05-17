# Merlinfest Interactive Visuals - Software Specification

## Project Overview

**Merlinfest.com** will be an interactive web platform allowing users to:

- Control projected visuals in real-time during the May 17th darty
- Generate Merlin-themed festival/rave visuals
- Interact collectively in a shared visual experience
- Celebrate Merlin's legacy at Brown

## Event Context

Merlinfest is a celebration for Merlin the cat, featuring:

- Date: Saturday, May 17, 4PM-8PM
- Location: 78 Arnold St
- Expected attendance: ~100 people
- Featured DJs: Jace End, nbafungboy, A-Wick, Flegalon, Olow, No Offense, and bpldanville
- Purpose: Celebrating Merlin and the end of time at Brown University

## Technical Architecture

```
Client (Next.js 15 Frontend)
  ↕️ WebSockets/Server-Sent Events
Server (Next.js API Routes + WebSocket Server)
  ↕️ Database Connection
Database (Visual states, user interactions)
  ↔️ Media Assets (Merlin images, visual effects)
```

## Core Features

### 1. Real-time Visual Controller

- Interactive UI elements to modify visuals
- Preset visual themes with Merlin elements
- Live preview of current projection
- Mobile-friendly controls for partygoers

### 2. Collaborative Experience

- Multiple users can influence visuals simultaneously
- Voting system for visual themes/effects
- Visual representation of active users
- Activity feed showing recent interactions

### 3. Projection Display View

- Dedicated URL for the projection screen
- Full-screen optimized visuals
- Responsive to controller inputs
- Fallback visuals if connection is lost

### 4. DJ Integration

- Visual presets for each DJ's set
- Optional beat detection/audio reactivity
- Transition effects between sets
- Timer/schedule integration for DJ changeovers

## Technical Stack

### Frontend

- Next.js 15
- React 18+
- TailwindCSS
- Three.js/p5.js for visuals
- SWR for data fetching
- zustand for state management

### Backend

- Next.js API routes
- Socket.io for real-time communication
- Node.js runtime

### Database & Storage

- PlanetScale (MySQL) or Supabase
- Cloudinary or AWS S3 for media assets

### Deployment

- Vercel for hosting
- Custom domain (merlinfest.com)
- GitHub for version control

## Detailed Technical Implementation

### Visual Engine

Three.js will be used for 3D visuals with the following components:

```javascript
// Core components
- MerlinVisualizer: Main rendering engine
- EffectController: Manages active visual effects
- AssetManager: Loads and caches Merlin images/assets
- AnimationLoop: Maintains smooth rendering cycle
```

### Real-time Communication

Socket.io will handle real-time updates:

```javascript
// Client-side
const socket = io();
socket.on("visual-update", (data) => {
  visualEngine.updateParams(data);
});

// Server-side (in Next.js API route)
io.on("connection", (socket) => {
  socket.on("control-change", (data) => {
    // Process input
    io.emit("visual-update", processedData);
  });
});
```

### User Control Interface

Create intuitive UI controls:

1. Slider components for parameters (speed, intensity)
2. Color pickers for visual themes
3. Effect buttons for triggering animations
4. Preset selectors for different Merlin moods

## Merlin-Themed Visual Ideas

1. **DJ Merlin Mode**: Cat with headphones (like poster) reacting to controls
2. **Wizard Merlin**: Magical effects with cat silhouettes
3. **Chivalry Merlin**: Medieval-themed visuals with knight cats
4. **Cosmic Merlin**: Space-themed cat visuals with stars and galaxies
5. **Brown University Merlin**: Campus landmarks with Merlin integrated

## Data Modeling

### User Sessions

```typescript
interface UserSession {
  id: string;
  nickname?: string;
  joinedAt: Date;
  lastActive: Date;
  voteCount: number;
}
```

### Visual State

```typescript
interface VisualState {
  activeTheme: string;
  parameters: {
    speed: number;
    intensity: number;
    colorScheme: string;
    effectIds: string[];
  };
  activeUsers: number;
  lastUpdated: Date;
}
```

## Security Considerations

1. Rate limiting for user inputs
2. Content moderation for any user-generated content
3. Basic authentication for admin controls
4. DDoS protection

## Performance Requirements

1. Must support 100+ simultaneous users
2. Visual rendering must maintain 30+ FPS on projection device
3. Control latency should be <500ms from input to visual change
4. Mobile device support with optimized controls

## Accessibility

1. High contrast options for UI controls
2. Screen reader support for control interface
3. Alternative text for visual elements
4. Keyboard navigation support

## Browser Compatibility

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version)
- Mobile browsers (iOS Safari, Chrome for Android)
