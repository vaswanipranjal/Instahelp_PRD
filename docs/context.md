# Project Context: InstaHelp Recovery Engine

## 1. Executive Summary
InstaHelp, the 15-minute on-demand housekeeping vertical under Urban Company, is currently losing money because of reliability issues rather than lack of demand. The business has meaningful order volume, but last-minute partner cancellations, poor customer recovery flows, and false completion states are damaging trust and eroding the premium customers pay for dependable service.

This project is focused on fixing the operational failure loop that breaks the experience after a partner cancels. The goal is not to increase supply or change the core scheduled services business, but to build a recovery engine that restores confidence when things go wrong in the booking lifecycle.

## 2. Business Problem
The PRD identifies a clear root cause:

- Partners cancel active bookings at the last minute.
- Customers enter an unresolvable chatbot loop after a cancellation.
- Some jobs are marked as complete without a professional arriving.
- The premium pricing model becomes invalid because the service is not dependable enough to justify it.

This leads to:

- higher support cost per order
- lower trust and retention
- reduced contribution margin per booking
- damaged brand confidence in the premium service category

## 3. Product Goal
Build a recovery system that can respond to booking failures quickly, automatically, and transparently.

The primary objective is to eliminate dead ends in the cancellation flow by ensuring every cancelled booking resolves to one of the following outcomes:

- automatic rematch to another qualified professional
- structured customer recovery flow with human handoff if needed
- clear cancellation and refund communication when a valid replacement is unavailable

## 4. Scope
### In Scope
- cancellation detection for active bookings
- automatic professional reassignment
- failure recovery and customer resolution
- auditable event tracking
- recovery attempt measurement and reporting
- customer interaction flow for accepting or declining alternatives

### Out of Scope
- core scheduled-services business optimization
- new partner acquisition strategy
- large-scale operational restructuring beyond the recovery flow

## 5. User Personas
### Customer
A user booking a home service who expects reliability, fast resolution, and minimal friction. They usually want confirmation, speed, and clear recovery options, not a manual restart of the booking journey.

### Professional / Partner
A service professional who may cancel due to route issues, unavailability, or time conflicts. Their behavior is influenced by incentives, fulfillment clarity, and ease of re-assignment.

### Operations / Support Team
Internal teams who need visibility into cancellation events, resolution success, and customer escalations.

## 6. Success Metrics
Key metrics from the PRD include:

- North Star: contribution margin per order improving from roughly -₹447 toward ₹0
- cancellation rate reduction
- post-cancellation resolution rate improvement
- verified completion rate improvement
- customer satisfaction after cancellation recovery
- support cost per order should not spike as recovery logic is introduced

The real proof of success is not just issue resolution, but whether the customer trust is restored and retention improves.

## 7. Solution Direction
The system should provide an AI-real-time recovery layer with the following capabilities:

1. Detect cancellation events in real time.
2. Identify eligible alternative professionals.
3. Reassign without customer rebooking when possible.
4. Offer a clear decision path to the customer if a replacement is available.
5. Escalate to human support if no remediation is possible.
6. Record every event in a traceable audit log.

This creates a product that feels trustworthy, operationally efficient, and commercially valuable.

## 8. Product Value
This project demonstrates a strong product and business case because it combines:

- real customer pain
- measurable operational impact
- clear product metrics
- AI + workflow automation + service operations thinking
- strong portfolio potential for product management, strategy, and analytics work

## 9. Portfolio Positioning
This project is ideal as a portfolio item because it shows:

- problem framing from a real business problem
- structured product thinking
- AI-enabled service operations design
- user journey and reliability-first product strategy
- implementation planning with measurable KPIs

It is not just a generic app; it is a business-critical product decision framed around trust, operations, and revenue protection.

## 10. Project Thesis
The future of on-demand service platforms is not only demand generation; it is service reliability and recovery. A product that can recover from operational failures quickly will create more trust than one that simply sells more bookings.

This project establishes that thesis in a practical, execution-ready form.
