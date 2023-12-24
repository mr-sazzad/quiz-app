"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
router.post("/signup", (0, validateRequest_1.default)(user_validation_1.validateCreateUser), user_controller_1.createUser);
router.post("/login", user_controller_1.loginUser);
router.get("/", user_controller_1.getAllUsers);
router.get("/:id", user_controller_1.getSingleUser);
router.patch("/update/:id", (0, validateRequest_1.default)(user_validation_1.validateUpdateUser), user_controller_1.updateSingleUser);
exports.userRouter = router;
