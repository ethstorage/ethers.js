import { assertArgument, isHexString } from "../utils/index.js";
import { BlobList, BlobListish, BlobOtherList, BlobOtherListish } from "./index.js";


/**
 *  Returns a [[AccessList]] from any ethers-supported access-list structure.
 */
export function blobListify(value: BlobListish): BlobList {
    if (Array.isArray(value)) {
        assertArgument(value.length <= 2, "invalid blob list", `value`, value);
        value.map((v, index) => {
            assertArgument(typeof (v) === "string" && isHexString(v), "invalid blob", `value[${ index }]`, v);
            assertArgument(v.length === 262146, "invalid blob length", `value[${ index }]`, v);
        });
        return value;
    }

    assertArgument(value != null && typeof (value) === "string" && isHexString(value), "invalid blob", "value", value);
    assertArgument(value != null && value.length === 262146, "invalid blob length", `value`, value);
    return [value];
}

export function blobOtherListify(value: BlobOtherListish): BlobOtherList {
    if (Array.isArray(value)) {
        assertArgument(value.length <= 2, "invalid blob args list", `value`, value);
        value.map((v, index) => {
            assertArgument(typeof (v) === "string" && isHexString(v), "invalid blob args", `value[${ index }]`, v);
        });
        return value;
    }
    assertArgument(false, "invalid blob args", "value", value);
}

