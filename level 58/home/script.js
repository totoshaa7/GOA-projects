const book = {
  title: "ვეფხისტყაოსანი",
  author: {
    firstName: "შოთა",
    lastName: "რუსთაველი"
  },
  publicationYear: 1200,
  genre: "პოეზია",
  price: 25.5
};


console.log("წიგნის სათაური:", book.title); 
console.log("ავტორის სახელი:", book.author.firstName); 
console.log("ავტორის გვარი:", book["author"]["lastName"]);
console.log("გამოშვების წელი:", book.publicationYear);
console.log("ჟანრი:", book["genre"]);
console.log("ფასი:", book.price + " ლარი");
//


const students = {
  student1: {
    name: "ლიკა",
    age: 20,
    faculty: "კომპიუტერული მეცნიერებები",
    year: 2,
    averageGrade: 91.3
  },
  student2: {
    name: "გიორგი",
    age: 22,
    faculty: "ბიზნესის ადმინისტრირება",
    year: 4,
    averageGrade: 85.5
  },
  student3: {
    name: "ნინო",
    age: 19,
    faculty: "სამართალი",
    year: 1,
    averageGrade: 88.9
  }
};

console.log("სტუდენტი:", students.student1.name);
console.log("ასაკი:", students.student1.age);
console.log("ფაკულტეტი:", students.student1.faculty);
console.log("კურსი:", students["student1"]["year"]);
console.log("საშუალო ქულა:", students["student1"]["averageGrade"]);
