import * as brandrepository from "../Repository/sequelizeBrandQuery.js";

// GET /api/brands
export async function getAllBrands(req, res) {
  try {
    const brand = await brandrepository.getAllBrands();
    res.status(200).json(brand);
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getBrandById(req, res) {
  try {
    const id = req.params.id;
    const brands = await brandrepository.getBrandById(id);
    if (!brands) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.status(200).json(brands);
  } catch (error) {
    console.err("Error fetching brand", error);
    res.status(500).json({ messag: "server error" });
  }
}

export async function createBrand(req, res) {
  const { brand_name } = req.body;
  try {
    const brands = await brandrepository.createBrand({ brand_name });
    res.status(200).json(brands);
  } catch (error) {
    console.err("Error fetching brand", error);
    res.status(500).json({ messag: "server error" });
  }
}

export async function updateBrand(req, res) {
  const { id } = req.params;
  const { brand_name } = req.body;
  try {
    const brands = await brandrepository.updateBrand(id, brand_name);
    if (!brands) {
      return res.status(404).json({ messag: "Brand not found" });
    }
    res.status(200).json({ messag: "Brand update successfully" });
  } catch (error) {
    console.err("Error fetching brand", error);
    res.status(500).json({ messag: "server error" });
  }
}

export async function deleteBrand(req, res) {
  const { id } = req.params;
  try {
    const brands = await brandrepository.deleteBrand(id);
    if (!brands) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.status(201).json({ message: "Brand delete successfully" });
  } catch (err) {
    console.err("Error fetching brand", err);
    res.status(500).json({ messag: "server error" });
  }
}

export const getBrandByName = async (req, res) => {
  try {
    const brandNameParam = req.params.name.toLowerCase();

    const listAllBrand = {
      giant: "Giant",
      asama: "Asama",
      trek: "Trek",
      merida: "Merida",
      polygon: "Polygon",
    };

    const brandDisplayName = listAllBrand[brandNameParam];

    if (!brandDisplayName) {
      return res.status(404).json({ error: "Brand not found" });
    }

    const brand = await brandrepository.getBrandByName(brandDisplayName);

    if (!brand) {
      return res.status(404).json({ error: "Brand not found in database" });
    }

    res.status(200).json(brand);
  } catch (err) {
    console.error("Error fetching brand:", err);
    res.status(500).json({ message: "Error fetching brand" });
  }
};
