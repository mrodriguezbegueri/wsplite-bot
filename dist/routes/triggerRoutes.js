"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const discordController_1 = require("../controllers/discordController");
const triggerRoutes = (0, express_1.Router)();
triggerRoutes.post('/newAuth', (async (req, res) => {
    const count = req.body.count;
    await (0, discordController_1.sendMessage)(count);
    res.json('OK');
}));
exports.default = triggerRoutes;
