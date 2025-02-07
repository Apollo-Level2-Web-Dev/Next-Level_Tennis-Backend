"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const mongoose_1 = require("mongoose");
const MemberSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    membershipType: { type: String, enum: ['Regular', 'Premium'], required: true },
});
exports.Member = (0, mongoose_1.model)('Member', MemberSchema);
