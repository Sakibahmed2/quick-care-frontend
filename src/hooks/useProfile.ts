"use client";

import { queryKeys } from "@/api/queryKeys";
import { authApi } from "@/api/services/atuh.api";
import authStore from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";

const useProfile = () => {
  const token = authStore((state) => state.token);
  const isAuthInitialized = authStore((state) => state.isAuthInitialized);

  const profileQuery = useQuery({
    queryKey: queryKeys.auth.profile,
    queryFn: authApi.profile,
    enabled: Boolean(token),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    profile: token ? profileQuery.data : undefined,
    isAuthInitialized,
    isLoadingProfile: Boolean(token) && profileQuery.isLoading,
    isFetchingProfile: Boolean(token) && profileQuery.isFetching,
    refetchProfile: profileQuery.refetch,
  };
};

export default useProfile;
