const reqData = async () => {
  try {
    const file = await fetch("'../helpers/mockData.json'");
    const data = await file.json();
    return data;
  } catch (err) {
    return err;
  }
};

export default reqData;
