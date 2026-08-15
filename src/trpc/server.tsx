"server-only";

import { createTRPCContext } from "@/trpc/init";
import makeQueryClient from "@/trpc/query-client";
import { appRouter } from "@/trpc/routers/_app";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { cache } from "react";

export const getQueryClient = cache(makeQueryClient);
export const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
});

export const caller = appRouter.createCaller(createTRPCContext);
