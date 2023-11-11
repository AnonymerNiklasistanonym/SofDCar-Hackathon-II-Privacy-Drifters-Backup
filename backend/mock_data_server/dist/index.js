"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const root_1 = __importDefault(require("./routes/root"));
const jsonAs_1 = __importDefault(require("./routes/jsonAs"));
const jsonMs_1 = __importDefault(require("./routes/jsonMs"));
const jsonScb_1 = __importDefault(require("./routes/jsonScb"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use('/json_as/', jsonAs_1.default);
app.use('/json_ms/', jsonMs_1.default);
app.use('/json_scb/', jsonScb_1.default);
app.use('/', root_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
