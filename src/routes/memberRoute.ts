import express, { Request, Response } from 'express';
import {getAllMembers, getMemberByFirstName, getMemberByMemberCode} from '../services/memberServices';
import type { Book } from '../models/book';

const router = express.Router();

// get all members + get member by first name + get member by member code

router.get('/', async (req: Request, res: Response) => {
    if (req.query.firstName) {
        const firstName = req.query.firstName as string;
        const filteredMember = await getMemberByFirstName(firstName);
        res.json(filteredMember);
    }  else if (req.query.memberCode) {
        const memberCode = req.query.memberCode as string;
        const filteredMember = await getMemberByMemberCode(memberCode);
        res.json(filteredMember);
    }    
    else {
        const members = await getAllMembers();
        res.json(members);
    }
});

export default router;