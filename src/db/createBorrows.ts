import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createBorrows() {
  let availableBooks = await prisma.book.findMany({
    where: { isAvailable: true },
    take: 20,
  });
  
  const members = await prisma.member.findMany({ take: 25 });

  const borrows = [];
  
  for (let i = 0; i < 30 && availableBooks.length > 0; i++) {
    const borrowDate = new Date();
    borrowDate.setDate(borrowDate.getDate() - Math.floor(Math.random() * 30)); 
    const dueDate = new Date(borrowDate);
    dueDate.setDate(borrowDate.getDate() + 14);
    
    let returnDate = null;
    if (Math.random() > 0.5) { 
      returnDate = new Date(dueDate);
      returnDate.setDate(dueDate.getDate() - Math.floor(Math.random() * 7));
    }
    
    const bookIndex = Math.floor(Math.random() * availableBooks.length);
    const book = availableBooks.splice(bookIndex, 1)[0]; 
    
    borrows.push({
      memberId: members[Math.floor(Math.random() * members.length)].id, 
      bookId: book.id,
      borrowDate,
      dueDate,
      returnDate,
    });
  }

  await prisma.borrow.createMany({ data: borrows });

  await Promise.all(
    borrows.map((borrow) =>
      prisma.book.update({
        where: { id: borrow.bookId },
        data: { isAvailable: borrow.returnDate !== null },
      })
    )
  );
}


