
const hotel = {
  hotelName: "Ambassadori Hotel Tbilisi",
  stars: 5,
  location: "თბილისი, საქართველო",
  guestReviews: [
    {
      guestName: "თამარ ჯღარკავა",
      rating: 4.8,
      comment: "ძალიან მყუდრო სასტუმრო და შესანიშნავი მომსახურება."
    },
    {
      guestName: "გიორგი ქურდიანი",
      rating: 4.5,
      comment: "კარგი მდებარეობა და გემრიელი საუზმე."
    },
    {
      guestName: "ნატა აბაშიძე",
      rating: 5.0,
      comment: "ლაქშერი სასტუმრო, აბსოლუტურად ღირს ფასად!"
    }
  ]
};

console.log("1. სასტუმროს ყველა თვისება:", hotel);

if (!("spa" in hotel)) {
  console.log("2. ობიექტს არ აქვს spa ველი.");
}


hotel.roomsCount = 120;
console.log("3. დამატებულია roomsCount:", hotel.roomsCount);

delete hotel.location;
console.log("4. წაშლილია location ველი:", hotel);


if (!("gym" in hotel)) {
  console.log("5. ობიექტს არ აქვს gym ველი.");
}
