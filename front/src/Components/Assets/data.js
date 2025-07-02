import electricity from "./../Assets/electricity.png";
import kids from "./../Assets/kids.png";
import mountain from "./../Assets/mountain.png";
import road from "./../Assets/road.png";
import new_mountain from "./../Assets/new_mountainbike.png";
import new_guntenbike from "./../Assets/new_guntenbike.png";
import new_fixgear from "./../Assets/new_fixgear.png";
import new_aluminum from "./../Assets/new_aluminum.png";
import new_colnago from "./../Assets/new_colnago_v3rs.png";
import new_giantFanthom from "./../Assets/new_giantFanthom.png";
import new_sccot_addict from "./../Assets/new_sccot_addict.png";
import new_canyon from "./../Assets/new_canyon.png";
let data_product = [
  {
    id: 1,
    name: "Mountain Bike",
    image: mountain,
    new_price: 299.99,
    old_price: 399.99,
  },
  {
    id: 2,
    name: "Road Bike",
    image: road,
    new_price: 499.99,
    old_price: 549.99,
  },
  {
    id: 3,
    name: "Electric Bike",
    image: electricity,
    new_price: 899.99,
    old_price: 999.99,
  },
  {
    id: 4,
    name: "Kids Bike",
    image: kids,
    new_price: 149.99,
    old_price: 199.99,
  },
];

export let new_collection = [
  {
    id: 1,
    name: "Mountain Bike",
    image: new_mountain,
    new_price: 450,
    old_price: 300,
  },
  {
    id: 2,
    name: "Fix Geared",
    image: new_fixgear,
    new_price: 630,
    old_price: 600,
  },
  {
    id: 3,
    name: "Hantain mountain bike",
    image: new_guntenbike,
    new_price: 930,
    old_price: 800,
  },
  {
    id: 4,
    name: "Aluminum mountain bike",
    image: new_aluminum,
    new_price: 590,
    old_price: 500,
  },
  {
    id: 5,
    name: "Colnago V3Rs",
    image: new_colnago,
    new_price: 690,
    old_price: 500,
  },
  {
    id: 6,
    name: "Giant Fanthom",
    image: new_giantFanthom,
    new_price: 1190,
    old_price: 980,
  },
  {
    id: 5,
    name: "Sccot Addict",
    image: new_sccot_addict,
    new_price: 790,
    old_price: 700,
  },
  {
    id: 5,
    name: "Canyon Bike",
    image: new_canyon,
    new_price: 340,
    old_price: 300,
  },
];
export default data_product;
