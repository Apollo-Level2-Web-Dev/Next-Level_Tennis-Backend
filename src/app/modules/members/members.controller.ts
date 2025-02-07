import { Request, Response } from "express";
import { Member } from "./members.model";

export const getAllMembers = async (req: Request, res: Response) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
export const getMemberById = async (req: Request, res: Response) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) res.status(404).json({ message: "Member not found" });
    res.json(member);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createMember = async (req: Request, res: Response) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMember = async (req: Request, res: Response) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMember) {
      res.status(404).json({ message: "Member not found" });
    } else {
      res.json(updatedMember);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMember = async (req: Request, res: Response) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);
    if (!deletedMember) {
      res.status(404).json({ message: "Member not found" });
    } else {
      res.json({ message: "Member deleted successfully" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
