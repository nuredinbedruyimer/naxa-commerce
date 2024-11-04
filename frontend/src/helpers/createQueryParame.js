export const createSearchParams = (filter) => {
  let queryParams = [];

  for (const [key, value] of Object.entries(filter)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramsValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramsValue)}`);
    }
  }
  return queryParams.join("&");
};
