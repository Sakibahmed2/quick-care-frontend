/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useQuery } from "@tanstack/react-query";
import { authApi } from "../services/atuh.api";

export const getProfile = async () => {
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const data = await authApi.profile();
      return data;
    },
  });

  return { data, isLoading };
};

export default getProfile;
