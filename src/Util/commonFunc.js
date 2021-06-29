/**
 * Check to see if the object is empty
 * @param obj
 * @returns {*|boolean}
 */

export function isEmptyObject(obj) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object
}