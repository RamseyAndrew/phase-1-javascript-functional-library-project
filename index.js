// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      callback(collection[key], key, collection);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      result.push(callback(collection[key], key, collection));
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let accumulator = acc;
  let startIndex = 0;
  
  if (Array.isArray(collection)) {
    if (accumulator === undefined) {
      accumulator = collection[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
  } else {
    const keys = Object.keys(collection);
    if (accumulator === undefined) {
      accumulator = collection[keys[0]];
      startIndex = 1;
    }
    for (let i = startIndex; i < keys.length; i++) {
      const key = keys[i];
      accumulator = callback(accumulator, collection[key], collection);
    }
  }
  return accumulator;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(collection[key], key, collection)) {
        return collection[key];
      }
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(collection[key], key, collection)) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

// Array Functions

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

// Object Functions

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

// Bonus Functions

function mySortBy(array, callback) {
  const result = [...array];
  result.sort((a, b) => {
    const aValue = callback(a);
    const bValue = callback(b);
    if (typeof aValue === 'string') {
      return aValue.localeCompare(bValue);
    } else {
      return aValue - bValue;
    }
  });
  return result;
}

function myFlatten(array, shallow, newArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && !shallow) {
      myFlatten(array[i], shallow, newArr);
    } else if (Array.isArray(array[i]) && shallow) {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
