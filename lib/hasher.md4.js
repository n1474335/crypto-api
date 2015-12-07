;(
    function (root, factory) {
        "use strict";
        if (typeof root.CryptoApi === 'undefined') {
            root.CryptoApi = require('../lib/crypto-api')
        }
        return factory(root.CryptoApi);
    }(this, /**
     *
     * @param {CryptoApi} CryptoApi
     * @returns {Md4}
     */
    function (CryptoApi) {
        'use strict';

        var Md4 = function Md4() {
            CryptoApi.HasherInterface.call(this);
            this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];
        };
        var Hasher = function () {
        };
        Hasher.prototype = CryptoApi.HasherInterface.prototype;

        Md4.prototype = new Hasher;
        Md4.prototype.constructor = Md4;

        /**
         * Hash state
         * @type {number[]}
         */
        Md4.prototype.state.hash = [];

        // Transform constants
        Md4.prototype.S = [
            [3, 7, 11, 19],
            [3, 5, 9, 13],
            [3, 9, 11, 15]
        ];
        Md4.prototype.F = 0x00000000;
        Md4.prototype.G = 0x5a827999;
        Md4.prototype.H = 0x6ed9eba1;

        // Transform functions
        Md4.prototype.FF = function FF(x, y, z) {
            return (x & y) | ((~x) & z);
        };
        Md4.prototype.GG = function GG(x, y, z) {
            return (x & y) | (x & z) | (y & z);
        };
        Md4.prototype.HH = function HH(x, y, z) {
            return x ^ y ^ z;
        };
        Md4.prototype.CC = function CC(f, k, a, x, y, z, m, s) {
            return CryptoApi.Tools.rotateLeft((a + f(x, y, z) + m + k), s);
        };

        Md4.prototype.processBlock = function processBlock(block) {
            // Working variables
            var a = this.state.hash[0];
            var b = this.state.hash[1];
            var c = this.state.hash[2];
            var d = this.state.hash[3];

            // Round 1
            a = this.CC(this.FF, this.F, a, b, c, d, block[0], this.S[0][0]);
            d = this.CC(this.FF, this.F, d, a, b, c, block[1], this.S[0][1]);
            c = this.CC(this.FF, this.F, c, d, a, b, block[2], this.S[0][2]);
            b = this.CC(this.FF, this.F, b, c, d, a, block[3], this.S[0][3]);
            a = this.CC(this.FF, this.F, a, b, c, d, block[4], this.S[0][0]);
            d = this.CC(this.FF, this.F, d, a, b, c, block[5], this.S[0][1]);
            c = this.CC(this.FF, this.F, c, d, a, b, block[6], this.S[0][2]);
            b = this.CC(this.FF, this.F, b, c, d, a, block[7], this.S[0][3]);
            a = this.CC(this.FF, this.F, a, b, c, d, block[8], this.S[0][0]);
            d = this.CC(this.FF, this.F, d, a, b, c, block[9], this.S[0][1]);
            c = this.CC(this.FF, this.F, c, d, a, b, block[10], this.S[0][2]);
            b = this.CC(this.FF, this.F, b, c, d, a, block[11], this.S[0][3]);
            a = this.CC(this.FF, this.F, a, b, c, d, block[12], this.S[0][0]);
            d = this.CC(this.FF, this.F, d, a, b, c, block[13], this.S[0][1]);
            c = this.CC(this.FF, this.F, c, d, a, b, block[14], this.S[0][2]);
            b = this.CC(this.FF, this.F, b, c, d, a, block[15], this.S[0][3]);

            // Round 2
            a = this.CC(this.GG, this.G, a, b, c, d, block[0], this.S[1][0]);
            d = this.CC(this.GG, this.G, d, a, b, c, block[4], this.S[1][1]);
            c = this.CC(this.GG, this.G, c, d, a, b, block[8], this.S[1][2]);
            b = this.CC(this.GG, this.G, b, c, d, a, block[12], this.S[1][3]);
            a = this.CC(this.GG, this.G, a, b, c, d, block[1], this.S[1][0]);
            d = this.CC(this.GG, this.G, d, a, b, c, block[5], this.S[1][1]);
            c = this.CC(this.GG, this.G, c, d, a, b, block[9], this.S[1][2]);
            b = this.CC(this.GG, this.G, b, c, d, a, block[13], this.S[1][3]);
            a = this.CC(this.GG, this.G, a, b, c, d, block[2], this.S[1][0]);
            d = this.CC(this.GG, this.G, d, a, b, c, block[6], this.S[1][1]);
            c = this.CC(this.GG, this.G, c, d, a, b, block[10], this.S[1][2]);
            b = this.CC(this.GG, this.G, b, c, d, a, block[14], this.S[1][3]);
            a = this.CC(this.GG, this.G, a, b, c, d, block[3], this.S[1][0]);
            d = this.CC(this.GG, this.G, d, a, b, c, block[7], this.S[1][1]);
            c = this.CC(this.GG, this.G, c, d, a, b, block[11], this.S[1][2]);
            b = this.CC(this.GG, this.G, b, c, d, a, block[15], this.S[1][3]);

            // Round 3
            a = this.CC(this.HH, this.H, a, b, c, d, block[0], this.S[2][0]);
            d = this.CC(this.HH, this.H, d, a, b, c, block[8], this.S[2][1]);
            c = this.CC(this.HH, this.H, c, d, a, b, block[4], this.S[2][2]);
            b = this.CC(this.HH, this.H, b, c, d, a, block[12], this.S[2][3]);
            a = this.CC(this.HH, this.H, a, b, c, d, block[2], this.S[2][0]);
            d = this.CC(this.HH, this.H, d, a, b, c, block[10], this.S[2][1]);
            c = this.CC(this.HH, this.H, c, d, a, b, block[6], this.S[2][2]);
            b = this.CC(this.HH, this.H, b, c, d, a, block[14], this.S[2][3]);
            a = this.CC(this.HH, this.H, a, b, c, d, block[1], this.S[2][0]);
            d = this.CC(this.HH, this.H, d, a, b, c, block[9], this.S[2][1]);
            c = this.CC(this.HH, this.H, c, d, a, b, block[5], this.S[2][2]);
            b = this.CC(this.HH, this.H, b, c, d, a, block[13], this.S[2][3]);
            a = this.CC(this.HH, this.H, a, b, c, d, block[3], this.S[2][0]);
            d = this.CC(this.HH, this.H, d, a, b, c, block[11], this.S[2][1]);
            c = this.CC(this.HH, this.H, c, d, a, b, block[7], this.S[2][2]);
            b = this.CC(this.HH, this.H, b, c, d, a, block[15], this.S[2][3]);

            this.state.hash = [
                (this.state.hash[0] + a) | 0,
                (this.state.hash[1] + b) | 0,
                (this.state.hash[2] + c) | 0,
                (this.state.hash[3] + d) | 0
            ];
        };

        Md4.prototype.finalize = function finalize() {
            // Add padding
            var padLen = this.message.length < 56 ? 56 - this.message.length : 120 - this.message.length;
            var padding = [];
            for (var i = 0; i < padLen; i++) {
                padding.push(i == 0 ? 0x80 : 0);
            }
            // Add length
            var lengthBits = this.length * 8;
            for (i = 0; i < 4; i++) {
                padding.push((lengthBits >> (8 * i)) & 0xff);
            }
            // @todo fix length to 64 bit
            for (i = 0; i < 4; i++) {
                padding.push(0);
            }

            this.update(padding);

            var hash = [];
            for (i = 0; i < this.state.hash.length; i++) {
                for (var j = 0; j < 4; j++) {
                    hash.push((this.state.hash[i] >> 8 * j) & 0xFF);
                }
            }

            // Return hash
            return CryptoApi.hashArray(hash);
        };

        CryptoApi.Hashers.add('md4', Md4);
        return Md4;
    })
);