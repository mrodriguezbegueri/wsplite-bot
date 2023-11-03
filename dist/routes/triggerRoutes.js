"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const discordController_1 = require("../controllers/discordController");
const triggerRoutes = (0, express_1.Router)();
triggerRoutes.get('/newAuth', (async (req, res) => {
    await (0, discordController_1.sendMessage)();
    res.json('OK');
}));
exports.default = triggerRoutes;
