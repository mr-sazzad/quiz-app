"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = void 0;
const zod_1 = require("zod");
exports.validateCategory = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "name filed is required" }),
    }),
});
