const truncate = (str, n) => {
  return str && str.length > n ? str.substring(0, n - 1) + '...' : str;
};

export default truncate;
