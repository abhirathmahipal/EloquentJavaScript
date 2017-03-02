var flatten = function(arrays) {
  return arrays.reduce(function(prev, curr) {
    return prev.concat(curr);
  });
};
console.log(flatten(arrays));

// It doesn't handle multiple listed list items.