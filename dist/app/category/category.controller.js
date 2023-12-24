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
exports.deleteSingleCategory = exports.updateSingleCategory = exports.getAllCategories = exports.getSingleCategory = exports.createCategory = void 0;
const category_service_1 = require("./category.service");
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield category_service_1.categoryService.createCategory(data);
        res.status(201).json({
            status: 201,
            message: "Category created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createCategory = createCategory;
const getSingleCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield category_service_1.categoryService.getSingleCategory(id);
        res.status(200).json({
            status: 200,
            message: "Category retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleCategory = getSingleCategory;
const getAllCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.categoryService.getAllCategories();
        res.status(200).json({
            status: 200,
            message: "Categories retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllCategories = getAllCategories;
const updateSingleCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = yield category_service_1.categoryService.updateSingleCategory(id, data);
        res.status(200).json({
            status: 200,
            message: "Category updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateSingleCategory = updateSingleCategory;
const deleteSingleCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield category_service_1.categoryService.deleteSingleCategory(id);
        res.status(200).json({
            status: 200,
            message: "Category deleted successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteSingleCategory = deleteSingleCategory;
