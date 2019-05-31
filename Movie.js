module.exports = function(keys) {
  if (keys === undefined) {
    throw "keys are required";
  }

  this.keys = keys;

  this.find = movie => {
    return movie;
  };
};
