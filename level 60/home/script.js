
const university = {
  name: "თბილისის სახელმწიფო უნივერსიტეტი",
  departments: ["მათემატიკის", "ფიზიკის", "ფილოლოგიის", "ეკონომიკის"],
  website: "https://www.tsu.ge",
  ratings: [
    {
      student: "ანა ჭანტურია",
      score: 4.5,
      comment: "ძალიან კარგი სასწავლო გარემოა."
    },
    {
      student: "ლუკა კაკაბაძე",
      score: 4.2,
      comment: "პროფესორები ძალიან კვალიფიციურები არიან."
    },
    {
      student: "ნინო ცინცაბაძე",
      score: 4.8,
      comment: "განათლების მაღალი დონე და ბევრი აქტივობა."
    }
  ]
};

console.log("1. უნივერსიტეტის ყველა თვისება:", university);

if (!("scholarship" in university)) {
  console.log("2. უნიში არ არის scholarship თვისება.");
}

university.studentsCount = 15000;
console.log("3. დამატებული studentsCount:", university.studentsCount);


delete university.website;
console.log("4. დარჩენილი თვისებები (website წაშლილია):", university);


if (!("grant" in university)) {
  console.log("5. უნიში არ არის grant თვისება.");
}
