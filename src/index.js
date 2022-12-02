/**
 * Принимает объект, возвращает массив названий свойств. Нельзя пользоваться
 * встроенными статическими методами объекта, используйте цикл
 * @param {Object} object
 * @returns {string[]}
 */
export const keys = (object) => {
  let keys = [];
  for(let key in object) {
    keys.push(key);
  }
  return  keys;
};

/**
 * Принимает объект, возвращает массив значений объекта. Также без использования
 * встроенных методов, юзаем цикл
 * @param {Object} object
 * @returns {any[]}
 */
export const values = (object) => {
  let values = [];
  for(let key in object) {
    values.push(object[key]);
  }
  return  values;
};

/**
 * Принимаем объект, возвращаем энтри. Все также без методов, используем цикл
 * @param {Object} object
 * @returns {[string, any][]}
 */
export const entries = (object) => {
  let entries = [];
  for(let key in object) {
    entries.push([key, object[key]]);
  }
  return entries;
};

/**
 * Тут наоборот, мы должны сделать из энтри объект обратно) Можете погуглить
 * оригинальный метод)
 * @param {[string, any][]} entries
 * @returns {Object}
 */
export const fromEntries = (entries) => {
  let fromEntries = {};
  for (let item of entries) {
    fromEntries[item[0]] = item[1];
  }
  //fromEntries = Object.fromEntries(entries);
  return fromEntries;
};
