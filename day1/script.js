var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var chunk = function (arr, size, ret) {
    if (ret === void 0) { ret = []; }
    var temp = __spreadArrays(arr);
    var numOfChild = Math.ceil(temp.length / size);
    for (var i = 0; i < numOfChild; i++) {
        ret.push(temp.splice(0, size));
    }
    return ret;
};
var sum = function (arr) { return arr.reduce(function (total, n) { return total + n; }, 0); };
var filter = function (arr) { return arr.filter(function (n) { return n <= 2; }); };
var reduce = function (arr) { return arr.reduce(function (total, n) { return total + n; }, 0); };
var find = function (arr) { return arr.filter(function (ele) { return ele < 4; }); };
