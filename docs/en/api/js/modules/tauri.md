---
title: "Module: tauri"
sidebar_label: "tauri"
custom_edit_url: null
hide_title: true
---

# Module: tauri

Invoke your custom commands.

## Table of contents

### Interfaces

- [InvokeArgs](../interfaces/tauri.invokeargs.md)

## Functions

### invoke

▸ **invoke**<T\>(`cmd`: *string*, `args?`: [*InvokeArgs*](../interfaces/tauri.invokeargs.md)): *Promise*<T\>

Sends a message to the backend.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`cmd` | *string* | - | The command name.   |
`args` | [*InvokeArgs*](../interfaces/tauri.invokeargs.md) | {} | The optional arguments to pass to the command.   |

**Returns:** *Promise*<T\>

A promise resolving or rejecting to the backend response.

Defined in: [tauri.ts:68](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/tauri.ts#L68)

___

### transformCallback

▸ **transformCallback**(`callback?`: (`response`: *any*) => *void*, `once?`: *boolean*): *string*

Transforms a callback function to a string identifier that can be passed to the backend.
The backend uses the identifier to `eval()` the callback.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`callback?` | (`response`: *any*) => *void* | - |
`once` | *boolean* | false |

**Returns:** *string*

A unique identifier associated with the callback function.

Defined in: [tauri.ts:35](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/tauri.ts#L35)
