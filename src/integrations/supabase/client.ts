// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qvanfjsfhowscwgbtlxt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2YW5manNmaG93c2N3Z2J0bHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NjUwMDcsImV4cCI6MjA2NTU0MTAwN30.IUEPo0Wm-aMSjXQ6rD2Rh3206GBMzdgGt-q9h-vxs3Q";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);