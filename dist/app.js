"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const members_routes_1 = __importDefault(require("./app/modules/members/members.routes"));
// express
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "https://test-psi-wheat-50.vercel.app", credentials: true }));
// application routes
app.use('/api/members', members_routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
