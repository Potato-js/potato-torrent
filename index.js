'use strict';
const fs = require('fs');
const bencode = require('bencode');
// 1
const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
const url = urlParse(torrent.annouce.toString('utf-8'));
