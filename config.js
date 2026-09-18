// config.js - Public Frontend Configuration
// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// export const CONFIG = {
//     SUPABASE_URL: 'https://cqkaxhyrnjmqpovxwjom.supabase.co',
//     SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxa2F4aHlybmptcXBvdnh3am9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NDAyNjAsImV4cCI6MjA1NzAxNjI2MH0.eT11DRdoV3SK_d9yEAYzN6X-1C6EKKNNoavQxgLU6-o',
//     N8N_WEBHOOK_BASE_URL: 'https://your-n8n-instance.com/webhook',
//     MAP_API_KEY: 'your-public-mapping-token-here'
// };

// Initialize and export Supabase Client
export const supabaseClient = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
// ==========================================
// 🔒 CORE INFRASTRUCTURE CONFIGURATION (DO NOT SHARE)
// ==========================================

export const SUPABASE_URL = 'https://cqkaxhyrnjmqpovxwjom.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxa2F4aHlybmptcXBvdnh3am9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMzE3NDQsImV4cCI6MjA1Njc5MTc0NH0.eTI1DrOdV3SK_d9yEAYzN6X-1C6EKKNnoavQxGLU6-o';

// Initialize Supabase Client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==========================================
// 🌐 N8N & GATEWAY WEBHOOK ENDPOINTS
// ==========================================

export const N8N_SPORT_WEBHOOK = 'https://unreached-oboe-evade.ngrok-free.dev/webhook/sport';
// Add any additional tool webhooks you use here as needed:
// export const N8N_NEWS_WEBHOOK = 'your-webhook-url';

// ==========================================
// 🛠️ DEVELOPMENT ROUTER OVERRIDE
// ==========================================

// Set this to "DISABLED" for normal login flow.
// Options: "DISABLED", "POLITICS", "SPORTS", "FINANCE", "HOT_NEWS"
export const DEV_MODE_OVERRIDE = "DISABLED";
