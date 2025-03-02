---
title: "Module: process"
sidebar_label: "process"
custom_edit_url: null
hide_title: true
---

# Module: process

## Functions

### exit

▸ **exit**(`exitCode?`: *number*): *Promise*<void\>

Exits immediately with the given `exitCode`.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`exitCode` | *number* | 0 | The exit code to use.   |

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [process.ts:18](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/process.ts#L18)

___

### relaunch

▸ **relaunch**(): *Promise*<void\>

Exits the current instance of the app then relaunches it.

**Returns:** *Promise*<void\>

A promise indicating the success or failure of the operation.

Defined in: [process.ts:33](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/process.ts#L33)
