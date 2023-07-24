import { Procedures } from "../generated/bindings";
import { Client } from "@rspc/client";

export function useRspcClient() {
    const injected = useNuxtApp().$rspc;
    if (!injected) {
        throw new Error("rspc not injected");
    }
    return injected;
}
