"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./app/routes");
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Quiz Application",
        author: "sazzad-karim",
        version: "1.0.0",
        start_date: "2023-12-21",
        greetings: "Welcome to Quiz Application Server!",
    });
});
app.use("/api/v1", routes_1.globalRoutes);
app.use(globalErrorHandler_1.default);
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Not Found",
        errorMessages: [
            {
                path: req.originalUrl,
                message: "API Not Found",
            },
        ],
    });
    next();
});
exports.default = app;
