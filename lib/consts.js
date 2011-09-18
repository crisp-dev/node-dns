/*
Copyright 2011 Timothy J Fontaine <tjfontaine@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN

*/

"use strict";

function reverse_map(src) {
  var dst = {},
    k;

  for (k in src) {
    if (src.hasOwnProperty(k)) {
      dst[src[k]] = k;
    }
  }
  return dst;
}

var NAME_TO_QTYPE = exports.NAME_TO_QTYPE = {
  A: 1,
  NS: 2,
  CNAME: 5,
  SOA: 6,
  PTR: 12,
  MX: 15,
  TXT: 16,
  AAAA: 28,
  SRV: 33,
  ANY: 255,
};
exports.QTYPE_TO_NAME = reverse_map(NAME_TO_QTYPE);

var NAME_TO_QCLASS = exports.NAME_TO_QCLASS = {
  IN: 1,
};
exports.QCLASS_TO_NAME = reverse_map(NAME_TO_QCLASS);

exports.FAMILY_TO_QTYPE = {
  4: NAME_TO_QTYPE.A,
  6: NAME_TO_QTYPE.AAAA,
};
exports.QTYPE_TO_FAMILY = {};
exports.QTYPE_TO_FAMILY[exports.NAME_TO_QTYPE.A] = 4;
exports.QTYPE_TO_FAMILY[exports.NAME_TO_QTYPE.AAAA] = 6;

exports.NAME_TO_RCODE = {
  NOERROR: 0,
  FORMERR: 1,
  SERVFAIL: 2,
  NOTFOUND: 3,
  NOTIMP: 4,
  REFUSED: 5,
};
exports.RCODE_TO_NAME = reverse_map(exports.NAME_TO_RCODE);

exports.BADNAME = 'EBADNAME';
exports.BADRESP = 'EBADRESP';
exports.CONNREFUSED = 'ECONNREFUSED';
exports.DESTRUCTION = 'EDESTRUCTION';
exports.REFUSED = 'EREFUSED';
exports.FORMERR = 'EFORMERR';
exports.NODATA = 'ENODATA';
exports.NOMEM = 'ENOMEM';
exports.NOTFOUND = 'ENOTFOUND';
exports.NOTIMP = 'ENOTIMP';
exports.SERVFAIL = 'ESERVFAIL';
exports.TIMEOUT = 'ETIMEOUT';