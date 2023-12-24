import { Category } from "@prisma/client";
import prisma from "../lib/prismadb";

const createCategory = async (data: Category): Promise<Category | null> => {
  const result = await prisma.category.create({
    data,
  });

  return result;
};

const getSingleCategory = async (
  categoryId: string
): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });

  return result;
};

const getAllCategories = async (): Promise<Category[] | null> => {
  const result = await prisma.category.findMany({});

  return result;
};

const updateSingleCategory = async (
  categoryId: string,
  data: Partial<Category>
): Promise<Category | null> => {
  const result = await prisma.category.update({
    where: {
      id: categoryId,
    },
    data,
  });

  return result;
};

const deleteSingleCategory = async (
  categoryId: string
): Promise<Category | null> => {
  const result = await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });

  return result;
};

export const categoryService = {
  createCategory,
  getSingleCategory,
  getAllCategories,
  updateSingleCategory,
  deleteSingleCategory,
};
