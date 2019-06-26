import { API_DOMAIN } from "./constants";

export const deleteContact = async (id, url) => {
  return fetch(`${API_DOMAIN}${url}${id}`, {
    method: "delete"
  }).then(response => response.json());
};
