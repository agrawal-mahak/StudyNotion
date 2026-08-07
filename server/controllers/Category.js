const { Mongoose } = require("mongoose");
const Category = require("../models/Category");
const Course = require("../models/Course");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const CategorysDetails = await Category.create({
      name: name,
      description: description,
    });
    console.log(CategorysDetails);
    return res.status(200).json({
      success: true,
      message: "Categorys Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

exports.showAllCategories = async (req, res) => {
  try {
    console.log("INSIDE SHOW ALL CATEGORIES");
    const allCategorys = await Category.find({});
    res.status(200).json({
      success: true,
      data: allCategorys,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//categoryPageDetails

exports.categoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body;
    console.log("PRINTING CATEGORY ID: ", categoryId);
    // Get courses for the specified category
    let selectedCategory = await Category.findById(categoryId)
      .populate({
        path: "courses",
        populate: [
          { path: "ratingAndReviews" },
          { path: "instructor" }
        ],
      })
      .exec();

    // Handle the case when the category is not found
    if (!selectedCategory) {
      console.log("Category not found.");
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    // Query Course model directly by category ID to catch courses linked via Course.category
    const directCourses = await Course.find({ category: categoryId })
      .populate("ratingAndReviews")
      .populate("instructor")
      .exec();

    // Merge courses from both Category.courses array and Course.category references
    const courseMap = new Map();
    (selectedCategory.courses || []).forEach((c) => c && courseMap.set(c._id.toString(), c));
    (directCourses || []).forEach((c) => c && courseMap.set(c._id.toString(), c));

    selectedCategory = selectedCategory.toObject();
    selectedCategory.courses = Array.from(courseMap.values());

    // Get courses for other categories
    const categoriesExceptSelected = await Category.find({
      _id: { $ne: categoryId },
    });
    let differentCategory = null;
    if (categoriesExceptSelected.length > 0) {
      const randomCategoryObj = categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)];
      differentCategory = await Category.findById(randomCategoryObj._id)
        .populate({
          path: "courses",
          populate: { path: "instructor" },
        })
        .exec();

      if (differentCategory) {
        const diffDirectCourses = await Course.find({ category: differentCategory._id })
          .populate("instructor")
          .exec();
        const diffMap = new Map();
        (differentCategory.courses || []).forEach((c) => c && diffMap.set(c._id.toString(), c));
        (diffDirectCourses || []).forEach((c) => c && diffMap.set(c._id.toString(), c));
        differentCategory = differentCategory.toObject();
        differentCategory.courses = Array.from(diffMap.values());
      }
    }

    // Get top-selling courses across all categories
    const allCourses = await Course.find()
      .populate("instructor")
      .populate("ratingAndReviews")
      .exec();

    const mostSellingCourses = (allCourses || [])
      .sort((a, b) => (b.sold || 0) - (a.sold || 0))
      .slice(0, 10);

    res.status(200).json({
      success: true,
      data: {
        selectedCategory,
        differentCategory,
        mostSellingCourses,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
