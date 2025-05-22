import { createClient } from "@supabase/supabase-js";

declare const VITE_SUPABASE_URL: string;
declare const VITE_SUPABASE_KEY: string;

const supabaseUrl = VITE_SUPABASE_URL;
const supabaseKey = VITE_SUPABASE_KEY;

console.log(supabaseUrl, supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
