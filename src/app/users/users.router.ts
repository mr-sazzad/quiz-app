import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getSingleUser,
  loginUser,
  updateSingleUser,
} from "./user.controller";
import validateRequest from "../middleware/validateRequest";
import { validateCreateUser, validateUpdateUser } from "./user.validation";

const router = Router();

router.post("/signup", validateRequest(validateCreateUser), createUser);

router.post("/login", loginUser);

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.patch(
  "/update/:id",
  validateRequest(validateUpdateUser),
  updateSingleUser
);

export const userRouter = router;
