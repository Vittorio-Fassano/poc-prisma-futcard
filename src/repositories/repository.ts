import prisma from "../config/db.js";
import gameSchema from "../schemas/schema";
import { Game } from "../types/types";

export async function insertGameRepository(
  game: Game
) {
  return prisma.games.create({
    data: game
  });
}

export async function getGameByStadium(
  stadium: number
) {
  return prisma.games.findFirst({
    where: {
      stadium,
    }
  });
}

export async function getAllGames() {
  return prisma.games.findMany();
}

export async function updateGameRepository(
  game: Game,
  id: number
) {
  return prisma.games.upsert({
    where: {
      id
    },
    create: game,
    update: game
  })
}

export async function getGameById(id: number) {
  return prisma.games.findUnique({
    where: {
      id,
    }
  });
}

export async function deleteGameRepository(id: number) {
  return prisma.games.delete({
    where: {
      id,
    }
  });
}
