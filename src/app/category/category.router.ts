import { Router } from "express";
import {
  createCategory,
  deleteSingleCategory,
  getAllCategories,
  getSingleCategory,
  updateSingleCategory,
} from "./category.controller";
import auth from "../middleware/auth";
import { userRole } from "../types";
import validateRequest from "../middleware/validateRequest";
import { validateCategory } from "./categoryValidation";

const router = Router();

router.post(
  "/create",
  auth(userRole.admin),
  validateRequest(validateCategory),
  createCategory
);

router.get("/", getAllCategories);

router.patch("/edit/:id", auth(userRole.admin), updateSingleCategory);

router.get("/:id", getSingleCategory);

router.delete("/:id", auth(userRole.admin), deleteSingleCategory);

export const categoryRouter = router;
