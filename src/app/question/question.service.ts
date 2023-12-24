import { Question } from "@prisma/client";
import prisma from "../lib/prismadb";

const createQuestion = async (data: Question): Promise<Question | null> => {
  const result = await prisma.question.create({
    data,
  });

  return result;
};

const getSingleQuestion = async (
  questionId: string
): Promise<Question | null> => {
  const result = await prisma.question.findUnique({
    where: {
      id: questionId,
    },
    include: {
      category: true,
    },
  });

  return result;
};

const getAllQuestions = async (
  categoryId: string
): Promise<Question[] | null> => {
  const result = await prisma.question.findMany({
    where: {
      categoryId,
    },
    include: {
      category: true,
    },
  });

  return result;
};

const getRandomQuestions = async (
  categoryId: string
): Promise<Question[] | null> => {
  const result = await prisma.$queryRaw<
    Question[]
  >`SELECT * FROM "Question" WHERE "categoryId" = ${categoryId} ORDER BY RANDOM() LIMIT 10`;

  return result;
};

const updateSingleQuestion = async (
  questionId: string,
  data: Partial<Question>
): Promise<Question | null> => {
  const result = await prisma.question.update({
    where: {
      id: questionId,
    },
    data,
    include: {
      category: true,
    },
  });

  return result;
};

const deleteSingleQuestion = async (
  questionId: string
): Promise<Question | null> => {
  const result = await prisma.question.delete({
    where: {
      id: questionId,
    },
  });

  return result;
};

export const questionService = {
  createQuestion,
  getSingleQuestion,
  getAllQuestions,
  getRandomQuestions,
  updateSingleQuestion,
  deleteSingleQuestion,
};
