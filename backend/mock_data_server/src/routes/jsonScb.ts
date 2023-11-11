import express, { Request, Response } from 'express';
import { generateMockDataMs } from "../mock_data_generator/matching_service"

const router = express.Router()

export default router.get("/:uid", (req: Request, res: Response) => {
    res.json(generateMockDataMs());
})
