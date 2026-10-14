> **Note:** this is the target architecture for a production build. The prototype in this repo is a static Vite + vanilla JS front end and does not implement this stack.

# Project Plan: InstaHelp Recovery Engine

## 1. Project Objective
Build a portfolio-ready MVP for an AI-powered booking recovery system that reduces failed service delivery caused by partner cancellations and restores customer trust.

## 2. Product Scope
The MVP will focus on the booking recovery workflow, including:

- partner cancellation detection
- automatic recovery attempts
- customer decision flow
- fallback support and refund path
- event logging and analytics

## 3. Strategic Approach
The system should be built as a reliability layer on top of the booking platform rather than a complete replacement for core service operations.

This means the initial implementation follows a modular architecture:

- Booking events service
- Recovery engine
- Alternate professional matching service
- Customer notification layer
- Analytics and audit logging

## 4. Recommended Tech Stack
### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Backend
- Node.js / NestJS or Express
- PostgreSQL
- Redis

### AI / Matching Layer
- Python FastAPI
- rule-based matching + optional ML scoring

### DevOps / Delivery
- GitHub
- Docker
- CI/CD via GitHub Actions
- Vercel or Render for deployment

## 5. Phase-wise Plan

### Phase 0: Project Foundation
Objectives:
- define the product scope and priorities
- finalize the MVP feature set
- choose architecture and development tools

Deliverables:
- product brief
- technical architecture diagram
- backlog of user stories
- GitHub repo setup

### Phase 1: Core Booking & Cancellation Events
Objectives:
- model bookings, cancellations, and recovery state transitions
- create event ingestion for partner cancellation detection

Key features:
- booking schema
- cancellation event model
- status transitions
- audit log framework

Acceptance criteria:
- new cancellation event is stored and visible in system logs
- booking status updates correctly after cancellation

### Phase 2: Recovery Engine
Objectives:
- build the decision layer for automatic recovery attempts

Key features:
- eligible professional matching logic
- alternate assignment workflow
- fallback to customer message or refund flow

Acceptance criteria:
- eligible professionals are identified within the expected SLA
- customer receives a recovery option within two interactions
- no dead-end failure state remains unresolved

### Phase 3: Customer Experience
Objectives:
- provide a clean recovery UX for customers

Key features:
- recovery offer screen
- accept / decline flow
- time-sensitive resolution messaging
- support escalation path

Acceptance criteria:
- customer can resolve a cancelled booking without restarting the entire booking flow
- status and outcome are reflected consistently in the UI

### Phase 4: Analytics & Trust Signals
Objectives:
- create business visibility around reliability improvements

Key features:
- dashboard for cancellation rate and recovery success
- verified completion metric
- support cost and retention indicators

Acceptance criteria:
- product team can view recovery outcomes by time, city, service type, and partner cohort
- the system supports KPI trend monitoring

### Phase 5: Hardening & Portfolio Polish
Objectives:
- improve reliability, resilience, and presentation quality

Key features:
- monitoring and logging
- security checks
- mock data and demo flows
- polished README and architecture documentation

Acceptance criteria:
- app can be demonstrated convincingly in a portfolio context
- project is easy to understand for recruiters and hiring managers

## 6. MVP User Stories
- As a customer, I want a cancellation to resolve automatically when a replacement professional is available.
- As a customer, I want a clear notification if no replacement is available.
- As an operations team member, I want a reliable audit trail of each cancellation and recovery event.
- As a platform manager, I want to monitor recovery rates and trust metrics.

## 7. Success Criteria for MVP
The MVP will be successful if it demonstrates:

- real-time detection of partner cancellation events
- automatic rematch or customer resolution within a short SLA
- transparent recovery status communication
- clear event logging and analytical reporting
- a polished portfolio story with measurable business value

## 8. Risks and Mitigations
### Risk: Matching quality is poor
Mitigation: start with rule-based matching and score-based prioritization before advanced ML.

### Risk: Customer experience feels frustrating
Mitigation: limit steps to two interactions and keep all communication explicit and actionable.

### Risk: Scope expands beyond MVP
Mitigation: keep the solution centered on recovery flow and do not broaden into core service scheduling.

## 9. Recommended Deliverable for Portfolio
Deliver a demo-ready project that includes:

- booking cancellation simulation dashboard
- recovery engine logic demo
- customer experience mock flow
- KPI dashboard showing recovery performance
- polished presentation with README and product story

This will make the project easy to explain in interviews and easy to share on GitHub.
