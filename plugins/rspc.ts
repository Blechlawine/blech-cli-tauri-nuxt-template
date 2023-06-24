import { Procedures } from "../generated/bindings";
import { createClient } from "@rspc/client";
import { TauriTransport } from "@rspc/tauri";

export default defineNuxtPlugin(() => {
    const client = createClient<Procedures>({
        transport: new TauriTransport(),
    });
    return {
        name: "rspc",
        provide: {
            rspc: client,
        },
    };
});
