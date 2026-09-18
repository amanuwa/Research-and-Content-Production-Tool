// ==========================================
// 🔒 CORE INFRASTRUCTURE CONFIGURATION (DO NOT SHARE)
// ==========================================

export const SUPABASE_URL='https://cqkaxhyrnjmqpovxwjom.supabase.co';
export const SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxa2F4aHlybmptcXBvdnh3am9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMTkwMTcsImV4cCI6MjA5ODY5NTAxN30.eT1lDRDoV3SK_d9yEAYzN6X-lC6EKkNNoavQxgLU6-Q';

// Initialize Supabase Client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==========================================
// 🌐 N8N & GATEWAY WEBHOOK ENDPOINTS
// ==========================================

export const N8N_SPORT_WEBHOOK = 'https://unreached-oboe-evade.ngrok-free.dev/webhook/sport';

// ==========================================
// 🛠️ DEVELOPMENT ROUTER OVERRIDE
// ==========================================

export const DEV_MODE_OVERRIDE = "DISABLED";
