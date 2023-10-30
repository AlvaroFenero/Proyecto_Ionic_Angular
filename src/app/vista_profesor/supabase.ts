import { createClient } from '@supabase/supabase-js';
 
const supabaseUrl = 'https://efxijvvxlfnfjjjugldg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmeGlqdnZ4bGZuZmpqanVnbGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODg3NjIsImV4cCI6MjAxMTI2NDc2Mn0.FVEgbY2cdX_mDcU1kL6xx-5NwAZhg4iBQzR0NpZ3oks';
 
export const supabase = createClient(supabaseUrl, supabaseKey);