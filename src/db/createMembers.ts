import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createMembers() {
  const members = [
    {
      memberCode: "3463158",
      firstName: "John",
        lastName: "Doe",
        phoneNumber: "555-555-5555",
    
    },
    {
      memberCode: "3463159",
      firstName: "Jane",
        lastName: "Doe",
        phoneNumber: "555-555-5555",
    
    },
  ];    
    for (const member of members) {
        await prisma.member.create({
        data: {
            memberCode: member.memberCode,
            firstName: member.firstName,
            lastName: member.lastName,
            phoneNumber: member.phoneNumber,
        },
        });
    }

}