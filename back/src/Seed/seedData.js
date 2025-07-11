import { sequelize } from "./database.js";
import Brand from "../src/Models/Brand.js";
import Category from "../src/Models/Category.js";
import Product from "../src/Models/Product.js";
import Stock from "../src/Models/Stock.js";
import User from "../src/Models/User.js";
import Location from "../src/Models/Location.js";

async function seedDatabase() {
  try {
    // Step 1: Insert Location
    const Locations = [
      { district: "Krong Serei Saophoan", province: "Banteay Meanchey" },
      { district: "Krong Paoy Paet", province: "Banteay Meanchey" },
      { district: "Mongkol Borei", province: "Banteay Meanchey" },
      { district: "Phnum Srok", province: "Banteay Meanchey" },
      { district: "Preah Netr Preah", province: "Banteay Meanchey" },
      { district: "Ou Chrov", province: "Banteay Meanchey" },
      { district: "Thma Puok", province: "Banteay Meanchey" },
      { district: "Svay Chek", province: "Banteay Meanchey" },
      { district: "Malai", province: "Banteay Meanchey" },
      { district: "Krong Battambang", province: "Battambang" },
      { district: "Aek Phnum", province: "Battambang" },
      { district: "Rotonak Mondol", province: "Battambang" },
      { district: "Sangkae", province: "Battambang" },
      { district: "Samlout", province: "Battambang" },
      { district: "Sampov Lun", province: "Battambang" },
      { district: "Phnum Proek", province: "Battambang" },
      { district: "Kamrieng", province: "Battambang" },
      { district: "Koas Krala", province: "Battambang" },
      { district: "Rukh Kiri", province: "Battambang" },
      { district: "Banan", province: "Battambang" },
      { district: "Thma Koul", province: "Battambang" },
      { district: "Moung Ruessei", province: "Battambang" },
      { district: "Bavel", province: "Battambang" },
      { district: "Phnom Prek", province: "Battambang" },
      { district: "Krong Kampong Cham", province: "Kampong Cham" },
      { district: "Kampong Siem", province: "Kampong Cham" },
      { district: "Kang Meas", province: "Kampong Cham" },
      { district: "Kaoh Soutin", province: "Kampong Cham" },
      { district: "Prey Chhor", province: "Kampong Cham" },
      { district: "Srei Santhor", province: "Kampong Cham" },
      { district: "Batheay", province: "Kampong Cham" },
      { district: "Chamkar Leu", province: "Kampong Cham" },
      { district: "Cheung Prey", province: "Kampong Cham" },
      { district: "Steng Trang", province: "Kampong Cham" },
      { district: "Krong Kampong Chhnang", province: "Kampong Chhnang" },
      { district: "Baribour", province: "Kampong Chhnang" },
      { district: "Chol Kiri", province: "Kampong Chhnang" },
      { district: "Kampong Leaeng", province: "Kampong Chhnang" },
      { district: "Kampong Tralach", province: "Kampong Chhnang" },
      { district: "Rolea Bier", province: "Kampong Chhnang" },
      { district: "Sameakki Mean Chey", province: "Kampong Chhnang" },
      { district: "Tuek Phos", province: "Kampong Chhnang" },
      { district: "Chbar Mon", province: "Kampong Speu" },
      { district: "Basedth", province: "Kampong Speu" },
      { district: "Kong Pisei", province: "Kampong Speu" },
      { district: "Aoral", province: "Kampong Speu" },
      { district: "Odongk", province: "Kampong Speu" },
      { district: "Phnum Sruoch", province: "Kampong Speu" },
      { district: "Samraong Tong", province: "Kampong Speu" },
      { district: "Thpong", province: "Kampong Speu" },
      { district: "Krong Stueng Saen", province: "Kampong Thom" },
      { district: "Baray", province: "Kampong Thom" },
      { district: "Kampong Svay", province: "Kampong Thom" },
      { district: "Prasat Sambour", province: "Kampong Thom" },
      { district: "Sandan", province: "Kampong Thom" },
      { district: "Santuk", province: "Kampong Thom" },
      { district: "Stoung", province: "Kampong Thom" },
      { district: "Taing Kouk", province: "Kampong Thom" },
      { district: "Krong Kampot", province: "Kampot" },
      { district: "Angkor Chey", province: "Kampot" },
      { district: "Banteay Meas", province: "Kampot" },
      { district: "Chhuk", province: "Kampot" },
      { district: "Chum Kiri", province: "Kampot" },
      { district: "Dang Tong", province: "Kampot" },
      { district: "Kampong Trach", province: "Kampot" },
      { district: "Toek Chhou", province: "Kampot" },
      { district: "Krong Arey Ksat", province: "Kandal" },
      { district: "Krong Ta Kmao", province: "Kandal" },
      { district: "Krong Sompo Pound", province: "Kandal" },
      { district: "Kandal Stueng", province: "Kandal" },
      { district: "Kien Svay", province: "Kandal" },
      { district: "Khsach Kandal", province: "Kandal" },
      { district: "Kaoh Thum", province: "Kandal" },
      { district: "Leuk Daek", province: "Kandal" },
      { district: "Lvea Aem", province: "Kandal" },
      { district: "Mukh Kampul", province: "Kandal" },
      { district: "Angk Snuol", province: "Kandal" },
      { district: "Ponhea Lueu", province: "Kandal" },
      { district: "S'ang", province: "Kandal" },
      { district: "Krong Kep", province: "Kep" },
      { district: "Damnak Changaeur", province: "Kep" },
      { district: "Krong Khemara Phoumin", province: "Kaoh Kong" },
      { district: "Botum Sakor", province: "Kaoh Kong" },
      { district: "Kiri Sakor", province: "Kaoh Kong" },
      { district: "Kaoh Kong", province: "Kaoh Kong" },
      { district: "Mondol Seima", province: "Kaoh Kong" },
      { district: "Srae Ambel", province: "Kaoh Kong" },
      { district: "Thma Bang", province: "Kaoh Kong" },
      { district: "Krong Kracheh", province: "Kratie" },
      { district: "Chhloung", province: "Kratie" },
      { district: "Prek Prasab", province: "Kratie" },
      { district: "Sambour", province: "Kratie" },
      { district: "Snoul", province: "Kratie" },
      { district: "Chetr Borei", province: "Kratie" },
      { district: "Krong Saen Monorom", province: "Mondulkiri" },
      { district: "Kaev Seima", province: "Mondulkiri" },
      { district: "Kaoh Nheaek", province: "Mondulkiri" },
      { district: "Ou Reang", province: "Mondulkiri" },
      { district: "Pech Chreada", province: "Mondulkiri" },
      { district: "Krong Samraong", province: "Oddar Meanchey" },
      { district: "Anlong Veaeng", province: "Oddar Meanchey" },
      { district: "Banteay Ampil", province: "Oddar Meanchey" },
      { district: "Chong Kal", province: "Oddar Meanchey" },
      { district: "Trapeang Prasat", province: "Oddar Meanchey" },
      { district: "Krong Pailin", province: "Pailin" },
      { district: "Sala Kraov", province: "Pailin" },
      { district: "Chamkar Mon", province: "Phnom Penh" },
      { district: "Doun Penh", province: "Phnom Penh" },
      { district: "Prampir Meakkara", province: "Phnom Penh" },
      { district: "Toul Kouk", province: "Phnom Penh" },
      { district: "Dangkao", province: "Phnom Penh" },
      { district: "Mean Chey", province: "Phnom Penh" },
      { district: "Chbar Ampov", province: "Phnom Penh" },
      { district: "Russey Keo", province: "Phnom Penh" },
      { district: "Saen Sok", province: "Phnom Penh" },
      { district: "Pur Senchey", province: "Phnom Penh" },
      { district: "Chraoy Chongvar", province: "Phnom Penh" },
      { district: "Praek Pnov", province: "Phnom Penh" },
      { district: "Boeng Keng Kang", province: "Phnom Penh" },
      { district: "Kamboul", province: "Phnom Penh" },
      { district: "Krong Preah Sihanouk", province: "Preah Sihanouk" },
      { district: "Prey Nob", province: "Preah Sihanouk" },
      { district: "Stueng Hav", province: "Preah Sihanouk" },
      { district: "Kampong Seila", province: "Preah Sihanouk" },
      { district: "Kaoh Rong", province: "Preah Sihanouk" },
      { district: "Krong Preah Vihear", province: "Preah Vihear" },
      { district: "Chey Saen", province: "Preah Vihear" },
      { district: "Chhaaeb", province: "Preah Vihear" },
      { district: "Choam Ksant", province: "Preah Vihear" },
      { district: "Kuleaen", province: "Preah Vihear" },
      { district: "Rovieng", province: "Preah Vihear" },
      { district: "Sangkum Thmei", province: "Preah Vihear" },
      { district: "Tbaeng Mean Chey", province: "Preah Vihear" },
      { district: "Krong Prey Veng", province: "Prey Veng" },
      { district: "Ba Phnum", province: "Prey Veng" },
      { district: "Kamchay Mear", province: "Prey Veng" },
      { district: "Kamping Trabaek", province: "Prey Veng" },
      { district: "Kanhchriech", province: "Prey Veng" },
      { district: "Me Sang", province: "Prey Veng" },
      { district: "Peam Chor", province: "Prey Veng" },
      { district: "Peam Ro", province: "Prey Veng" },
      { district: "Pea Reang", province: "Prey Veng" },
      { district: "Preah Sdach", province: "Prey Veng" },
      { district: "Sithor Kandal", province: "Prey Veng" },
      { district: "Pur Rieng", province: "Prey Veng" },
      { district: "Svay Antor", province: "Prey Veng" },
      { district: "Krong Pursat", province: "Pursat" },
      { district: "Bakan", province: "Pursat" },
      { district: "Kandieng", province: "Pursat" },
      { district: "Krakor", province: "Pursat" },
      { district: "Phnum Kravanh", province: "Pursat" },
      { district: "Ta Lou Senchey", province: "Pursat" },
      { district: "Veal Veaeng", province: "Pursat" },
      { district: "Krong Ban Lung", province: "Ratanakiri" },
      { district: "Andoung Meas", province: "Ratanakiri" },
      { district: "Bar Kaev", province: "Ratanakiri" },
      { district: "Koun Mom", province: "Ratanakiri" },
      { district: "Lumphat", province: "Ratanakiri" },
      { district: "Ou Chum", province: "Ratanakiri" },
      { district: "Ou Ya Dav", province: "Ratanakiri" },
      { district: "Ta Veaeng", province: "Ratanakiri" },
      { district: "Veun Sai", province: "Ratanakiri" },
      { district: "Krong Siem Reap", province: "Siem Reap" },
      { district: "Angkor Thum", province: "Siem Reap" },
      { district: "Chi Kraeng", province: "Siem Reap" },
      { district: "Kralanh", province: "Siem Reap" },
      { district: "Prasat Bakong", province: "Siem Reap" },
      { district: "Srei Snam", province: "Siem Reap" },
      { district: "Svay Ler", province: "Siem Reap" },
      { district: "Varin", province: "Siem Reap" },
      { district: "Soutr Nikum", province: "Siem Reap" },
      { district: "Puok", province: "Siem Reap" },
      { district: "Angkor Chum", province: "Siem Reap" },
      { district: "Banteay Srei", province: "Siem Reap" },
      { district: "Krong Stung Treng", province: "Stung Treng" },
      { district: "Sesan", province: "Stung Treng" },
      { district: "Siem Bouk", province: "Stung Treng" },
      { district: "Siem Pang", province: "Stung Treng" },
      { district: "Thala Barivat", province: "Stung Treng" },
      { district: "Borei Ou Svay Senchey", province: "Stung Treng" },
      { district: "Krong Bavet", province: "Svay Rieng" },
      { district: " Krong Svay Rieng", province: "Svay Rieng" },
      { district: "Chantrea", province: "Svay Rieng" },
      { district: "Kampong Rou", province: "Svay Rieng" },
      { district: "Rumdoul", province: "Svay Rieng" },
      { district: "Romeas Haek", province: "Svay Rieng" },
      { district: "Svay Chrum", province: "Svay Rieng" },
      { district: "Svay Teab", province: "Svay Rieng" },
      { district: "Krong Doun Kaev", province: "Takeo" },
      { district: "Angkor Borei", province: "Takeo" },
      { district: "Bai", province: "Takeo" },
      { district: "Borei Cholsar", province: "Takeo" },
      { district: "Kiri Vong", province: "Takeo" },
      { district: "Kaoh Andaet", province: "Takeo" },
      { district: "Prey Kabbas", province: "Takeo" },
      { district: "Samraong", province: "Takeo" },
      { district: "Treang", province: "Takeo" },
      { district: "Tram Kak", province: "Takeo" },
      { district: "Krong Soung", province: "Tbong Kmoum" },
      { district: "Dambae", province: "Tbong Kmoum" },
      { district: "Krouch Chhmar", province: "Tbong Kmoum" },
      { district: "Memot", province: "Tbong Kmoum" },
      { district: "Ou Reang Ov", province: "Tbong Kmoum" },
      { district: "Ponhea Kraek", province: "Tbong Kmoum" },
      { district: "Tboung Khmum", province: "Tbong Kmoum" },
    ];

    const createdLocations = await Location.bulkCreate(Locations);

    console.log("✅ Location created successfully:");
    createdLocations.forEach((location) =>
      console.log(`- ${location.district} (${location.province})`)
    );

    // Step 2: Insert User
    const usersData = [
      {
        first_name: "Sophearith",
        last_name: "Chren",
        phone_number: 855123456789,
        email: "sophearith.chren@bikestore.org",
        password: "CSPR@123",
        role: "admin",
      },
      {
        first_name: "Lyheng",
        last_name: "Touch",
        phone_number: 855987654321,
        email: "lyheng.touch@bikestore.org",
        password: "TLH@0123",
        role: "staff",
      },
      {
        first_name: "Phearinsathya",
        last_name: "Rith",
        phone_number: 85596366993,
        email: "phearinsathya.rith@bikestore.org",
        password: "RPRS@123",
        role: "manager",
      },
    ];

    // 17 Customers
    const customerNames = [
      { first_name: "Liam", last_name: "Campbell" },
      { first_name: "Ava", last_name: "Foster" },
      { first_name: "Noah", last_name: "Diaz" },
      { first_name: "Isabella", last_name: "Griffin" },
      { first_name: "Mason", last_name: "Hayes" },
      { first_name: "Mia", last_name: "Powell" },
      { first_name: "Lucas", last_name: "Reed" },
      { first_name: "Amelia", last_name: "Morgan" },
      { first_name: "Logan", last_name: "Cooper" },
      { first_name: "Charlotte", last_name: "Patterson" },
      { first_name: "Elijah", last_name: "Richardson" },
      { first_name: "Harper", last_name: "Brooks" },
      { first_name: "Benjamin", last_name: "Wood" },
      { first_name: "Evelyn", last_name: "Jenkins" },
      { first_name: "James", last_name: "Kelly" },
      { first_name: "Abigail", last_name: "Sanders" },
      { first_name: "Alexander", last_name: "Price" },
    ];

    customerNames.forEach((user, index) => {
      usersData.push({
        ...user,
        phone_number: 4000000000 + index,
        email: `${user.first_name.toLowerCase()}.${user.last_name.toLowerCase()}@example.com`,
        password: "password123",
        role: "customer",
      });
    });

    const createdUsers = await User.bulkCreate(usersData);

    console.log("✅ Created users:");
    createdUsers.forEach((u) => {
      console.log(`- ${u.first_name} ${u.last_name} (${u.role}) - ${u.email}`);
    });

    const brands = [
      { brand_name: "Decathlon" },
      { brand_name: "Specialized" },
      { brand_name: "Scott" },
      { brand_name: "Cube" },
      { brand_name: "Trek" },
      { brand_name: "Gaint" },
      { brand_name: "Merida" },
      { brand_name: "Hero Cycle" },
      { brand_name: "Waltx" },
      { brand_name: "Polygon" },
      { brand_name: "United Bike" },
      { brand_name: "Flying Pigeon" },
      { brand_name: "Trinx" },
      { brand_name: "Yongjiu" },
      { brand_name: "XDS" },
      { brand_name: "Toyo" },
      { brand_name: "Miyata" },
      { brand_name: "Bridgestone Cycle" },
      { brand_name: "Asama" },
      // Add more items...
    ];
    const createBrand = await Brand.bulkCreate(brands);

    console.log("Brands insert successfully");
    createBrand.forEach((brand) => console.log(`- ${brands.brand_name}`));

    // Step 4: Insert Category
    const categoryData = [
      { category_name: "City Cycle" },
      { category_name: "Mountain Cycle" },
      { category_name: "Kids Cycle" },
      { category_name: "Road Cycle" },
      { category_name: "Hybrid Cycle" },
      { category_name: "Electric Cycle" },
      { category_name: "Touring Cycle" },
      { category_name: "Gravel Cycle" },
      { category_name: "Urban Cycle" },
      { category_name: "Brake" },
      { category_name: "Gear" },
      { category_name: "Suspension" },
      { category_name: "Spoke" },
      { category_name: "Chain" },
      { category_name: "Saddle" },
      { category_name: "Frame" },
    ];

    const createdCategories = await Category.bulkCreate(categoryData);

    console.log("✅ Categories created successfully:");
    createdCategories.forEach((category) =>
      console.log(`- ${category.category_name} (ID: ${category.id})`)
    );

    // Step 5: Insert Product
    const product = await Product.create({
      product_name: "Giant ATX 3 Disc",
      price: 350,
      brand_id: brand.id,
      category_id: category.id,
    });

    // Step 6: Insert Stock
    const stock = await Stock.create({
      product_id: product.id,
      quantity: 25,
    });

    console.log("✅ Data inserted successfully.");
  } catch (error) {
    console.error("❌ Error during seed:", error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();
