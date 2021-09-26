import useSWR from "swr";
import { urls } from "../constants";
import fetcher from "../utils/fetcher";

export const useRequest = (shouldFetch: boolean, path: string | null) => {
  if (!path && !shouldFetch) {
    throw new Error("path is required");
  }

  const url = `${urls.basePath}/${path}`;
  let { data, error } = useSWR(shouldFetch ? url : null, fetcher);

  return { data, error };
};
