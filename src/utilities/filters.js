import { format } from "date-fns";

/**
 * Custom date filter
 * @param {string} value      - Date value
 * @param {string} dateFormat - Date format
 */
const dateFilter = (value, dateFormat = "yyyy-MMM-dd") =>
  format(new Date(value), dateFormat);

export { dateFilter };
