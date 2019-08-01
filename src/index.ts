import { isNumber, isString, isObject, isEmpty, trim } from 'lodash-es';

export function isBlob(obj: any): boolean {
  return isObject(obj) && Object.toString.call(obj) === '[object Blob]';
}

export function isURLSearchParams(val: Record<string, any>): boolean {
  return (
    typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams
  );
}

export function isNumeric(obj: any): boolean {
  return ((isNumber(obj) || isString(obj)) && !Number.isNaN((obj as any) - parseFloat(obj as any))
  );
}

export function isBlank(str: string): boolean {
  // @ts-ignore
  return isEmpty(str) || isEmpty(trim((str).toString()));
}

/**
 * @see axios/lib/helper/isAbsoluteURL
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
export function isAbsoluteURL(url: string): boolean {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  // eslint-disable-next-line
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
