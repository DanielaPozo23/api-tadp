function getFilePath(file) {
  const getFilePath = file.path;
  const fileSplit = getFilePath.split("\\");
  return `${fileSplit[0]}/${fileSplit[1]}`;
}

module.exports = {
  getFilePath,
};
