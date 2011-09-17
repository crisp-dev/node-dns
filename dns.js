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

exports.createServer = require('./lib/server').createServer;

var client = require('./lib/client');
exports.lookup = client.lookup;
exports.resolve = client.resolve;
exports.resolve4 = client.resolve4;
exports.resolve6 = client.resolve6;
exports.resolveMx = client.resolveMx;
exports.resolveTxt = client.resolveTxt;
exports.resolveSrv = client.resolveSrv;
exports.resolveNs = client.resolveNs;
exports.resolveCname = client.resolveCname;
exports.reverse = client.reverse;

var consts = require('./lib/consts');
exports.BADNAME = consts.EBADNAME;
exports.BADRESP = consts.EBADRESP;
exports.CONNREFUSED = consts.ECONNREFUSED;
exports.DESTRUCTION = consts.EDESTRUCTION;
exports.REFUSED = consts.EREFUSED;
exports.FORMERR = consts.EFORMERR;
exports.NODATA = consts.ENODATA;
exports.NOMEM = consts.ENOMEM;
exports.NOTFOUND = consts.ENOTFOUND;
exports.NOTIMP = consts.ENOTIMP;
exports.SERVFAIL = consts.ESERVFAIL;
exports.TIMEOUT = consts.ETIMEOUT;

var types = require('./lib/types');
var createType = function(name) {
  exports[name] = function (vals) {
    return new types[name](vals);
  }
}
for (k in types) {
  if (types.hasOwnProperty(k)) {
    createType(k);
  }
}
