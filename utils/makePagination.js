const paginate = (processedPage = 1, processedLimit = 12) => {
  const parsedPage = parseInt(processedPage);
  const parsedLimit = parseInt(processedLimit);
  const page = parsedPage >= 1 ? parsedPage : 1;
  const limit = parsedLimit > 1 && parsedLimit < 12 ? parsedLimit : 12;
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

module.exports = paginate;
