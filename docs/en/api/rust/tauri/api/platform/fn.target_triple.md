---
title: "fn.target_triple"
---

# Function [tauri](/docs/api/rust/tauri/../../index.html)::​[api](/docs/api/rust/tauri/../index.html)::​[platform](/docs/api/rust/tauri/index.html)::​[target_triple](/docs/api/rust/tauri/)

```rs
pub fn target_triple() -> Result<String, Error>
```

Try to determine the current target triple.

Returns a target triple (e.g. `x86_64-unknown-linux-gnu` or `i686-pc-windows-msvc`) or an `Error::Config` if the current config cannot be determined or is not some combination of the following values: `linux, mac, windows` – `i686, x86, armv7` – `gnu, musl, msvc`

-   Errors:

    -   Unexpected system config
