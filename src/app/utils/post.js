import { API_DOMAIN } from "./constants";

export const post = async (url, body) =>
  fetch(`${API_DOMAIN}${url}`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    }
  }).then(response => response.json());
