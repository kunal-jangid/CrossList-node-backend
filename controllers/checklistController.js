// /controllers/checklistController.js
const supabase = require('../config/dbConfig');

// Create a checklist
exports.createChecklist = async (req, res) => {
  const { session_id, checklist_name, items } = req.body;
  const { data, error } = await supabase
    .from('checklists')
    .insert({ session_id, checklist_name, items });

  if (error) return res.status(400).json({ error });
  return res.status(201).json({ data });
};

// Get all checklists for a session
exports.getChecklists = async (req, res) => {
  const { session_id } = req.params;
  const { data, error } = await supabase
    .from('checklists')
    .select('*')
    .eq('session_id', session_id);

  if (error) return res.status(400).json({ error });
  return res.status(200).json({ data });
};
