-- Create a table for Stripe Customers
create table customers (
  -- UUID from auth.users
  id uuid references auth.users not null primary key,
  -- The user's customer ID in Stripe (e.g. cus_1234)
  stripe_customer_id text
);

alter table customers enable row level security;

create policy "Can read own customer data." on customers
  for select using (auth.uid() = id);

-- Create a table for Subscriptions
create table subscriptions (
  -- Subscription ID from Stripe (e.g. sub_1234)
  id text primary key,
  -- UUID from auth.users
  user_id uuid references auth.users not null,
  -- The status of the subscription object, e.g. active, past_due, canceled
  status text,
  -- Set of key-value pairs stored as JSON
  metadata jsonb,
  -- ID of the price that created this subscription
  price_id text,
  -- Quantity multiplied by the unit amount of the price
  quantity integer,
  -- If true the subscription has been canceled by the user and will be deleted at the end of the billing period
  cancel_at_period_end boolean,
  -- Time at which the subscription was created
  created timestamp with time zone default timezone('utc'::text, now()) not null,
  -- Start of the current period that the subscription has been invoiced for
  current_period_start timestamp with time zone default timezone('utc'::text, now()) not null,
  -- End of the current period that the subscription has been invoiced for
  current_period_end timestamp with time zone default timezone('utc'::text, now()) not null,
  -- If the subscription has ended, the date the subscription ended.
  ended_at timestamp with time zone default timezone('utc'::text, now()),
  -- A date in the future at which the subscription will automatically get canceled
  cancel_at timestamp with time zone default timezone('utc'::text, now()),
  -- If the subscription has been canceled, the date of that cancellation
  canceled_at timestamp with time zone default timezone('utc'::text, now()),
  -- If the subscription has a trial, the beginning of that trial
  trial_start timestamp with time zone default timezone('utc'::text, now()),
  -- If the subscription has a trial, the end of that trial
  trial_end timestamp with time zone default timezone('utc'::text, now())
);

alter table subscriptions enable row level security;

create policy "Can read own subscription data." on subscriptions
  for select using (auth.uid() = user_id);
