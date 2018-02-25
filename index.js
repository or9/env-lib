#!/usr/bin/env node

const fs = require("fs");

fs.readFileSync(`${__dirname}/.env`, "utf8")
	.split("\n")
	.forEach(row => {
		const keyval = row.split("=");
		const key = keyval[0];
		const val = keyval[1];
		process.env[key] = val;
	});

