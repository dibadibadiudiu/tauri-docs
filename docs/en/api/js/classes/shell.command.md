---
title: "Class: Command"
sidebar_label: "Command"
custom_edit_url: null
hide_title: true
---

# Class: Command

[shell](../modules/shell.md).Command

The entry point for spawning child processes.
It emits the `close` and `error` events.

**`example`** 
```typescript
const command = new Command('node')
command.on('close', data => {
  console.log(`command finished with code ${data.code} and signal ${data.signal}`)
})
command.on('error', error => console.error(`command error: "${error}"`))
command.stdout.on('data', line => console.log(`command stdout: "${line}"`))
command.stderr.on('data', line => console.log(`command stderr: "${line}"`))

const child = await command.spawn()
console.log('pid:', child.pid)
```

## Hierarchy

* *EventEmitter*<*close* \| *error*\>

  ↳ **Command**

## Constructors

### constructor

\+ **new Command**(`program`: *string*, `args?`: *string* \| *string*[], `options?`: [*SpawnOptions*](../interfaces/shell.spawnoptions.md)): [*Command*](shell.command.md)

Creates a new `Command` instance.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`program` | *string* | - | The program to execute.   |
`args` | *string* \| *string*[] | [] | Program arguments.   |
`options?` | [*SpawnOptions*](../interfaces/shell.spawnoptions.md) | - | Spawn options.    |

**Returns:** [*Command*](shell.command.md)

Overrides: EventEmitter&lt;&#x27;close&#x27; | &#x27;error&#x27;&gt;.constructor

Defined in: [shell.ts:189](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L189)

## Properties

### stderr

• `Readonly` **stderr**: *EventEmitter*<*data*\>

Event emitter for the `stderr`. Emits the `data` event.

Defined in: [shell.ts:189](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L189)

___

### stdout

• `Readonly` **stdout**: *EventEmitter*<*data*\>

Event emitter for the `stdout`. Emits the `data` event.

Defined in: [shell.ts:187](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L187)

## Methods

### execute

▸ **execute**(): *Promise*<[*ChildProcess*](../interfaces/shell.childprocess.md)\>

Executes the command as a child process, waiting for it to finish and collecting all of its output.

**`example`** 
```typescript
const output = await new Command('echo', 'message').execute()
assert(output.code === 0)
assert(output.signal === null)
assert(output.stdout === 'message')
assert(output.stderr === '')
```

**Returns:** *Promise*<[*ChildProcess*](../interfaces/shell.childprocess.md)\>

A promise resolving to the child process output.

Defined in: [shell.ts:274](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L274)

___

### on

▸ **on**(`event`: *close* \| *error*, `handler`: (`arg`: *any*) => *void*): *EventEmitter*<*close* \| *error*\>

Listen to an event from the child process.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | *close* \| *error* | The event name.   |
`handler` | (`arg`: *any*) => *void* | The event handler.    |

**Returns:** *EventEmitter*<*close* \| *error*\>

The `this` instance for chained calls.

Inherited from: EventEmitter.on

Defined in: [shell.ts:107](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L107)

___

### spawn

▸ **spawn**(): *Promise*<[*Child*](shell.child.md)\>

Executes the command as a child process, returning a handle to it.

**Returns:** *Promise*<[*Child*](shell.child.md)\>

A promise resolving to the child process handle.

Defined in: [shell.ts:237](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L237)

___

### sidecar

▸ `Static`**sidecar**(`program`: *string*, `args?`: *string* \| *string*[], `options?`: [*SpawnOptions*](../interfaces/shell.spawnoptions.md)): [*Command*](shell.command.md)

Creates a command to execute the given sidecar program.

**`example`** 
```typescript
const command = Command.sidecar('my-sidecar')
const output = await command.execute()
```

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`program` | *string* | - | The program to execute.   |
`args` | *string* \| *string*[] | [] | Program arguments.   |
`options?` | [*SpawnOptions*](../interfaces/shell.spawnoptions.md) | - | Spawn options.   |

**Returns:** [*Command*](shell.command.md)

Defined in: [shell.ts:222](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/shell.ts#L222)
