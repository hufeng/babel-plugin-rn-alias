module.exports = function(babel) {
  var t = babel.types;

  return {
    visitor: {
      ImportDeclaration: function(path, state) {
        var alias = state.opts.alias || {};
        var node = path.node;
        var value = node.source.value;
        var aliasValue = alias[value];

        //如果匹配alias
        if (aliasValue) {
          node.source.value = aliasValue;
        }
      }
    }
  };
};
