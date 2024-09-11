"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskContoller_1 = require("../controllers/taskContoller");
const router = (0, express_1.Router)();
router.get("/", taskContoller_1.getTasks);
router.post("/", taskContoller_1.createTask);
router.patch("/:taskId/status", taskContoller_1.updateTaskStatus);
exports.default = router;
