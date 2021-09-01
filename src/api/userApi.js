import apiClient from "./apiClient";
const endpoint = "/users";

export const fetchUser = username => {
  return apiClient.get(`${endpoint}/${username}`);
};
