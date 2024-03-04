export const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const normalizeDataObject = (obj) => {
  return {
    ...obj,
    category: obj.categories,
    users: obj.users_permissions_users,
  };
};

export const normalizeData = (data) => {
  return data.map((item) => {
    return normalizeDataObject(item);
  });
};

export const getNormalizedGamesDataByCategory = async (url, category) => {
  const data = await getData(`${url}?categories.name=${category}`);
  // Применяем функцию нормализации для работы с массивом
  return normalizeData(data);
};

export const getNormalizedGameDataById = async (url, id) => {
  const data = await getData(`${url}/${id}`);
  // Применяем функцию нормализации для работы с объектом
  return normalizeDataObject(data);
};
