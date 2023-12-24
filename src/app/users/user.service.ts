import bcrypt from "bcryptjs";
import { ICredentials, ITokens, userRole } from "../types";
import ApiError from "../errors/apiError";
import prisma from "../lib/prismadb";
import { User } from "@prisma/client";
import { jwtHelpers } from "../helper/jwtHelpers";

const secret = process.env.JWT_SECRET;
const saltRounds = Number(process.env.SALT_ROUNDS);

const createUser = async (token: string, user: User): Promise<User | null> => {
  const email = user.email;

  if (user.role === userRole.admin) {
    throw new ApiError(401, "unauthorize access");
  }

  const isUserExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (isUserExist) {
    throw new Error("User already exists");
  }

  user.password = await bcrypt.hash(user.password, saltRounds);

  const newUser = await prisma.user.create({
    data: user,
  });

  return newUser;
};

const loginUser = async (user: ICredentials): Promise<ITokens | null> => {
  const email = user.email;

  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new Error("User does not exist");
  }

  const isPasswordMatch = await bcrypt.compare(
    user.password,
    isUserExist?.password
  );

  if (!isPasswordMatch) {
    throw new Error("Check your email or password");
  }

  const credentials = {
    id: isUserExist.id,
    email: isUserExist.email,
    name: isUserExist.name,
    role: isUserExist.role,
  };

  const accessToken = jwtHelpers.createToken(
    credentials,
    secret as string,
    "1d"
  );
  const refreshToken = jwtHelpers.createToken(
    credentials,
    secret as string,
    "365d"
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getAllUsers = async (): Promise<User[] | null> => {
  const users = await prisma.user.findMany({
    where: {
      role: "user",
    },
  });

  if (!users.length) {
    return null;
  }

  return users;
};

const getSingleUser = async (userId: string): Promise<User | null> => {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return user;
};

const updateSingleUser = async (id: string, data: Partial<User>) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
  });

  if (!result) {
    throw new ApiError(500, "Internal server error");
  }

  return result;
};

export const userService = {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
};
