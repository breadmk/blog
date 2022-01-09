import { API_BASE_URL } from "./app-config";

const Call = (api, method, request) => {
  let options = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options).then((res) =>
    res
      .json()
      .then((json) => {
        if (!res.ok) {
          console.log("A", Promise.reject(json));
          return Promise.reject(json);
        }
        return json;
      })
      .catch((error) => {
        console.log(error, "sssssss");
      })
  );
};

export { Call };
