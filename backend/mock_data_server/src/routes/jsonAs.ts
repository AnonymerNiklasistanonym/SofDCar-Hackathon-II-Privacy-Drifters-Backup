import express, { Request, Response } from 'express';
import { generateMockDataAs } from "../mock_data_generator/authentication_service"

const router = express.Router()

export default router.get("/", (req: Request, res: Response) => {
    res.json(generateMockDataAs());
})
