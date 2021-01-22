import { toJson, fromJson } from "utils/helpers";

function LocalStorage() {
  const LS = localStorage;

  const setLS = (key, data) => LS.setItem(key, toJson(data));
  const getLS = (key) => fromJson(LS.getItem(key));
  const removeLS = (key) => LS.removeItem(key);
  const clearLS = () => LS.clear();

  return { setLS, getLS, removeLS, clearLS };
}

export default LocalStorage;
