import { format } from "date-fns";

/**
 * Capitalize the first letter
 * @param  {string} value - String value
 * @return {string}       - Capitalized string
 */
const capitalizeFilter = (value) => {
  if (!value) return "";

  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

/**
 * Custom date filter
 * @param  {string} value      - Date value
 * @param  {string} dateFormat - Date format
 * @return {string}            - Formatted date
 */
const dateFilter = (value, dateFormat = "yyyy-MMM-dd") =>
  format(new Date(value), dateFormat);

/**
 * Lowercase filter
 * @param  {string} value - String value
 * @return {string}       - Lowercase string
 */
const lowercaseFilter = (value) => {
  if (!value) return "";

  return value.toString().toLowerCase();
};

export { capitalizeFilter, dateFilter, lowercaseFilter };
