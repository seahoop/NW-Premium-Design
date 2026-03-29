export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  yelpUrl: string;
  avatar?: string;
}

export const YELP_PAGE_URL =
  "https://www.yelp.com/biz/ikea-cabinets-installation-bellevue-2";

export const YELP_RATING = 4.9;
export const YELP_REVIEW_COUNT = 29;

export const reviews: Review[] = [
  {
    name: "Jill J.",
    rating: 5,
    date: "Dec 23, 2025",
    text: "Excellent experience! He worked us into his schedule and did an amazing job keeping everything square and level in our 100 year old home. My husband and I have remodeled a number of houses but we could never have done the job Alex did. He showed up on time, kept us informed, completed the job on time \u2014 what more can you ask for!",
    yelpUrl: `${YELP_PAGE_URL}#reviews`,
  },
  {
    name: "Rachael L.",
    rating: 5,
    date: "Dec 9, 2025",
    text: "Working with Alex was amazing. He was communicative, professional, thorough and the quality of work speaks for itself. I truly cannot recommend this company and service more \u2014 next time I need cabinetry installation, Alex will be my first call.",
    yelpUrl: `${YELP_PAGE_URL}#reviews`,
  },
  {
    name: "Ciaran R.",
    rating: 5,
    date: "Sep 25, 2024",
    text: "We just installed a new Ikea kitchen with Alex. Alex is very detail oriented and did an excellent job at a very reasonable cost. Really exceeded our expectations. He was on time, and did not take any short cuts. He helped us with a few design install decisions and was clearly very knowledgeable and experienced. We will be using him again and would recommend him 100% to anyone wanting a quality install.",
    yelpUrl: `${YELP_PAGE_URL}#reviews`,
  },
  {
    name: "Ravi K.",
    rating: 5,
    date: "Aug 4, 2022",
    text: "Couldn\u2019t be more pleased with Alex and his work! Alex is extremely neat, precise and punctual. Through massive COVID delays and supply chain interruptions, Alex was extremely patient, honest and clear. As for the work itself, it\u2019s fantastic! He treated the job in a professional manner and we couldn\u2019t be happier with the results.",
    yelpUrl: `${YELP_PAGE_URL}#reviews`,
    avatar: "/images/reviews/ravi.png",
  },
  {
    name: "Normajean B.",
    rating: 5,
    date: "Jun 3, 2023",
    text: "Alex is incredible! He has fixed two major issues that occurred with my IKEA-installed kitchen over the last several years. He diagnosed exactly what the issue was and found an ingenious solution at a very reasonable price. He had fantastic professional insights on how to get the kitchen together and for it to look custom and perfect.",
    yelpUrl: `${YELP_PAGE_URL}#reviews`,
    avatar: "/images/reviews/normajean.png",
  },
];
