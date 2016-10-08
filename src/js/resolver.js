export default (predicate, showError) => {

  try {
    if (eval(predicate)) {
      return true;
    }
  } catch (e) {
    if (showError) {
      console.warn(e);
    }
  }

  return false;

};
