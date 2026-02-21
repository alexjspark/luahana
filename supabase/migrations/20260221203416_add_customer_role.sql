-- Add role column to the customers table
ALTER TABLE customers ADD COLUMN role text DEFAULT 'user' NOT NULL;
