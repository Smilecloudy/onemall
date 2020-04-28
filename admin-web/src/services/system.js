import {stringify} from '@/utils/request.qs';
import request from '@/utils/request';

// ========== OAuth2 模块 ==========

export async function oauth2UsernameAuthenticate(params) {
  return request(`/system-api/admins/oauth2/username-authenticate?${stringify(params)}`, {
    method: 'POST',
    body: {},
  });
}

// ========== Authorization 模块 ==========

export async function authorizationMenuResourceTree() {
  return request('/system-api/admins/authorization/menu-resource-tree', {
    method: 'GET',
  });
}

export async function authorizationResourcePermissions(params) {
  return request(`/system-api/admins/authorization/resource-permissions`, {
    method: 'GET',
  });
}

// ========== Resource 模块 ==========

export async function resourceTree(params) {
  return request(`/system-api/admins/resource/tree`, {
    method: 'GET',
  });
}

export async function resourceAdd(params) {
  return request(`/system-api/admins/resource/add?${stringify(params)}`, {
    method: 'POST',
  });
}

export async function resourceUpdate(params) {
  return request(`/system-api/admins/resource/update?${stringify(params)}`, {
    method: 'POST',
  });
}

export async function resourceDelete(params) {
  return request(`/system-api/admins/resource/delete?${stringify(params)}`, {
    method: 'POST',
  });
}