import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://aruwefguofsvywcsrucn.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydXdlZmd1b2Zzdnl3Y3NydWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjI4OTksImV4cCI6MTk4MzczODg5OX0.zVYWCUi6-VF_5yEqas3QRPqHLS21llkH6SJwE_eCjxA";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");
        }
    }
}