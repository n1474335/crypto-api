'use strict';

import {hex} from "../encoder/hex";
import Md5 from "../hasher/md5";
import Sha1 from "../hasher/sha1";
import Sha256 from "../hasher/sha256";
import Sha512 from "../hasher/sha512";

suite('MD5 with HEX result', function (suite) {
  setup(function () {
    const md5 = new Md5();
    md5.update('');
    suite.hash = hex(md5.finalize(suite.encoder));
  });
  bench('CryptoApi', function () {
    suite.tmp = new Md5();
    suite.tmp.update(suite.hash);
    !!(suite.result = hex(suite.tmp.finalize()));
  });
  bench('CryptoJS', function () {
    !!(suite.result = CryptoJS.enc.Hex.stringify(CryptoJS.MD5(suite.hash)));
  });
  bench('jsHashes', function () {
    !!(suite.result = (new Hashes.MD5).hex(suite.hash));
  });
});
suite('MD5 update', function (suite) {
  setup(function () {
    suite.cryptoApi = new Md5();
    suite.cryptoApi.update('');
    suite.hash = hex(suite.cryptoApi.finalize());
    suite.cryptoApi = new Md5();
    suite.cryptoJS = CryptoJS.algo.MD5.create();
  });
  bench('CryptoApi', function () {
    !!(suite.cryptoApi.update(suite.hash));
  });
  bench('CryptoJS', function () {
    !!(suite.cryptoJS.update(suite.hash));
  });
});
suite('SHA1 with HEX result', function (suite) {
  setup(function () {
    const sha1 = new Sha1();
    sha1.update('');
    suite.hash = hex(sha1.finalize());
  });
  bench('CryptoApi', function () {
    suite.tmp = new Sha1();
    suite.tmp.update(suite.hash);
    !!(hex(suite.tmp.finalize()));
  });
  bench('CryptoJS', function () {
    !!CryptoJS.enc.Hex.stringify(CryptoJS.SHA1(suite.hash));
  });
  bench('jsHashes', function () {
    !!(new Hashes.SHA1).hex(suite.hash);
  });
  bench('jsSHA', function () {
    suite.tmp = new jsSHA('SHA-1', 'TEXT');
    suite.tmp.update(suite.hash);
    !!(suite.tmp.getHash('HEX'));
  });
  bench('asmCrypto', function () {
    !!(asmCrypto.SHA1.hex(suite.hash));
  });
});
suite('SHA1 update', function (suite) {
  setup(function () {
    suite.cryptoApi = new Sha1();
    suite.cryptoApi.update('');
    suite.hash = hex(suite.cryptoApi.finalize());
    suite.cryptoApi = new Sha1();
    suite.cryptoJS = CryptoJS.algo.SHA1.create();
    suite.jsSHA = new jsSHA('SHA-1', 'TEXT');
  });
  bench('CryptoApi', function () {
    !!(suite.cryptoApi.update(suite.hash));
  });
  bench('CryptoJS', function () {
    !!(suite.cryptoJS.update(suite.hash));
  });
  bench('jsSHA', function () {
    !!(suite.jsSHA.update(suite.hash));
  });
});
suite('SHA256 with HEX result', function (suite) {
  setup(function () {
    const sha256 = new Sha256();
    sha256.update('');
    suite.hash = hex(sha256.finalize());
  });
  bench('CryptoApi', function () {
    suite.tmp = new Sha256();
    suite.tmp.update(suite.hash);
    !!(hex(suite.tmp.finalize()));
  });
  bench('CryptoJS', function () {
    !!CryptoJS.enc.Hex.stringify(CryptoJS.SHA256(suite.hash));
  });
  bench('jsHashes', function () {
    !!((new Hashes.SHA256).hex(suite.hash));
  });
  bench('jsSHA', function () {
    suite.tmp = new jsSHA('SHA-256', 'TEXT');
    suite.tmp.update(suite.hash);
    !!(suite.tmp.getHash('HEX'));
  });
  bench('asmCrypto', function () {
    !!(asmCrypto.SHA256.hex(suite.hash));
  });
});
suite('SHA256 update', function (suite) {
  setup(function () {
    suite.cryptoApi = new Sha256();
    suite.cryptoApi.update('');
    suite.hash = hex(suite.cryptoApi.finalize());
    suite.cryptoApi = new Sha256();
    suite.cryptoJS = CryptoJS.algo.SHA256.create();
    suite.jsSHA = new jsSHA('SHA-256', 'TEXT');
  });
  bench('CryptoApi', function () {
    !!(suite.cryptoApi.update(suite.hash));
  });
  bench('CryptoJS', function () {
    !!(suite.cryptoJS.update(suite.hash));
  });
  bench('jsSHA', function () {
    !!(suite.jsSHA.update(suite.hash));
  });
});
suite('SHA512 with HEX result', function (suite) {
  setup(function () {
    const sha512 = new Sha512();
    sha512.update('');
    suite.hash = hex(sha512.finalize());
  });
  bench('CryptoApi', function () {
    suite.tmp = new Sha512();
    suite.tmp.update(suite.hash);
    !!(hex(suite.tmp.finalize()));
  });
  bench('CryptoJS', function () {
    !!CryptoJS.enc.Hex.stringify(CryptoJS.SHA512(suite.hash));
  });
  bench('jsHashes', function () {
    !!(new Hashes.SHA512).hex(suite.hash);
  });
  bench('jsSHA', function () {
    suite.tmp = new jsSHA('SHA-512', 'TEXT');
    suite.tmp.update(suite.hash);
    !!(suite.tmp.getHash('HEX'));
  });
});

suite('SHA512 update', function (suite) {
  setup(function () {
    suite.cryptoApi = new Sha512();
    suite.cryptoApi.update('');
    suite.hash = hex(suite.cryptoApi.finalize());
    suite.cryptoApi = new Sha512();
    suite.cryptoJS = CryptoJS.algo.SHA512.create();
    suite.jsSHA = new jsSHA('SHA-512', 'TEXT');
  });
  bench('CryptoApi', function () {
    !!(suite.cryptoApi.update(suite.hash));
  });
  bench('CryptoJS', function () {
    !!(suite.cryptoJS.update(suite.hash));
  });
  bench('jsSHA', function () {
    !!(suite.jsSHA.update(suite.hash));
  });
});