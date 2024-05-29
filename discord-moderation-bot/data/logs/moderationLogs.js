const fs = require('fs');
const moment = require('moment');

const moderationLogs = [];

function logModerationAction(action, moderator, targetUser) {
    const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
    const logEntry = `${timestamp} - ${moderator} ${action} ${targetUser}`;
    moderationLogs.push(logEntry);
    fs.writeFileSync('moderationLogs.txt', moderationLogs.join('\n'));
}

module.exports = { logModerationAction };