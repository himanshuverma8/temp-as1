import * as XLSX from 'xlsx';
import Agent from '../models/agent.model.js';
import ListItem from '../models/list.model.js';

export const uploadAndDistribute = async (req, res) => {
  if (!req.file) return res.status(400).json({ msg: 'File missing' });

  const wb = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json(sheet, { header: ['firstName','phone','notes'], defval:'' })
               .slice(1); // drop header row

  const agents = await Agent.find();
  if (agents.length < 5) return res.status(400).json({ msg: 'Need 5 agents' });

  // equal round-robin distribution
  const saved = [];
  raw.forEach((row, idx) => {
    const agent = agents[idx % 5];
    saved.push({ ...row, agent: agent._id });
  });
  const docs = await ListItem.insertMany(saved);
  res.status(201).json(docs);
};

export const listByAgent = async (_req, res) => {
  const lists = await ListItem.find().populate('agent','name email');
  res.json(lists);
};

export const getDistributedListsGrouped = async (req, res) => {
  try {
    // fetch all list items with agent populated
    const lists = await ListItem.find().populate('agent', 'name email');

    // group by agent
    const grouped = lists.reduce((acc, item) => {
      const agentId = item.agent._id.toString();
      if (!acc[agentId]) {
        acc[agentId] = {
          agentId,
          agentName: item.agent.name,
          agentEmail: item.agent.email,
          tasks: [],
        };
      }
      acc[agentId].tasks.push({
        firstName: item.firstName,
        phone: item.phone,
        notes: item.notes,
      });
      return acc;
    }, {});

    res.json(Object.values(grouped));  // convert to array
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to fetch grouped lists' });
  }
};

