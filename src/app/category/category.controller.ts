import { RequestHandler } from "express";
import { categoryService } from "./category.service";

export const createCategory: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await categoryService.createCategory(data);

    res.status(201).json({
      status: 201,
      message: "Category created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getSingleCategory: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await categoryService.getSingleCategory(id);

    res.status(200).json({
      status: 200,
      message: "Category retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllCategories: RequestHandler = async (req, res, next) => {
  try {
    const result = await categoryService.getAllCategories();

    res.status(200).json({
      status: 200,
      message: "Categories retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateSingleCategory: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await categoryService.updateSingleCategory(id, data);

    res.status(200).json({
      status: 200,
      message: "Category updated successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteSingleCategory: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await categoryService.deleteSingleCategory(id);

    res.status(200).json({
      status: 200,
      message: "Category deleted successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
