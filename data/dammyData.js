import defaultImage from "../public/assets/images/trending3.jpg";
import Package from "../models/package";
import imageAfater from "../public/assets/images/img1.jpg";
import BlogsImage from "../public/assets/images/trending12.jpg";
import slagImage from "../public/assets/images/1.jpg";
import Blogs from "../models/blogs";
import Category from "../models/category-pac";
import ToursTyps from "../models/toures"



export const CATEGORY = [
  new Category(1, "Luxor Aswan Nile Cruises"),
  new Category(2, "Lake Nasser Nile Cruises"),
  new Category(3, "Dahabiya Nile Cruises"),
  new Category(4, "Christmas Nile Cruises"),
];

const FaQ = {
 
  rows: [
      {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: "What is the package version",
          content: <p>current version is 1.2.1</p>,
      },
  ],
};

export const blogsData = [
  new Blogs(
    "b1",
    BlogsImage,
    "Inspire Runner With Autism Graces Of Women's Running",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "David Scott",
    slagImage
  ),
  new Blogs(
    "b2",
    BlogsImage,
    "Services To Grow Your Business Sell Affiliate Products",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "John Bolden",
    slagImage
  ),
  new Blogs(
    "b3",
    BlogsImage,
    "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "Sollmond Nell",
    slagImage
  ),
  new Blogs(
    " b4",
    BlogsImage,
    "Inspire Runner With Autism Graces Of Women's Running",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "David Scott",
    slagImage
  ),
  new Blogs(
    " b5",
    BlogsImage,
    "Services To Grow Your Business Sell Affiliate Products",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "John Bolden",
    slagImage
  ),
  new Blogs(
    "b6",
    BlogsImage,
    "How A Developer Duo At Deutsche Bank Keep Remote Alive.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "Sollmond Nell",
    slagImage
  ),
];

export const testimonialsData = [
  {
    image: imageAfater,
    review:
      "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
    name: "MATHEW HENDRICKSON",
    status: "ENTREPRENEUR",
  },
  {
    image: imageAfater,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ",
    name: "JOHN KEVIN",
    status: "COACH",
  },
  {
    image: imageAfater,
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
    name: "devalpers ",
    status: "CUSTOMER",
  },
  {
    image: imageAfater,
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
    name: "FRANKLIN",
    status: "CUSTOMER",
  },
];

export const PackageS = [
  new Package(
    "p1",
    "Christmas Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p2",
    "Christmas Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0.3
  ),
  new Package(
    "p3",
    "Christmas Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p4",
    "Christmas Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0.2
  ),
  new Package(
    "p5",
    "Christmas Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p6",
    "Christmas Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0
  ),

  new Package(
    "p7",
    "Dahabiya Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p8",
    "Dahabiya Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p",
    "Dahabiya Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p10",
    "Dahabiya Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p11",
    "Dahabiya Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p12",
    "Dahabiya Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0
  ),

  new Package(
    "p13",
    "Lake Nasser Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p14",
    "Lake Nasser Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p15",
    "Lake Nasser Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p16",
    "Lake Nasser Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p17",
    "Lake Nasser Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p18",
    "Lake Nasser Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.6
  ),

  new Package(
    "p19",
    "Luxor Aswan Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p20",
    "Luxor Aswan Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p21",
    "Luxor Aswan Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p22",
    "Luxor Aswan Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p23",
    "Luxor Aswan Nile Cruises",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0.4
  ),
  new Package(
    "p24",
    "Luxor Aswan Nile Cruises",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
];
export const PackageToTravelpackaes = [
  new Package(
    "p1",
    "Honeymoon Travel Packages",
    defaultImage,
    "5 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p2",
    "Honeymoon Travel Packages",
    defaultImage,
    "5 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0.3
  ),
  new Package(
    "p3",
    "Honeymoon Travel Packages",
    defaultImage,
    "7 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p4",
    "Honeymoon Travel Packages",
    defaultImage,
    "7 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0.2
  ),
  new Package(
    "p5",
    "Honeymoon Travel Packages",
    defaultImage,
    "5 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p6",
    "Honeymoon Travel Packages",
    defaultImage,
    "7 days",
    "Egypt",
    "refat tour to hell",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0
  ),

  new Package(
    "p7",
    "Egypt Easter Vacations",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p7",
    "Egypt Easter Vacations",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p8",
    "Egypt Easter Vacations",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p9",
    "Egypt Easter Vacations",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p10",
    "Egypt Easter Vacations",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p11",
    "Egypt Easter Vacations",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0
  ),

  new Package(
    "p12",
    "Christmas and New Year tours",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p13",
    "Christmas and New Year tours",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p14",
    "Christmas and New Year tours",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p15",
    "Christmas and New Year tours",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p16",
    "Christmas and New Year tours",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0
  ),
  new Package(
    "p17",
    "Christmas and New Year tours",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.6
  ),

  new Package(
    "p18",
    "Classical Egypt Travel Packages",
    defaultImage,
    "5 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p19",
    "Classical Egypt Travel Packages",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 66.00",
    0
  ),
  new Package(
    "p20",
    "Classical Egypt Travel Packages",
    defaultImage,
    "7 days",
    "Egypt",
    "Piazza Castello",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 77.00",
    0
  ),
  new Package(
    "p21",
    "Classical Egypt Travel Packages",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 500.00",
    0
  ),
  new Package(
    "p22",
    "Classical Egypt Travel Packages",
    defaultImage,
    "5 days",
    "Egypt",
    "Santorini, Oia",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 88.00",
    0.4
  ),
  new Package(
    "p23",
    "Classical Egypt Travel Packages",
    defaultImage,
    "7 days",
    "Egypt",
    "Hurawalhi Island",
    5,
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    " 200.00",
    0.5
  ),
];
export const ToursOfTyps = [
  new ToursTyps("1","cruises", "Bucket List" ,"Egypt River" , "Nile Cruises" , "The best Nile Cruise trip with the best prices. Choose your cruise route from Luxor to Aswan or Cruise Lake Nasser.",["Luxor Aswan Nile Cruises", "Lake Nasser Nile Cruises","Dahabiya Nile Cruises" , "Christmas Nile Cruises",  ],PackageS ),
  new ToursTyps("1","travel","Bucket List" ,"Egypt Travel" , "Packages  " ,
   "Start your Trip by the ancient Giza Pyramids, Egyptian Museum and old Cairo then mix it with Nile Cruise from Luxor to Aswan, end your trip with Red Sea Relaxation  ",
   ["Classical Egypt Travel Packages", "Christmas and New Year tours","Egypt Easter Vacations" , "Honeymoon Travel Packages",  ],PackageToTravelpackaes ),
  
];
