/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "@tanstack/react-query";

interface Props {
  key: string;
  api: (params: any) => Promise<any>;
  page: number;
  limit: number;
  search?: string;
  sorting: any[];
}

export function useDataTable({
  key,
  api,
  page,
  limit,
  search,
  sorting,
}: Props) {
  const sort = sorting.length
    ? `${sorting[0].id}:${sorting[0].desc ? "desc" : "asc"}`
    : undefined;

  return useQuery({
    queryKey: [key, page, limit, search, sort],

    queryFn: () =>
      api({
        page,
        limit,
        search,
        sort,
      }),
    placeholderData: (previous) => previous,
    staleTime: 1000 * 60,
  });
}
