"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRouter = void 0;
const express_1 = require("express");
const question_controller_1 = require("./question.controller");
const auth_1 = __importDefault(require("../middleware/auth"));
const types_1 = require("../types");
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const questionValidation_1 = require("./questionValidation");
const router = (0, express_1.Router)();
router.post("/create", (0, auth_1.default)(types_1.userRole.admin), (0, validateRequest_1.default)(questionValidation_1.validateCreateQuestion), question_controller_1.createQuestion);
router.get("/by-category/:id", (0, auth_1.default)(types_1.userRole.admin), question_controller_1.getAllQuestions);
router.get("/by-category/random/:id", question_controller_1.getRandomQuestions);
router.get("/:id", question_controller_1.getSingleQuestion);
router.patch("/:id", (0, auth_1.default)(types_1.userRole.admin), (0, validateRequest_1.default)(questionValidation_1.validateUpdateQuestion), question_controller_1.updateSingleQuestion);
router.delete("/:id", (0, auth_1.default)(types_1.userRole.admin), question_controller_1.deleteSingleQuestion);
exports.questionRouter = router;
