// /controllers/sessionController.js
const supabase = require('../config/dbConfig');

// Create a session
exports.createSession = async (req, res) => {
  const { session_name, total_users } = req.body;
  const { data, error } = await supabase
    .from('sessions')
    .insert({ session_name, total_users });

  if (error) return res.status(400).json({ error });
  return res.status(201).json({ data });
};

// Get all sessions
exports.getSessions = async (req, res) => {
  const { data, error } = await supabase
    .from('sessions')
    .select('*');

  if (error) return res.status(400).json({ error });
  return res.status(200).json({ data });
};
