import Agent from '../models/agent.model.js';

// POST /api/agents
export const createAgent = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const agent = await Agent.create({ name, email, mobile, password });
  res.status(201).json(agent);
};

// GET /api/agents
export const getAgents = async (_req, res) => {
  res.json(await Agent.find().select('-password'));
};
