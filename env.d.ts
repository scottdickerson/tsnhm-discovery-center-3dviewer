/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly INTERACTIVE:
        | 'tracks_and_traces'
        | 'body_fossils'
        | 'putting_it_together'
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
