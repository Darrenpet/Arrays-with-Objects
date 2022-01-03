let cars = [
  {
    Image: "./Assets/Images/audi-r8-Hycade.jpg",
    Make: "Audi",
    Model: "R8 Hycade",
    Facts:
      "The Audi R8 Hycade is a German supercar that has been taken to new extremes. The widebody kit is visible from a mile away, featuring fenders that bulge out like a race car. The front end has been designed with a larger set of intakes and a spoiler that looks like it doesn't belong on a road.",
  },
  {
    Image: "./Assets/Images/Aston_Martin_DB9.jpg",
    Make: "Aston Martin",
    Model: "DB9",
    Facts: `Is a British grand tourer first shown by Aston Martin at the 2003 Frankfurt Auto Show. 
    Production of the DB9 ended after 12 years in 2016, 
    having been replaced by the DB11 which uses an all-new platform and engine.`,
  },
  {
    Image: "./Assets/Images/Ferrari.jpeg",
    Make: "Ferrari",
    Model: "488",
    Facts:
      "The Ferrari 488 (Type F142M) is the first mid-engine Ferrari to use a turbocharged V8 since the F40. he 488 GTB was named 'The Supercar of the Year 2015' by car magazine Top Gear, as well as becoming Motor Trend's 2017 'Best Driver's Car'.",
  },
  {
    Image: "./Assets/Images/FordGT.jpeg",
    Make: "Ford",
    Model: "GT 2017",
    Facts:
      "The Ford GT is a mid-engine two-seater sports car manufactured and marketed by American automobile manufacturer Ford. The second generation Ford GT became available for the 2017 model year.",
  },
  {
    Image: "./Assets/Images/McLaren_720S.jpg",
    Make: "McLaren",
    Model: "720S",
    Facts:
      "The McLaren 720S is a sports car designed and manufactured by British automobile manufacturer McLaren Automotive. The 720S was launched at the Geneva Motor Show on 7 March 2017 and is built on a modified carbon monocoque, which is lighter and stiffer than the previous model, the 650S.",
  },
];

for (let i = 0; i < cars.length; i++) {
  document.getElementById(
    "cars"
  ).innerHTML += `<div class="fw-white"> <br> <img src="${cars[i].Image}" class="mb-3" style="width: 300px; height: 150px"> <br> ${cars[i].Make} <br> ${cars[i].Model} <br> ${cars[i].Facts} <br> </div>`;
}
