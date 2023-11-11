"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const matching_service_1 = require("../mock_data_generator/matching_service");
const router = express_1.default.Router();
exports.default = router.get("/", (req, res) => {
    res.json((0, matching_service_1.generateMockDataMs)());
});
