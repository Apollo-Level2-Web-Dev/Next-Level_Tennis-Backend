import { Schema, model } from 'mongoose';

const MemberSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  membershipType: { type: String, enum: ['Regular', 'Premium'], required: true },
});

export const Member = model('Member', MemberSchema);