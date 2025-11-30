import { R as React, r as reactExports, j as jsxRuntimeExports, S as SEOHead, a7 as Sparkles, f as Card, h as CardTitle, k as CardContent, a3 as Label, U as Input, B as Button, g as CardHeader, d as Clock, G as Globe, c as Shield, T as TrendingUp, m as Lock, ag as backend } from "./index-C_OXA6OQ.js";
import { S as StructuredData } from "./StructuredData-_yklk7FG.js";
import { L as Link2 } from "./link-2-CINC0lIp.js";
import { Z as Zap } from "./zap-B5WxZbDS.js";
import { C as Check } from "./check-BMzwQJZ4.js";
import { C as Copy } from "./copy-DGMuG98H.js";
import { C as ChartColumn } from "./chart-column-CAGIVosk.js";
import { T as Target } from "./target-1ApqtYDG.js";
import { U as Users } from "./users-fS_YAEJN.js";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var qrcodegen;
((qrcodegen2) => {
  const _QrCode = class {
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.modules = [];
      this.isFunction = [];
      if (version < _QrCode.MIN_VERSION || version > _QrCode.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (msk < -1 || msk > 7)
        throw new RangeError("Mask value out of range");
      this.size = version * 4 + 17;
      let row = [];
      for (let i = 0; i < this.size; i++)
        row.push(false);
      for (let i = 0; i < this.size; i++) {
        this.modules.push(row.slice());
        this.isFunction.push(row.slice());
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk == -1) {
        let minPenalty = 1e9;
        for (let i = 0; i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            msk = i;
            minPenalty = penalty;
          }
          this.applyMask(i);
        }
      }
      assert(0 <= msk && msk <= 7);
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
      this.isFunction = [];
    }
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return _QrCode.encodeSegments(segs, ecl);
    }
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return _QrCode.encodeSegments([seg], ecl);
    }
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(_QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= _QrCode.MAX_VERSION) || mask < -1 || mask > 7)
        throw new RangeError("Invalid value");
      let version;
      let dataUsedBits;
      for (version = minVersion; ; version++) {
        const dataCapacityBits2 = _QrCode.getNumDataCodewords(version, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion)
          throw new RangeError("Data too long");
      }
      for (const newEcl of [_QrCode.Ecc.MEDIUM, _QrCode.Ecc.QUARTILE, _QrCode.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= _QrCode.getNumDataCodewords(version, newEcl) * 8)
          ecl = newEcl;
      }
      let bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
        for (const b of seg.getData())
          bb.push(b);
      }
      assert(bb.length == dataUsedBits);
      const dataCapacityBits = _QrCode.getNumDataCodewords(version, ecl) * 8;
      assert(bb.length <= dataCapacityBits);
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      assert(bb.length % 8 == 0);
      for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)
        appendBits(padByte, 8, bb);
      let dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length)
        dataCodewords.push(0);
      bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
      return new _QrCode(version, ecl, dataCodewords, mask);
    }
    getModule(x, y) {
      return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 == 0);
        this.setFunctionModule(i, 6, i % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0))
            this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem = data;
      for (let i = 0; i < 10; i++)
        rem = rem << 1 ^ (rem >>> 9) * 1335;
      const bits = (data << 10 | rem) ^ 21522;
      assert(bits >>> 15 == 0);
      for (let i = 0; i <= 5; i++)
        this.setFunctionModule(8, i, getBit(bits, i));
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9; i < 15; i++)
        this.setFunctionModule(14 - i, 8, getBit(bits, i));
      for (let i = 0; i < 8; i++)
        this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
      for (let i = 8; i < 15; i++)
        this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
      this.setFunctionModule(8, this.size - 8, true);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let rem = this.version;
      for (let i = 0; i < 12; i++)
        rem = rem << 1 ^ (rem >>> 11) * 7973;
      const bits = this.version << 12 | rem;
      assert(bits >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const color = getBit(bits, i);
        const a = this.size - 11 + i % 3;
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
            this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
        }
      }
    }
    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++)
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
      }
    }
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length != _QrCode.getNumDataCodewords(ver, ecl))
        throw new RangeError("Invalid argument");
      const numBlocks = _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = Math.floor(_QrCode.getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      let blocks = [];
      const rsDiv = _QrCode.reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0; i < numBlocks; i++) {
        let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
        k += dat.length;
        const ecc = _QrCode.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks)
          dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      let result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
          if (i != shortBlockLen - blockEccLen || j >= numShortBlocks)
            result.push(block[i]);
        });
      }
      assert(result.length == rawCodewords);
      return result;
    }
    drawCodewords(data) {
      if (data.length != Math.floor(_QrCode.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right == 6)
          right = 5;
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = (right + 1 & 2) == 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
      assert(i == data.length * 8);
    }
    applyMask(mask) {
      if (mask < 0 || mask > 7)
        throw new RangeError("Mask value out of range");
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          let invert;
          switch (mask) {
            case 0:
              invert = (x + y) % 2 == 0;
              break;
            case 1:
              invert = y % 2 == 0;
              break;
            case 2:
              invert = x % 3 == 0;
              break;
            case 3:
              invert = (x + y) % 3 == 0;
              break;
            case 4:
              invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
              break;
            case 5:
              invert = x * y % 2 + x * y % 3 == 0;
              break;
            case 6:
              invert = (x * y % 2 + x * y % 3) % 2 == 0;
              break;
            case 7:
              invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert)
            this.modules[y][x] = !this.modules[y][x];
        }
      }
    }
    getPenaltyScore() {
      let result = 0;
      for (let y = 0; y < this.size; y++) {
        let runColor = false;
        let runX = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x] == runColor) {
            runX++;
            if (runX == 5)
              result += _QrCode.PENALTY_N1;
            else if (runX > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * _QrCode.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let runColor = false;
        let runY = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++) {
          if (this.modules[y][x] == runColor) {
            runY++;
            if (runY == 5)
              result += _QrCode.PENALTY_N1;
            else if (runY > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * _QrCode.PENALTY_N3;
      }
      for (let y = 0; y < this.size - 1; y++) {
        for (let x = 0; x < this.size - 1; x++) {
          const color = this.modules[y][x];
          if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1])
            result += _QrCode.PENALTY_N2;
        }
      }
      let dark = 0;
      for (const row of this.modules)
        dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
      const total = this.size * this.size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      assert(0 <= k && k <= 9);
      result += k * _QrCode.PENALTY_N4;
      assert(0 <= result && result <= 2568888);
      return result;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        let result = [6];
        for (let pos = this.size - 7; result.length < numAlign; pos -= step)
          result.splice(1, 0, pos);
        return result;
      }
    }
    static getNumRawDataModules(ver) {
      if (ver < _QrCode.MIN_VERSION || ver > _QrCode.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7)
          result -= 36;
      }
      assert(208 <= result && result <= 29648);
      return result;
    }
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(_QrCode.getNumRawDataModules(ver) / 8) - _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255)
        throw new RangeError("Degree out of range");
      let result = [];
      for (let i = 0; i < degree - 1; i++)
        result.push(0);
      result.push(1);
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j] = _QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length)
            result[j] ^= result[j + 1];
        }
        root = _QrCode.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    static reedSolomonComputeRemainder(data, divisor) {
      let result = divisor.map((_) => 0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => result[i] ^= _QrCode.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    static reedSolomonMultiply(x, y) {
      if (x >>> 8 != 0 || y >>> 8 != 0)
        throw new RangeError("Byte out of range");
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      assert(z >>> 8 == 0);
      return z;
    }
    finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      assert(n <= this.size * 3);
      const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] == 0)
        currentRunLength += this.size;
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
  };
  let QrCode = _QrCode;
  QrCode.MIN_VERSION = 1;
  QrCode.MAX_VERSION = 40;
  QrCode.PENALTY_N1 = 3;
  QrCode.PENALTY_N2 = 3;
  QrCode.PENALTY_N3 = 40;
  QrCode.PENALTY_N4 = 10;
  QrCode.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ];
  QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ];
  qrcodegen2.QrCode = QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len != 0)
      throw new RangeError("Value out of range");
    for (let i = len - 1; i >= 0; i--)
      bb.push(val >>> i & 1);
  }
  function getBit(x, i) {
    return (x >>> i & 1) != 0;
  }
  function assert(cond) {
    if (!cond)
      throw new Error("Assertion error");
  }
  const _QrSegment = class {
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0)
        throw new RangeError("Invalid argument");
      this.bitData = bitData.slice();
    }
    static makeBytes(data) {
      let bb = [];
      for (const b of data)
        appendBits(b, 8, bb);
      return new _QrSegment(_QrSegment.Mode.BYTE, data.length, bb);
    }
    static makeNumeric(digits) {
      if (!_QrSegment.isNumeric(digits))
        throw new RangeError("String contains non-numeric characters");
      let bb = [];
      for (let i = 0; i < digits.length; ) {
        const n = Math.min(digits.length - i, 3);
        appendBits(parseInt(digits.substr(i, n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new _QrSegment(_QrSegment.Mode.NUMERIC, digits.length, bb);
    }
    static makeAlphanumeric(text) {
      if (!_QrSegment.isAlphanumeric(text))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let bb = [];
      let i;
      for (i = 0; i + 2 <= text.length; i += 2) {
        let temp = _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length)
        appendBits(_QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      return new _QrSegment(_QrSegment.Mode.ALPHANUMERIC, text.length, bb);
    }
    static makeSegments(text) {
      if (text == "")
        return [];
      else if (_QrSegment.isNumeric(text))
        return [_QrSegment.makeNumeric(text)];
      else if (_QrSegment.isAlphanumeric(text))
        return [_QrSegment.makeAlphanumeric(text)];
      else
        return [_QrSegment.makeBytes(_QrSegment.toUtf8ByteArray(text))];
    }
    static makeEci(assignVal) {
      let bb = [];
      if (assignVal < 0)
        throw new RangeError("ECI assignment value out of range");
      else if (assignVal < 1 << 7)
        appendBits(assignVal, 8, bb);
      else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else
        throw new RangeError("ECI assignment value out of range");
      return new _QrSegment(_QrSegment.Mode.ECI, 0, bb);
    }
    static isNumeric(text) {
      return _QrSegment.NUMERIC_REGEX.test(text);
    }
    static isAlphanumeric(text) {
      return _QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(segs, version) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version);
        if (seg.numChars >= 1 << ccbits)
          return Infinity;
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      let result = [];
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != "%")
          result.push(str.charCodeAt(i));
        else {
          result.push(parseInt(str.substr(i + 1, 2), 16));
          i += 2;
        }
      }
      return result;
    }
  };
  let QrSegment = _QrSegment;
  QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
  QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
  QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  qrcodegen2.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  ((QrCode2) => {
    const _Ecc = class {
      constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
      }
    };
    let Ecc = _Ecc;
    Ecc.LOW = new _Ecc(0, 1);
    Ecc.MEDIUM = new _Ecc(1, 0);
    Ecc.QUARTILE = new _Ecc(2, 3);
    Ecc.HIGH = new _Ecc(3, 2);
    QrCode2.Ecc = Ecc;
  })(qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  ((QrSegment2) => {
    const _Mode = class {
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    };
    let Mode = _Mode;
    Mode.NUMERIC = new _Mode(1, [10, 12, 14]);
    Mode.ALPHANUMERIC = new _Mode(2, [9, 11, 13]);
    Mode.BYTE = new _Mode(4, [8, 16, 16]);
    Mode.KANJI = new _Mode(8, [8, 10, 12]);
    Mode.ECI = new _Mode(7, [0, 0, 0]);
    QrSegment2.Mode = Mode;
  })(qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen_default = qrcodegen;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var ERROR_LEVEL_MAP = {
  L: qrcodegen_default.QrCode.Ecc.LOW,
  M: qrcodegen_default.QrCode.Ecc.MEDIUM,
  Q: qrcodegen_default.QrCode.Ecc.QUARTILE,
  H: qrcodegen_default.QrCode.Ecc.HIGH
};
var DEFAULT_SIZE = 128;
var DEFAULT_LEVEL = "L";
var DEFAULT_BGCOLOR = "#FFFFFF";
var DEFAULT_FGCOLOR = "#000000";
var DEFAULT_INCLUDEMARGIN = false;
var MARGIN_SIZE = 4;
var DEFAULT_IMG_SCALE = 0.1;
function generatePath(modules, margin = 0) {
  const ops = [];
  modules.forEach(function(row, y) {
    let start = null;
    row.forEach(function(cell, x) {
      if (!cell && start !== null) {
        ops.push(`M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`);
        start = null;
        return;
      }
      if (x === row.length - 1) {
        if (!cell) {
          return;
        }
        if (start === null) {
          ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
        } else {
          ops.push(`M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`);
        }
        return;
      }
      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join("");
}
function excavateModules(modules, excavation) {
  return modules.slice().map((row, y) => {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }
    return row.map((cell, x) => {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }
      return false;
    });
  });
}
function getImageSettings(cells, size, includeMargin, imageSettings) {
  if (imageSettings == null) {
    return null;
  }
  const margin = includeMargin ? MARGIN_SIZE : 0;
  const numCells = cells.length + margin * 2;
  const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  const scale = numCells / size;
  const w = (imageSettings.width || defaultSize) * scale;
  const h = (imageSettings.height || defaultSize) * scale;
  const x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
  const y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
  let excavation = null;
  if (imageSettings.excavate) {
    let floorX = Math.floor(x);
    let floorY = Math.floor(y);
    let ceilW = Math.ceil(w + x - floorX);
    let ceilH = Math.ceil(h + y - floorY);
    excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
  }
  return { x, y, h, w, excavation };
}
(function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
})();
function QRCodeSVG(props) {
  const _a = props, {
    value,
    size = DEFAULT_SIZE,
    level = DEFAULT_LEVEL,
    bgColor = DEFAULT_BGCOLOR,
    fgColor = DEFAULT_FGCOLOR,
    includeMargin = DEFAULT_INCLUDEMARGIN,
    imageSettings
  } = _a, otherProps = __objRest(_a, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "imageSettings"
  ]);
  let cells = qrcodegen_default.QrCode.encodeText(value, ERROR_LEVEL_MAP[level]).getModules();
  const margin = includeMargin ? MARGIN_SIZE : 0;
  const numCells = cells.length + margin * 2;
  const calculatedImageSettings = getImageSettings(cells, size, includeMargin, imageSettings);
  let image = null;
  if (imageSettings != null && calculatedImageSettings != null) {
    if (calculatedImageSettings.excavation != null) {
      cells = excavateModules(cells, calculatedImageSettings.excavation);
    }
    image = /* @__PURE__ */ React.createElement("image", {
      xlinkHref: imageSettings.src,
      height: calculatedImageSettings.h,
      width: calculatedImageSettings.w,
      x: calculatedImageSettings.x + margin,
      y: calculatedImageSettings.y + margin,
      preserveAspectRatio: "none"
    });
  }
  const fgPath = generatePath(cells, margin);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    height: size,
    width: size,
    viewBox: `0 0 ${numCells} ${numCells}`
  }, otherProps), /* @__PURE__ */ React.createElement("path", {
    fill: bgColor,
    d: `M0,0 h${numCells}v${numCells}H0z`,
    shapeRendering: "crispEdges"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: fgColor,
    d: fgPath,
    shapeRendering: "crispEdges"
  }), image);
}
function SmartShortener() {
  const [url, setUrl] = reactExports.useState("");
  const [customAlias, setCustomAlias] = reactExports.useState("");
  const [shortUrl, setShortUrl] = reactExports.useState("");
  const [shortCode, setShortCode] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(false);
  const [showAnalytics, setShowAnalytics] = reactExports.useState(false);
  const [analytics, setAnalytics] = reactExports.useState(null);
  const [error, setError] = reactExports.useState("");
  const handleShorten = async () => {
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      setError("URL must start with http:// or https://");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const result = await backend.shortener.create({
        url,
        customAlias: customAlias || void 0
      });
      setShortUrl(result.shortUrl);
      setShortCode(result.shortCode);
    } catch (err) {
      setError(err.message || "Failed to shorten URL");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const handleCopy = async () => {
    if (shortUrl) {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  const loadAnalytics = async () => {
    if (!shortCode) return;
    try {
      const data = await backend.shortener.analytics({ shortCode });
      setAnalytics(data);
      setShowAnalytics(true);
    } catch (err) {
      console.error("Failed to load analytics:", err);
    }
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Smart Shortener",
    description: "Free URL shortener with analytics and QR code generation",
    url: "https://smartcalculatorhubs.com/tools/shortener",
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOHead,
      {
        title: "Free Smart URL Shortener with Analytics & QR Codes | Smart Calculator Hubs",
        description: "Transform long URLs into memorable short links. Free URL shortener with real-time analytics, custom aliases, QR code generation, and click tracking. No signup required!",
        keywords: "url shortener, link shortener, short link, qr code, analytics, free url shortener, custom short url, link tracking",
        ogType: "website",
        ogImage: "https://smartcalculatorhubs.com/icons/icon-512x512.png"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StructuredData, { data: structuredData }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12 max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 mb-4 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Smart Shortener" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto", children: [
          "Transform endless URLs into powerful, trackable short links — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-indigo-600 dark:text-indigo-400", children: "completely free" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-in fade-in slide-in-from-left-6 duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-0 shadow-2xl rounded-3xl overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-3 text-white text-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-6 h-6" }),
                "Create Your Short Link"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-100 mt-2", children: "Paste any URL and get instant results" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "url", className: "text-base font-semibold", children: "Original URL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "url",
                    type: "url",
                    placeholder: "https://example.com/your/very/long/url/here",
                    value: url,
                    onChange: (e) => setUrl(e.target.value),
                    className: "mt-2 h-12 text-base",
                    onKeyDown: (e) => e.key === "Enter" && handleShorten()
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "alias", className: "text-base font-semibold", children: [
                  "Custom Alias ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-gray-500", children: "(optional)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 text-sm", children: "smartcalculatorhubs.com/s/" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "alias",
                      type: "text",
                      placeholder: "my-awesome-link",
                      value: customAlias,
                      onChange: (e) => setCustomAlias(e.target.value),
                      className: "h-12"
                    }
                  )
                ] })
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-600 dark:text-red-400 font-medium", children: error }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: handleShorten,
                  disabled: loading,
                  size: "lg",
                  className: "w-full h-14 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300",
                  children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                    "Shortening..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
                    "Shorten URL Instantly"
                  ] })
                }
              )
            ] })
          ] }) }),
          shortUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-in fade-in zoom-in-95 duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "backdrop-blur-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-2 border-green-200 dark:border-green-800 shadow-2xl rounded-3xl overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-gradient-to-r from-green-500 to-emerald-500 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-3 text-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6" }),
              "Success! Your Short URL is Ready"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: shortUrl,
                    readOnly: true,
                    className: "font-mono bg-white dark:bg-gray-800 h-12 text-base font-semibold text-indigo-600 dark:text-indigo-400"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: handleCopy,
                    size: "lg",
                    variant: "outline",
                    className: "px-6 hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors",
                    children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-green-600", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5" }),
                      "Copied!"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-5 h-5" }),
                      "Copy"
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: loadAnalytics,
                    variant: "outline",
                    size: "lg",
                    className: "h-12",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-5 h-5 mr-2" }),
                      "View Analytics"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "lg",
                    className: "h-12",
                    onClick: () => {
                      setUrl("");
                      setCustomAlias("");
                      setShortUrl("");
                      setShortCode("");
                      setShowAnalytics(false);
                    },
                    children: "Create Another"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-2xl flex flex-col items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-700 dark:text-gray-300", children: "Scan QR Code" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-white rounded-xl shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QRCodeSVG, { value: shortUrl, size: 180, level: "H" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs", children: "Anyone can scan this QR code to access your shortened link instantly" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { slot: "in-content-1", className: "my-8" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          showAnalytics && analytics && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-in fade-in slide-in-from-right-6 duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-0 shadow-2xl rounded-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-5 h-5 text-indigo-600" }),
              "Link Analytics"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-indigo-600 dark:text-indigo-300 mb-2", children: analytics.totalClicks }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-300 font-medium", children: "Total Clicks" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                  "Recent Activity"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-72 overflow-y-auto", children: analytics.recentClicks.length > 0 ? analytics.recentClicks.map((click, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-xs bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 p-3 rounded-lg",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono font-semibold text-indigo-600 dark:text-indigo-400", children: new Date(click.clickedAt).toLocaleString() }),
                      click.country && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600 dark:text-gray-400 mt-1", children: [
                        "📍 ",
                        click.city,
                        ", ",
                        click.country
                      ] })
                    ]
                  },
                  idx
                )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 text-center py-4", children: "No clicks yet" }) })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-0 shadow-xl rounded-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-indigo-600" }),
              "Key Features"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-green-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "100% Free Forever" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "No hidden fees or limits" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-green-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "Custom Branded Links" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Create memorable aliases" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-green-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "QR Code Generator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Instant mobile sharing" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-green-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "Real-Time Analytics" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Track every click" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-green-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "No Registration" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Start instantly" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { slot: "sidebar-1" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none dark:prose-invert mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-0 shadow-xl rounded-3xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "The Complete Guide to URL Shortening: Everything You Need to Know" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6 text-indigo-600" }),
              "What is a URL Shortener and Why Does It Matter?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "A URL shortener is a powerful web service that transforms long, unwieldy web addresses into compact, manageable links. Think of it as a digital compression tool for your URLs — where a 150-character Amazon product link becomes a sleek 25-character powerhouse. But modern URL shorteners like Smart Shortener go far beyond simple compression." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "In today's digital landscape, where attention spans are measured in milliseconds and mobile users dominate internet traffic, a clean, professional short link can be the difference between a clicked link and a scrolled-past message. When you share content on social media, send marketing emails, or create QR codes for print materials, shortened URLs offer crucial benefits:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Enhanced Trust:" }),
                " Short, clean links look more professional than sprawling URLs with tracking parameters and session IDs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Better User Experience:" }),
                ' Memorable custom aliases (like "smartcalculatorhubs.com/s/summer-sale") are easier to type and remember'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Character Conservation:" }),
                " Critical on platforms like Twitter where every character counts"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tracking Capabilities:" }),
                " Modern shorteners provide detailed analytics on clicks, geography, and referral sources"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Link Management:" }),
                " Update destination URLs without changing the short link shared publicly"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { slot: "in-content-2", className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-indigo-600" }),
              "How URL Shorteners Actually Work: The Technical Deep Dive"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Understanding the mechanics behind URL shortening helps you use these tools more effectively. When you submit a URL to Smart Shortener, here's the sophisticated process that happens in milliseconds:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-2xl mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-3 text-indigo-900 dark:text-indigo-200", children: "Step-by-Step URL Shortening Process:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-3 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1. URL Validation:" }),
                  " The system first validates your input URL to ensure it's properly formatted and accessible. This prevents broken links and security issues."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2. Hash Generation:" }),
                  " A unique identifier (short code) is generated using a cryptographic algorithm. Smart Shortener uses a base-62 encoding system (a-z, A-Z, 0-9) to create short, URL-safe codes."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3. Database Storage:" }),
                  " The original URL and its short code are stored in a high-performance PostgreSQL database with indexed lookups for lightning-fast retrieval."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4. Custom Alias Handling:" }),
                  " If you provide a custom alias, the system checks for availability and reserves it for your link, ensuring brand consistency."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "5. QR Code Generation:" }),
                  " A scannable QR code is automatically created, encoding your short URL for mobile device accessibility."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "6. Analytics Setup:" }),
                  " Tracking mechanisms are initialized to capture click data, referrers, geographic information, and timing metrics."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "When someone clicks your shortened link, the server performs a database lookup in microseconds, retrieves the original URL, logs the click event with metadata (timestamp, IP address, user agent, referrer), and issues an HTTP 302 redirect to send the user to their destination. This entire process happens so fast that users experience no noticeable delay — typically under 50 milliseconds for the complete round trip." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-indigo-600" }),
              "Advanced Features: Custom Aliases, QR Codes, and Analytics"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3", children: "Custom Alias Creation: Building Your Brand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: 'Custom aliases transform generic short links into powerful branding tools. Instead of "smartcalculatorhubs.com/s/aB3xK9", imagine "smartcalculatorhubs.com/s/holiday-deals". The psychological impact is significant — users are 3x more likely to click branded short links compared to random character strings.' }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Best practices for custom aliases include: keeping them under 20 characters, using hyphens instead of underscores, avoiding special characters, incorporating relevant keywords, and maintaining consistency across campaigns. For businesses, custom aliases also provide valuable dark social tracking — when users manually type or paste your link, you can still attribute traffic sources." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3", children: "QR Code Integration: Bridging Physical and Digital" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: "Smart Shortener automatically generates high-resolution QR codes for every shortened URL. These two-dimensional barcodes have become ubiquitous in our post-pandemic world — appearing on restaurant menus, product packaging, event posters, and business cards. The beauty of QR codes is their frictionless nature: point, scan, access." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: 'Our QR codes use error correction level "H" (high), meaning they remain scannable even if up to 30% of the code is damaged or obscured. This makes them perfect for outdoor advertising, printed materials, or any environment where wear and tear is expected. The codes are generated as scalable SVGs, ensuring crystal-clear quality whether displayed on a smartphone screen or a billboard.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3", children: "Real-Time Analytics: Understanding Your Audience" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-3", children: "Every click on your shortened URL generates rich analytics data. Smart Shortener tracks total clicks, click timestamps, geographic locations (country and city), referrer information (where the click came from), and user agent data (device and browser type). This information transforms your short link from a simple redirect into a powerful marketing intelligence tool." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: "Analytics help answer critical business questions: What time of day generates the most engagement? Which social media platforms drive the highest quality traffic? Are mobile or desktop users more likely to convert? Where geographically is your audience concentrated? This data enables continuous optimization of your marketing strategies." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { slot: "in-content-3", className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-indigo-600" }),
              "Real-World Use Cases: Who Benefits from URL Shortening?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-5 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-blue-900 dark:text-blue-200", children: "Social Media Managers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: 'Create branded links for every campaign, track performance across platforms (Instagram, Twitter, LinkedIn, TikTok), and measure ROI with precision. Custom aliases like "/instagram-bio" or "/linkedin-article" make attribution effortless.' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-5 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-purple-900 dark:text-purple-200", children: "Email Marketers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Shorten long product URLs, make emails more readable, track click-through rates per campaign, and A/B test different messaging with separate short links to the same destination." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-5 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-green-900 dark:text-green-200", children: "Event Organizers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Generate QR codes for event registration, ticketing, and venue navigation. Create memorable URLs for promotional materials, posters, and social media announcements that attendees can easily type." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-5 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-orange-900 dark:text-orange-200", children: "Content Creators" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Share affiliate links without overwhelming your audience with tracking parameters. Create clean links for YouTube descriptions, podcast show notes, and blog posts while maintaining full analytics visibility." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-5 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-cyan-900 dark:text-cyan-200", children: "Small Business Owners" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Print QR codes on business cards, menus, receipts, and signage. Create memorable links for promotions (/spring-sale), loyalty programs (/rewards), and contact forms (/feedback) that customers can easily access." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 p-5 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-violet-900 dark:text-violet-200", children: "App Developers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Share deep links to specific app features, track marketing campaigns by channel, and create universal links that work across iOS and Android with a single memorable short URL." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-6 h-6 text-indigo-600" }),
              "Security, Privacy, and Best Practices"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "Security is paramount when dealing with URL redirection. Smart Shortener implements multiple layers of protection to ensure both link creators and end users remain safe:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-5 rounded-r-xl mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg mb-2 text-yellow-900 dark:text-yellow-200", children: "Security Features:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700 dark:text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "URL Validation:" }),
                  " All submitted URLs are validated to prevent JavaScript injection and malformed redirect attacks"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Rate Limiting:" }),
                  " Automated systems detect and block abuse patterns to prevent spam and phishing campaigns"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "HTTPS Encryption:" }),
                  " All short links use secure HTTPS protocol to protect users in transit"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No Malware Hosting:" }),
                  " Links are purely redirects — we never host or proxy content, eliminating malware distribution risks"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Transparent Analytics:" }),
                  " Users can preview analytics without clicking, enabling informed decisions about link safety"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "For optimal results and security when using shortened URLs, follow these expert recommendations:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Always test your short links before sharing to ensure they redirect correctly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use custom aliases for professional contexts (business emails, marketing campaigns, official communications)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Keep a record of your short codes and their destinations for future reference" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Monitor analytics regularly to detect unusual traffic patterns that might indicate sharing outside your intended audience" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Consider the longevity of your links — avoid time-sensitive aliases for evergreen content" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "When sharing on social media, add context around your link so users know what to expect" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use URL shorteners as a complement to, not replacement for, clear call-to-action language" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { slot: "in-content-4", className: "my-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4", children: "The Future of URL Shortening: Emerging Trends and Innovations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed mb-4", children: "The URL shortening landscape continues to evolve with technological advancement. Smart Shortener stays at the forefront by incorporating cutting-edge features and anticipating future needs:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-gray-700 dark:text-gray-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-600 dark:text-indigo-400", children: "AI-Powered Link Optimization:" }),
                " Future iterations will leverage machine learning to suggest optimal custom aliases based on your content, automatically A/B test different short URLs, and predict click-through rates based on historical patterns."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-600 dark:text-indigo-400", children: "Enhanced Privacy Controls:" }),
                " As privacy regulations like GDPR and CCPA evolve, URL shorteners are implementing granular data retention policies, anonymized analytics options, and user-controlled tracking preferences."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-600 dark:text-indigo-400", children: "Integration Ecosystems:" }),
                " Modern shorteners integrate seamlessly with marketing platforms, CRM systems, social media schedulers, and analytics dashboards, creating unified workflows for digital marketers."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-600 dark:text-indigo-400", children: "Dynamic QR Codes:" }),
                " Next-generation QR codes will support dynamic destination updates, allowing you to change where a printed QR code points without reprinting materials."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-600 dark:text-indigo-400", children: "Blockchain-Based Short Links:" }),
                " Decentralized shorteners using blockchain technology offer censorship resistance and permanent link preservation, crucial for archival and historical content."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Ready to Transform Your Links?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-100 mb-6 leading-relaxed", children: "Smart Shortener combines enterprise-grade features with consumer-friendly simplicity. Whether you're sharing a single link or managing thousands of marketing campaigns, our platform scales to meet your needs — all while remaining completely free and requiring zero registration." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Instant Results" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Secure & Private" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Powerful Analytics" })
              ] })
            ] })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { slot: "bottom-banner", className: "mt-12" })
    ] })
  ] });
}
export {
  SmartShortener as default
};
