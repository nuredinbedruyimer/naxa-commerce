import { Product } from "../../models/productModel.js";

export const fetchFilteredProducts = async (req, res) => {
  try {
    console.log("Query String : ", req.query);
    const {
      categories = [],
      brands = [],
      sort = "price-lowtohigh",
    } = req.query;
    let filters = {};

    if (categories.length) {
      filters.category = { $in: categories.split(",") };
    }
    if (brands.length) {
      filters.brand = { $in: brands.split(",") };
    }
    let sortBy = {};
    switch (sort) {
      case "price-lowtohigh":
        sortBy.price = 1;

        break;
      case "price-hightolow":
        sortBy.price = -1;

        break;
      case "title-atoz":
        sortBy.title = 1;

        break;
      case "title-ztoa":
        sortBy.title = -1;

        break;

      default:
        sortBy.title = -1;
        break;
    }

    console.log("Sort BY Value : ", sortBy);

    const filteredProducts = await Product.find(filters).sort(sortBy);

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

export const fetchProductByID = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product Is Not Found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Product Get Successfully",
      product: product,
    });
  } catch (error) {
    console.log(" Error In Fetch Single Product : ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
