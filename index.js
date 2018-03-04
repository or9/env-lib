#!/usr/bin/env node

const ENV_FILE = process.argv[2] || `${process.env.PWD/.env}`;
const { readFileSync } = require("fs");

readFileSync(ENV_FILE, "utf8")
	.split(/[\r\n]/gm)
	.forEach(row => {
		const keyval = row.split("=");
		const key = keyval[0];
		const val = keyval[1];
		process.env[key] = val;
	});

