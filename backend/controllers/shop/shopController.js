import { Product } from "../../models/productModel.js";

export const fetchFilteredProducts = async (req, res) => {
  try {
    console.log("Query String : ", req.query);
    const {
      categories = [],
      brands = [],
      sortBy = "price-lowtohigh",
    } = req.query;
    let filters = {};

    if (categories.length) {
      filters.category = { $in: categories.split(",") };
    }
    if (brands.length) {
      filters.brand = { $in: brands.split(",") };
    }
    let sort = {};
    switch (sortBy) {
      case "price-lowtohigh":
        sort.price = 1;

        break;
      case "price-hightolow":
        sort.price = -1;

        break;
      case "title-atoz":
        sort.title = 1;

        break;
      case "title-ztoa":
        sort.title = -1;

        break;

      default:
        sort.price = 1;
        break;
    }

    const filteredProducts = await Product.find(filters).sort(sort);
    console.log(filteredProducts);

    res.status(200).json({
      success: true,
      message: "Filtered Product Is Fetched Successfully",
      products: filteredProducts,
    });
  } catch (error) {
    console.log("Fetch FIltered Product : ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
