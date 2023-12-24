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
exports.categoryService = void 0;
const prismadb_1 = __importDefault(require("../lib/prismadb"));
const createCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.category.create({
        data,
    });
    return result;
});
const getSingleCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.category.findUnique({
        where: {
            id: categoryId,
        },
    });
    return result;
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.category.findMany({});
    return result;
});
const updateSingleCategory = (categoryId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.category.update({
        where: {
            id: categoryId,
        },
        data,
    });
    return result;
});
const deleteSingleCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.category.delete({
        where: {
            id: categoryId,
        },
    });
    return result;
});
exports.categoryService = {
    createCategory,
    getSingleCategory,
    getAllCategories,
    updateSingleCategory,
    deleteSingleCategory,
};
