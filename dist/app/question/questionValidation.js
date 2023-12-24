"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateQuestion = exports.validateCreateQuestion = void 0;
const zod_1 = require("zod");
exports.validateCreateQuestion = zod_1.z.object({
    body: zod_1.z.object({
        text: zod_1.z.string({ required_error: "text is required" }),
        options: zod_1.z.array(zod_1.z.string()).nonempty("options is required"),
        correctAnswers: zod_1.z.array(zod_1.z.number()).nonempty("correctAnswers is required"),
        explanation: zod_1.z.string({ required_error: "explanation is required" }),
        categoryId: zod_1.z.string({ required_error: "categoryId is required" }),
    }),
});
exports.validateUpdateQuestion = zod_1.z.object({
    body: zod_1.z.object({
        text: zod_1.z.string().optional(),
        options: zod_1.z.array(zod_1.z.string()).optional(),
        correctAnswers: zod_1.z.array(zod_1.z.number()).optional(),
        explanation: zod_1.z.string().optional(),
        categoryId: zod_1.z.string().optional(),
    }),
});
