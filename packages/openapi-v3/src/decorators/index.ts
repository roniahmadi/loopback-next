// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/openapi-v3
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export * from './api.decorator';
export * from './deprecated.decorator';
export * from './operation.decorator';
export * from './parameter.decorator';
export * from './request-body.decorator';

import {api} from './api.decorator';
import {deprecated} from './deprecated.decorator';
import {del, get, operation, patch, post, put} from './operation.decorator';
import {param} from './parameter.decorator';
import {requestBody} from './request-body.decorator';
import {tags} from './tags.decorator';

export const oas = {
  api,
  operation,

  // methods
  get,
  post,
  del,
  patch,
  put,

  //param
  param,

  // request body
  requestBody,

  // oas convenience decorators
  deprecated,
  tags,
};
