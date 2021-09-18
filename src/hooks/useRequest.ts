import useSWR from "swr";
import { urls } from "../constants";
import fetcher from "../utils/fetcher";

export const useRequest = (path: string) => {
  if (!path) {
    throw new Error("path is required");
  }

  const url = `${urls.basePath}/${path}`;
  let { data, error } = useSWR(url, fetcher);

  return { data, error };
};
