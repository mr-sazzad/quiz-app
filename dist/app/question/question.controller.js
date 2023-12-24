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
exports.getRandomQuestions = exports.deleteSingleQuestion = exports.updateSingleQuestion = exports.getSingleQuestion = exports.getAllQuestions = exports.createQuestion = void 0;
const question_service_1 = require("./question.service");
const createQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield question_service_1.questionService.createQuestion(data);
        res.status(201).json({
            status: 201,
            message: "Question created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createQuestion = createQuestion;
const getAllQuestions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryId = req.params.id;
        const result = yield question_service_1.questionService.getAllQuestions(categoryId);
        res.status(200).json({
            status: 200,
            message: "questions retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllQuestions = getAllQuestions;
const getSingleQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questionId = req.params.id;
        const result = yield question_service_1.questionService.getSingleQuestion(questionId);
        res.status(200).json({
            status: 200,
            message: "question retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleQuestion = getSingleQuestion;
const updateSingleQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questionId = req.params.id;
        const data = req.body;
        const result = yield question_service_1.questionService.updateSingleQuestion(questionId, data);
        res.status(200).json({
            status: 200,
            message: "question updated successfully",
            success: true,
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateSingleQuestion = updateSingleQuestion;
const deleteSingleQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questionId = req.params.id;
        const result = yield question_service_1.questionService.deleteSingleQuestion(questionId);
        res.status(200).json({
            status: 200,
            message: "question deleted successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteSingleQuestion = deleteSingleQuestion;
const getRandomQuestions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryId = req.params.id;
        const result = yield question_service_1.questionService.getRandomQuestions(categoryId);
        res.status(200).json({
            status: 200,
            message: "Random questions retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getRandomQuestions = getRandomQuestions;
