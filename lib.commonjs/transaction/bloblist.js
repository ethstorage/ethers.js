"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blobOtherListify = exports.blobListify = void 0;
const index_js_1 = require("../utils/index.js");
/**
 *  Returns a [[AccessList]] from any ethers-supported access-list structure.
 */
function blobListify(value) {
    if (Array.isArray(value)) {
        (0, index_js_1.assertArgument)(value.length <= 2, "invalid blob list", `value`, value);
        value.map((v, index) => {
            (0, index_js_1.assertArgument)(typeof (v) === "string" && (0, index_js_1.isHexString)(v), "invalid blob", `value[${index}]`, v);
            (0, index_js_1.assertArgument)(v.length === 262146, "invalid blob length", `value[${index}]`, v);
        });
        return value;
    }
    (0, index_js_1.assertArgument)(value != null && typeof (value) === "string" && (0, index_js_1.isHexString)(value), "invalid blob", "value", value);
    (0, index_js_1.assertArgument)(value != null && value.length === 262146, "invalid blob length", `value`, value);
    return [value];
}
exports.blobListify = blobListify;
function blobOtherListify(value) {
    if (Array.isArray(value)) {
        (0, index_js_1.assertArgument)(value.length <= 2, "invalid blob args list", `value`, value);
        value.map((v, index) => {
            (0, index_js_1.assertArgument)(typeof (v) === "string" && (0, index_js_1.isHexString)(v), "invalid blob args", `value[${index}]`, v);
        });
        return value;
    }
    (0, index_js_1.assertArgument)(false, "invalid blob args", "value", value);
}
exports.blobOtherListify = blobOtherListify;
//# sourceMappingURL=bloblist.js.map