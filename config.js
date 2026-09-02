// config.js - Public Frontend Configuration
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const CONFIG = {
    SUPABASE_URL: 'https://cqkaxhyrnjmqpovxwjom.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxa2F4aHlybmptcXBvdnh3am9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NDAyNjAsImV4cCI6MjA1NzAxNjI2MH0.eT11DRdoV3SK_d9yEAYzN6X-1C6EKKNNoavQxgLU6-o',
    N8N_WEBHOOK_BASE_URL: 'https://your-n8n-instance.com/webhook',
    MAP_API_KEY: 'your-public-mapping-token-here'
};

// Initialize and export Supabase Client
export const supabaseClient = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
