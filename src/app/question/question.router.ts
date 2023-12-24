import { Router } from "express";
import {
  createQuestion,
  deleteSingleQuestion,
  getAllQuestions,
  getRandomQuestions,
  getSingleQuestion,
  updateSingleQuestion,
} from "./question.controller";
import auth from "../middleware/auth";
import { userRole } from "../types";
import validateRequest from "../middleware/validateRequest";
import {
  validateCreateQuestion,
  validateUpdateQuestion,
} from "./questionValidation";

const router = Router();

router.post(
  "/create",
  auth(userRole.admin),
  validateRequest(validateCreateQuestion),
  createQuestion
);

router.get("/by-category/:id", auth(userRole.admin), getAllQuestions);

router.get("/by-category/random/:id", getRandomQuestions);

router.get("/:id", getSingleQuestion);

router.patch(
  "/:id",
  auth(userRole.admin),
  validateRequest(validateUpdateQuestion),
  updateSingleQuestion
);

router.delete("/:id", auth(userRole.admin), deleteSingleQuestion);

export const questionRouter = router;
