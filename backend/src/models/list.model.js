import mongoose from 'mongoose';

const listItemSchema = new mongoose.Schema({
  firstName: String,
  phone: String,
  notes: String,
  agent: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }
});

export default mongoose.model('ListItem', listItemSchema);
