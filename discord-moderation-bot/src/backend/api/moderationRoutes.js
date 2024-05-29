const express = require('express');
const router = express.Router();
const moderationService = require('../../services/moderationService');

router.post('/warn', async (req, res) => {
    try {
        const { userId, reason } = req.body;
        const result = await moderationService.warnUser(userId, reason);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/mute', async (req, res) => {
    try {
        const { userId, duration } = req.body;
        const result = await moderationService.muteUser(userId, duration);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/kick', async (req, res) => {
    try {
        const { userId, reason } = req.body;
        const result = await moderationService.kickUser(userId, reason);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/ban', async (req, res) => {
    try {
        const { userId, reason } = req.body;
        const result = await moderationService.banUser(userId, reason);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;