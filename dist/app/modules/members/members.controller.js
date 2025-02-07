"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMember = exports.updateMember = exports.createMember = exports.getMemberById = exports.getAllMembers = void 0;
const members_model_1 = require("./members.model");
const getAllMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield members_model_1.Member.find();
        res.json(members);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllMembers = getAllMembers;
const getMemberById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield members_model_1.Member.findById(req.params.id);
        if (!member)
            res.status(404).json({ message: "Member not found" });
        res.json(member);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getMemberById = getMemberById;
const createMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMember = new members_model_1.Member(req.body);
        yield newMember.save();
        res.status(201).json(newMember);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createMember = createMember;
const updateMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedMember = yield members_model_1.Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMember) {
            res.status(404).json({ message: "Member not found" });
        }
        else {
            res.json(updatedMember);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateMember = updateMember;
const deleteMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMember = yield members_model_1.Member.findByIdAndDelete(req.params.id);
        if (!deletedMember) {
            res.status(404).json({ message: "Member not found" });
        }
        else {
            res.json({ message: "Member deleted successfully" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteMember = deleteMember;
