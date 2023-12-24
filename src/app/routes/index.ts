import { Router } from "express";

import { questionRouter } from "../question/question.router";
import { categoryRouter } from "../category/category.router";
import { userRouter } from "../users/users.router";

const router = Router();

router.use("/categories", categoryRouter);

router.use("/questions", questionRouter);

router.use("/users", userRouter);

export const globalRoutes = router;
