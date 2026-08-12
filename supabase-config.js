// ══════════════════════════════════════════
//  HOSNA KIDS — Configuration Supabase
//  Ce fichier doit être chargé APRÈS la librairie Supabase (CDN)
//  et AVANT tous les autres scripts (products-loader.js, livraison.js, etc.)
// ══════════════════════════════════════════

const SUPABASE_URL      = "https://naccrdupvpqarpurpcdj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hY2NyZHVwdnBxYXJwdXJwY2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1MjYwMTAsImV4cCI6MjEwMjEwMjAxMH0.BklOxCv6UMUvE_9sqhtzMheNCZcnSjPWiaGlGzN0sVQ";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
