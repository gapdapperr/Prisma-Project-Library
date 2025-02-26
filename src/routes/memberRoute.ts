import express, { Request, Response } from 'express';
import {getAllMembers, getMemberByFirstName, getMemberByMemberCode} from '../services/memberServices';


const router = express.Router();

// get all members + get member by first name + get member by member code

router.get('/', async (req: Request, res: Response) => {
    if (req.query.firstName) {
        const firstName = req.query.firstName as string;
        const filteredMember = await getMemberByFirstName(firstName);
        if (!filteredMember) {
            res.status(404).json({ message: 'Member not found' });
            return;}
        res.json(filteredMember);
    }  else if (req.query.memberCode) {
        const memberCode = req.query.memberCode as string;
        const filteredMember = await getMemberByMemberCode(memberCode);
        if (!filteredMember) {
            res.status(404).json({ message: 'Member not found' });
            return;}
        res.json(filteredMember);
    }    
    else {
        const members = await getAllMembers();
        if (members.length === 0) {
            res.status(404).json({ message: 'No members found' });
            return;
        }
        res.json(members);
    }
});

export default router;