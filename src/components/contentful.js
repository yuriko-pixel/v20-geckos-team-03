export const getData = () => {
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: process.env.REACT_APP_ID,
    accessToken: process.env.REACT_APP_CONTENT,
  });

  let donutData;

  return new Promise((resolve, reject) => {
    client
      .getEntries()
      .then((response) => {
        resolve(
          response.items.map((i) => {
            return {
              id: i.fields.id,
              name: i.fields.title,
              img: i.fields.img.fields.file.url,
              price: i.fields.price,
              qty: 0,
            };
          })
        );
      })
      //TODO setFetched(true);
      .catch((error) => {});
  });
};
