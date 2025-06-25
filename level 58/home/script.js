// ობიექტის შექმნა
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
