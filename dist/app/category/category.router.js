"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const auth_1 = __importDefault(require("../middleware/auth"));
const types_1 = require("../types");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const categoryValidation_1 = require("./categoryValidation");
const router = (0, express_1.Router)();
router.post("/create", (0, auth_1.default)(types_1.userRole.admin), (0, validateRequest_1.default)(categoryValidation_1.validateCategory), category_controller_1.createCategory);
router.get("/", category_controller_1.getAllCategories);
router.patch("/edit/:id", (0, auth_1.default)(types_1.userRole.admin), category_controller_1.updateSingleCategory);
router.get("/:id", category_controller_1.getSingleCategory);
router.delete("/:id", (0, auth_1.default)(types_1.userRole.admin), category_controller_1.deleteSingleCategory);
exports.categoryRouter = router;
