import { createClient } from "@supabase/supabase-js";

// Use your own values from Supabase dashboard
const supabaseUrl = "https://tsnfojhlyxycnnfmywct.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzbmZvamhseXh5Y25uZm15d2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NzgxMDYsImV4cCI6MjA3MjQ1NDEwNn0.YsA0aKfCsscKzVizZiiWhy5fpfbgSMcPl3GNHaPV3rI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
