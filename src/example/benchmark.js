'use strict';

import {hex} from "../encoder/hex";
import Md2 from "../hasher/md2";
import Md4 from "../hasher/md4";
import Md5 from "../hasher/md5";
import Ripemd from "../hasher/ripemd";
import Has160 from "../hasher/has160";
import Sha0 from "../hasher/sha0";
import Sha1 from "../hasher/sha1";
import Sha256 from "../hasher/sha256";
import Sha512 from "../hasher/sha512";
import Snefru from "../hasher/snefru";
import Whirlpool from "../hasher/whirlpool";

suite('Hash from simple string with HEX result', function (suite) {
  bench('md2', function () {
    suite.md2 = new Md2();
    suite.md2.update('xxx');
    hex(suite.md2.finalize());
  });
  bench('md4', function () {
    suite.md4 = new Md4();
    suite.md4.update('xxx');
    hex(suite.md4.finalize());
  });
  bench('md5', function () {
    suite.md5 = new Md5();
    suite.md5.update('xxx');
    hex(suite.md5.finalize());
  });
  bench('ripemd128', function () {
    suite.ripemd128 = new Ripemd({length: 128});
    suite.ripemd128.update('xxx');
    hex(suite.ripemd128.finalize());
  });
  bench('ripemd160', function () {
    suite.ripemd160 = new Ripemd({length: 160});
    suite.ripemd160.update('xxx');
    hex(suite.ripemd160.finalize());
  });
  bench('ripemd256', function () {
    suite.ripemd256 = new Ripemd({length: 256});
    suite.ripemd256.update('xxx');
    hex(suite.ripemd256.finalize());
  });
  bench('ripemd320', function () {
    suite.ripemd320 = new Ripemd({length: 320});
    suite.ripemd320.update('xxx');
    hex(suite.ripemd320.finalize());
  });
  bench('has160', function () {
    suite.has160 = new Has160();
    suite.has160.update('xxx');
    hex(suite.has160.finalize());
  });
  bench('sha0', function () {
    suite.sha0 = new Sha0();
    suite.sha0.update('xxx');
    hex(suite.sha0.finalize());
  });
  bench('sha1', function () {
    suite.sha1 = new Sha1();
    suite.sha1.update('xxx');
    hex(suite.sha1.finalize());
  });
  bench('sha224', function () {
    suite.sha224 = new Sha256({length: 224});
    suite.sha224.update('xxx');
    hex(suite.sha224.finalize());
  });
  bench('sha256', function () {
    suite.sha256 = new Sha256();
    suite.sha256.update('xxx');
    hex(suite.sha256.finalize());
  });
  bench('sha512', function () {
    suite.sha512 = new Sha512();
    suite.sha512.update('xxx');
    hex(suite.sha512.finalize());
  });
  bench('snefru', function () {
    suite.snefru = new Snefru();
    suite.snefru.update('xxx');
    hex(suite.snefru.finalize());
  });
  bench('whirlpool', function () {
    suite.whirlpool = new Whirlpool();
    suite.whirlpool.update('xxx');
    hex(suite.whirlpool.finalize());
  });
});
suite('Update', function (suite) {
  setup(function () {
    suite.md2 = new Md2();
    suite.md4 = new Md4();
    suite.md5 = new Md5();
    suite.ripemd128 = new Ripemd({length: 128});
    suite.ripemd160 = new Ripemd({length: 160});
    suite.ripemd256 = new Ripemd({length: 256});
    suite.ripemd320 = new Ripemd({length: 320});
    suite.has160 = new Has160();
    suite.sha0 = new Sha0();
    suite.sha1 = new Sha1();
    suite.sha224 = new Sha256({length: 224});
    suite.sha256 = new Sha256();
    suite.sha512 = new Sha512();
    suite.snefru = new Snefru();
    suite.whirlpool = new Whirlpool();
  });
  bench('md2', function () {
    !!suite.md2.update('xxx');
  });
  bench('md4', function () {
    !!suite.md4.update('xxx');
  });
  bench('md5', function () {
    !!suite.md5.update('xxx');
  });
  bench('ripemd128', function () {
    !!suite.ripemd128.update('xxx');
  });
  bench('ripemd160', function () {
    !!suite.ripemd160.update('xxx');
  });
  bench('ripemd256', function () {
    !!suite.ripemd256.update('xxx');
  });
  bench('ripemd320', function () {
    !!suite.ripemd320.update('xxx');
  });
  bench('has160', function () {
    !!suite.has160.update('xxx');
  });
  bench('sha0', function () {
    !!suite.sha0.update('xxx');
  });
  bench('sha1', function () {
    !!suite.sha1.update('xxx');
  });
  bench('sha224', function () {
    !!suite.sha224.update('xxx');
  });
  bench('sha256', function () {
    !!suite.sha256.update('xxx');
  });
  bench('sha512', function () {
    !!suite.sha512.update('xxx');
  });
  bench('snefru', function () {
    !!suite.snefru.update('xxx');
  });
  bench('whirlpool', function () {
    !!suite.whirlpool.update('xxx');
  });
});