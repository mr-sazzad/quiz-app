"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateUser = exports.validateCreateUser = void 0;
const zod_1 = require("zod");
exports.validateCreateUser = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "name is required" }),
        email: zod_1.z.string({ required_error: "email is required" }),
        password: zod_1.z.string({ required_error: "password is required" }),
        bio: zod_1.z.string().optional(),
        role: zod_1.z.enum(["user", "admin"]),
        phone: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        score: zod_1.z.number().optional(),
        totalQuestion: zod_1.z.number().optional(),
        address: zod_1.z.string().optional(),
        age: zod_1.z.string().optional(),
    }),
});
exports.validateUpdateUser = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        bio: zod_1.z.string().optional().optional(),
        role: zod_1.z.enum(["user", "admin"]).optional(),
        phone: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        score: zod_1.z.number().optional(),
        totalQuestion: zod_1.z.number().optional(),
        address: zod_1.z.string().optional(),
        age: zod_1.z.string().optional(),
    }),
});
