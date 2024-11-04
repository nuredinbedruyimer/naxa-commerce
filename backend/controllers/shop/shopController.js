import { Product } from "../../models/productModel.js";

export const fetchFilteredProducts = async (req, res) => {
  try {
    const filteredProducts = await Product.find({});

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
