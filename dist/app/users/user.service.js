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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const types_1 = require("../types");
const apiError_1 = __importDefault(require("../errors/apiError"));
const prismadb_1 = __importDefault(require("../lib/prismadb"));
const jwtHelpers_1 = require("../helper/jwtHelpers");
const secret = process.env.JWT_SECRET;
const saltRounds = Number(process.env.SALT_ROUNDS);
const createUser = (token, user) => __awaiter(void 0, void 0, void 0, function* () {
    const email = user.email;
    if (user.role === types_1.userRole.admin) {
        throw new apiError_1.default(401, "unauthorize access");
    }
    const isUserExist = yield prismadb_1.default.user.findFirst({
        where: {
            email,
        },
    });
    if (isUserExist) {
        throw new Error("User already exists");
    }
    user.password = yield bcryptjs_1.default.hash(user.password, saltRounds);
    const newUser = yield prismadb_1.default.user.create({
        data: user,
    });
    return newUser;
});
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const email = user.email;
    const isUserExist = yield prismadb_1.default.user.findUnique({
        where: {
            email,
        },
    });
    if (!isUserExist) {
        throw new Error("User does not exist");
    }
    const isPasswordMatch = yield bcryptjs_1.default.compare(user.password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password);
    if (!isPasswordMatch) {
        throw new Error("Check your email or password");
    }
    const credentials = {
        id: isUserExist.id,
        email: isUserExist.email,
        name: isUserExist.name,
        role: isUserExist.role,
    };
    const accessToken = jwtHelpers_1.jwtHelpers.createToken(credentials, secret, "1d");
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken(credentials, secret, "365d");
    return {
        accessToken,
        refreshToken,
    };
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prismadb_1.default.user.findMany({
        where: {
            role: "user",
        },
    });
    if (!users.length) {
        return null;
    }
    return users;
});
const getSingleUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prismadb_1.default.user.findFirst({
        where: {
            id: userId,
        },
    });
    if (!user) {
        throw new apiError_1.default(404, "User not found");
    }
    return user;
});
const updateSingleUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.user.update({
        where: {
            id,
        },
        data,
    });
    if (!result) {
        throw new apiError_1.default(500, "Internal server error");
    }
    return result;
});
exports.userService = {
    createUser,
    loginUser,
    getAllUsers,
    getSingleUser,
    updateSingleUser,
};
