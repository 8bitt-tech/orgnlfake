require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.log("Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      social_stats: { followers: 102000, engagement_rate: "5.4%", total_reach: 155000 },
      tiktok_stats: { followers: 125600, engagement_rate: "8.5%", total_reach: 2500000 }
    })
    .eq('username', 'lion.paballo');
    
  if (error) {
    console.error("Error updating profile:", error);
  } else {
    console.log("Profile updated successfully in Supabase.");
  }
}

main();
