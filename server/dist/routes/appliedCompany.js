"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let appliedCompanies = []; // 간단한 in-memory DB (나중에 DB 연결 가능)
router.post('/', (req, res) => {
    const { name, position, appliedDate, status, note, link, } = req.body;
    if (!name || !position || !appliedDate || !status) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newCompany = {
        id: Date.now(), // 간단한 ID
        name,
        position,
        appliedDate,
        status,
        note,
        link,
    };
    appliedCompanies.push(newCompany);
    res.status(201).json(newCompany);
});
exports.default = router;
