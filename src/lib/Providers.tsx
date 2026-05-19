'use client';

import { initializeAuthSession } from "@/api/ApiBase";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect } from "react";
import { queryClient } from "./queryClient";


const Providers = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    void initializeAuthSession();
  }, []);



  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>;
};

export default Providers;
