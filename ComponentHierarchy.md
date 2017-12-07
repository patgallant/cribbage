# Component Hierarchy

- App (State lives here as both the GameArea and PlayerAreas need access.)
- GameArea
-- Deck
-- FaceUpCard
-- Board
--- Track
---- Hole
- PlayerAreas
-- PlayerArea
--- Hand
--- Crib
--- Score