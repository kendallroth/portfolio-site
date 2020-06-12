/**
 * Sort a list of objects
 * @param  {Object[]} list - Unsorted objects
 * @param  {string} key    - Sort key
 * @return {Object[]}      - Sorted objects
 */
const sortObjects = (list, key) => list.slice().sort((a, b) => a[key] - b[key]);

/**
 * Sort a list of objects by another list
 * @param  {Object[]} list  - Unsorted objects
 * @param  {Object[]} order - Order to use for sorting
 * @param  {string} key     - Sort key
 * @return {Object[]}       - Sorted objects
 */
const sortOrderedObjects = (list, order, key) =>
  list.slice().sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]));

export { sortObjects, sortOrderedObjects };
