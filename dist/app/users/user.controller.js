"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleUser = exports.getAllUsers = exports.updateSingleUser = exports.loginUser = exports.createUser = void 0;
const user_service_1 = require("./user.service");
const node_env = process.env.NODE_ENV;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const token = req.headers.authorization;
        const result = yield user_service_1.userService.createUser(token, userData);
        res.status(201).json({
            success: true,
            status: 201,
            message: "User created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createUser = createUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginData = req.body;
        const result = yield user_service_1.userService.loginUser(loginData);
        const refreshToken = result === null || result === void 0 ? void 0 : result.refreshToken;
        const cookieOptions = {
            secure: node_env === "production",
            httpOnly: true,
        };
        res.cookie("refreshToken", refreshToken, cookieOptions);
        res.status(201).json({
            success: true,
            status: 201,
            message: "User logged-in successfully",
            data: result === null || result === void 0 ? void 0 : result.accessToken,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.loginUser = loginUser;
const updateSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        console.log(data, "body");
        console.log(id, "params");
        const result = yield user_service_1.userService.updateSingleUser(id, data);
        res.status(201).json({
            success: true,
            status: 201,
            message: "User updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateSingleUser = updateSingleUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userService.getAllUsers();
        res.status(200).json({
            success: true,
            status: 200,
            message: "Users fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
const getSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const result = yield user_service_1.userService.getSingleUser(userId);
        res.status(200).json({
            success: true,
            status: 200,
            message: "User fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleUser = getSingleUser;
