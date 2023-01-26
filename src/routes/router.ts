import { Request, Response, Router } from "express";
import { postGame, getGames, updateGame, deleteGame } from "../controllers/controller.js";
import { validatingSchema } from "../middlewares/middleware.js";
import gameSchema from "../schemas/schema.js";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200)
})
router.post("/games", validatingSchema(gameSchema), postGame);
router.get("/games", getGames);
router.put("/games/:id", validatingSchema(gameSchema), updateGame);
router.delete("/games/:id", deleteGame);

export default router;