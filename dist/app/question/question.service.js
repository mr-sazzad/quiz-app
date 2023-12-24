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
exports.questionService = void 0;
const prismadb_1 = __importDefault(require("../lib/prismadb"));
const createQuestion = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.question.create({
        data,
    });
    return result;
});
const getSingleQuestion = (questionId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.question.findUnique({
        where: {
            id: questionId,
        },
        include: {
            category: true,
        },
    });
    return result;
});
const getAllQuestions = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.question.findMany({
        where: {
            categoryId,
        },
        include: {
            category: true,
        },
    });
    return result;
});
const getRandomQuestions = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.$queryRaw `SELECT * FROM "Question" WHERE "categoryId" = ${categoryId} ORDER BY RANDOM() LIMIT 10`;
    return result;
});
const updateSingleQuestion = (questionId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.question.update({
        where: {
            id: questionId,
        },
        data,
        include: {
            category: true,
        },
    });
    return result;
});
const deleteSingleQuestion = (questionId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismadb_1.default.question.delete({
        where: {
            id: questionId,
        },
    });
    return result;
});
exports.questionService = {
    createQuestion,
    getSingleQuestion,
    getAllQuestions,
    getRandomQuestions,
    updateSingleQuestion,
    deleteSingleQuestion,
};
