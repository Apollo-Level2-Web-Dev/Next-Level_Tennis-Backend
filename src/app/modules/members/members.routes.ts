import { Router } from 'express';
import { createMember, deleteMember, getAllMembers, getMemberById, updateMember } from './members.controller';


const router = Router();

router.get('/', getAllMembers);
router.get('/:id', getMemberById);
router.post('/', createMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

export default router;