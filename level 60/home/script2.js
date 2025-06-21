
const sportsClub = {
  clubName: "დინამო თბილისი",
  sportType: "ფეხბურთი",
  foundedYear: 1925,
  achievements: [
    {
      title: "საბჭოთა ჩემპიონი",
      year: 1964,
      description: "პირველი საჩემპიონო ტიტული"
    },
    {
      title: "უეფას თასი",
      year: 1981,
      description: "მნიშვნელოვანი საერთაშორისო წარმატება"
    },
    {
      title: "ეროვნული ლიგა",
      year: 2020,
      description: "ბოლო ჩემპიონობა საქართველოში"
    }
  ]
};


console.log("1. კლუბის ყველა თვისება:", sportsClub);

console.log("2. კლუბის თვისებების სახელები:", Object.keys(sportsClub));

if (!("sponsors" in sportsClub)) {
  console.log("3. ობიექტს არ აქვს sponsors ველი.");
}

sportsClub.stadiumCapacity = 55000;
console.log("4. დამატებულია stadiumCapacity:", sportsClub.stadiumCapacity);

delete sportsClub.foundedYear;
console.log("5. წაშლილია foundedYear ველი:", sportsClub);

if (!("coach" in sportsClub)) {
  console.log("6. ობიექტს არ აქვს coach ველი.");
}
