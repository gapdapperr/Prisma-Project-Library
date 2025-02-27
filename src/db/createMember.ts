import { PrismaClient } from "@prisma/client";
import { createBorrows } from "./createBorrows";

const prisma = new PrismaClient();
// 25 members

export async function createMembers() {
  const members = [
    { memberCode: "3463158", firstName: "John", lastName: "Doe", phoneNumber: "555-555-5555" },
  { memberCode: "3463159", firstName: "Jane", lastName: "Smith", phoneNumber: "555-555-5556" },
  { memberCode: "3463160", firstName: "Alice", lastName: "Johnson", phoneNumber: "555-555-5557" },
  { memberCode: "3463161", firstName: "Bob", lastName: "Brown", phoneNumber: "555-555-5558" },
  { memberCode: "3463162", firstName: "Charlie", lastName: "Williams", phoneNumber: "555-555-5559" },
  { memberCode: "3463163", firstName: "David", lastName: "Jones", phoneNumber: "555-555-5560" },
  { memberCode: "3463164", firstName: "Emma", lastName: "Miller", phoneNumber: "555-555-5561" },
  { memberCode: "3463165", firstName: "Frank", lastName: "Davis", phoneNumber: "555-555-5562" },
  { memberCode: "3463166", firstName: "Grace", lastName: "Garcia", phoneNumber: "555-555-5563" },
  { memberCode: "3463167", firstName: "Hannah", lastName: "Rodriguez", phoneNumber: "555-555-5564" },
  { memberCode: "3463168", firstName: "Isaac", lastName: "Martinez", phoneNumber: "555-555-5565" },
  { memberCode: "3463169", firstName: "Jack", lastName: "Hernandez", phoneNumber: "555-555-5566" },
  { memberCode: "3463170", firstName: "Katie", lastName: "Lopez", phoneNumber: "555-555-5567" },
  { memberCode: "3463171", firstName: "Liam", lastName: "Gonzalez", phoneNumber: "555-555-5568" },
  { memberCode: "3463172", firstName: "Mia", lastName: "Wilson", phoneNumber: "555-555-5569" },
  { memberCode: "3463173", firstName: "Nathan", lastName: "Anderson", phoneNumber: "555-555-5570" },
  { memberCode: "3463174", firstName: "Olivia", lastName: "Thomas", phoneNumber: "555-555-5571" },
  { memberCode: "3463175", firstName: "Paul", lastName: "Taylor", phoneNumber: "555-555-5572" },
  { memberCode: "3463176", firstName: "Quinn", lastName: "Moore", phoneNumber: "555-555-5573" },
  { memberCode: "3463177", firstName: "Ryan", lastName: "Jackson", phoneNumber: "555-555-5574" },
  { memberCode: "3463178", firstName: "Sophia", lastName: "White", phoneNumber: "555-555-5575" },
  { memberCode: "3463179", firstName: "Tyler", lastName: "Harris", phoneNumber: "555-555-5576" },
  { memberCode: "3463180", firstName: "Uma", lastName: "Clark", phoneNumber: "555-555-5577" },
  { memberCode: "3463181", firstName: "Victor", lastName: "Lewis", phoneNumber: "555-555-5578" },
  { memberCode: "3463182", firstName: "Wendy", lastName: "Walker", phoneNumber: "555-555-5579" }
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


const responseMembers = await prisma.member.findMany();
const responseBooks = await prisma.book.findMany();

async function createBorrows() {
  for (let i = 0; i < 20; i++) {
    await prisma.borrow.create({
      data: {
        book: {
          connect: { id: randomBookId() },
        },
        member: {
          connect: { id: randomMemberId() },
        },
        borrowDate: randomBorrowDate(),
        dueDate: randomDueDate(),
        returnDate: randomReturnDate()
      },
    });
  }

}
createBorrows()

}


function randomBookId() {
    return Math.floor(Math.random() * 20) + 1;
}

function randomMemberId() {
    return Math.floor(Math.random() * 25) + 1;
}

function randomBorrowDate(): Date {
    const borrowDate = new Date();
    borrowDate.setDate(borrowDate.getDate() - Math.floor(Math.random() * 30));
    return borrowDate;
  }
  
  function randomDueDate(): Date {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + Math.floor(Math.random() * 30) + 1);
    return dueDate;
  }
  
  function randomReturnDate(): Date | null {
    const chanceOfNull = Math.random();
    if (chanceOfNull < 0.5) {
      return null;
    }
    return new Date();
  }
  