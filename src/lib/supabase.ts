// src/lib/supabase.ts
  import { createBrowserClient } from '@supabase/ssr';
  import type { SupabaseClient } from '@supabase/supabase-js';

  export function createClient(): SupabaseClient {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
    
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials are missing');
    }
    
    return createBrowserClient(supabaseUrl, supabaseAnonKey);
  }