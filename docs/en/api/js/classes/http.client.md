---
title: "Class: Client"
sidebar_label: "Client"
custom_edit_url: null
hide_title: true
---

# Class: Client

[http](../modules/http.md).Client

## Properties

### id

• **id**: *number*

Defined in: [http.ts:122](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L122)

## Methods

### delete

▸ **delete**<T\>(`url`: *string*, `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a DELETE request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | The request URL.   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | The request options.   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:239](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L239)

___

### drop

▸ **drop**(): *Promise*<void\>

Drops the client instance.

**Returns:** *Promise*<void\>

Defined in: [http.ts:133](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L133)

___

### get

▸ **get**<T\>(`url`: *string*, `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a GET request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | The request URL.   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | The request options.   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:167](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L167)

___

### patch

▸ **patch**<T\>(`url`: *string*, `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a PATCH request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | The request URL.   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | The request options.   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:224](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L224)

___

### post

▸ **post**<T\>(`url`: *string*, `body?`: [*Body*](http.body.md), `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a POST request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | The request URL.   |
`body?` | [*Body*](http.body.md) | The body of the request.   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | The request options.   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:183](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L183)

___

### put

▸ **put**<T\>(`url`: *string*, `body?`: [*Body*](http.body.md), `options?`: [*RequestOptions*](../modules/http.md#requestoptions)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes a PUT request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | The request URL.   |
`body?` | [*Body*](http.body.md) | The body of the request.   |
`options?` | [*RequestOptions*](../modules/http.md#requestoptions) | Request options.   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:204](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L204)

___

### request

▸ **request**<T\>(`options`: [*HttpOptions*](../interfaces/http.httpoptions.md)): *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

Makes an HTTP request.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*HttpOptions*](../interfaces/http.httpoptions.md) | The request options.   |

**Returns:** *Promise*<[*Response*](../interfaces/http.response.md)<T\>\>

A promise resolving to the response.

Defined in: [http.ts:149](https://github.com/tauri-apps/tauri/blob/a68b4ee8/tooling/api/src/http.ts#L149)
