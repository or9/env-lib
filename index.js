#!/usr/bin/env node

const { readFileSync } = require("fs");
readFileSync(`${process.env.PWD}/.env`, "utf8")
	.split(/[\r\n]/gm)
	.forEach(row => {
		const keyval = row.split("=");
		const key = keyval[0];
		const val = keyval[1];
		process.env[key] = val;
	});

