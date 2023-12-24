import { RequestHandler } from "express";
import { questionService } from "./question.service";

export const createQuestion: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await questionService.createQuestion(data);

    res.status(201).json({
      status: 201,
      message: "Question created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllQuestions: RequestHandler = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const result = await questionService.getAllQuestions(categoryId);

    res.status(200).json({
      status: 200,
      message: "questions retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getSingleQuestion: RequestHandler = async (req, res, next) => {
  try {
    const questionId = req.params.id;
    const result = await questionService.getSingleQuestion(questionId);

    res.status(200).json({
      status: 200,
      message: "question retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateSingleQuestion: RequestHandler = async (req, res, next) => {
  try {
    const questionId = req.params.id;
    const data = req.body;
    const result = await questionService.updateSingleQuestion(questionId, data);

    res.status(200).json({
      status: 200,
      message: "question updated successfully",
      success: true,
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteSingleQuestion: RequestHandler = async (req, res, next) => {
  try {
    const questionId = req.params.id;
    const result = await questionService.deleteSingleQuestion(questionId);

    res.status(200).json({
      status: 200,
      message: "question deleted successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getRandomQuestions: RequestHandler = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const result = await questionService.getRandomQuestions(categoryId);

    res.status(200).json({
      status: 200,
      message: "Random questions retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
