function areThereDuplicates() {
    let obj = {};
    for (var i = 0; i < arguments.length; i++) {
        obj[arguments[i]] = ++obj[arguments[i]] || 1;
        if(obj[arguments[i]] > 1) return true;
    }
  return false;
}
