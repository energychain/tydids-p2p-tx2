#!/usr/bin/env node

const lib = require("./lib.js");

const { program } = require('commander');
let privateKey = null;
let presentation = "0x60122b0619591b886a786aB4C74204f3DaA1F71e";

program
  .option('-priv --privateKey <key>')
  .option('-p --presentation [address]')

program.parse();

const options = program.opts();
const args = program.args;

if(typeof options.privateKey !== 'undefined') { privateKey = options.privateKey};
if(typeof options.presentation !== 'undefined') { presentation = options.presentation};

const instance = lib(presentation,privateKey);
