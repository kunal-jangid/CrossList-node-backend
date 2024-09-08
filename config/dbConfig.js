// /config/dbConfig.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config(); // Loads environment variables from .env file

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
