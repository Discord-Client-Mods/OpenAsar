// Discord uses require but we'll use JSON parse for vaguely more security-ish
const { readFileSync } = require('fs');
const { join } = require('path');

const buildInfoPath = join(process.resourcesPath, 'build_info.json');
const buildInfo = JSON.parse(readFileSync(buildInfoPath, 'utf8'));

module.exports = buildInfo;