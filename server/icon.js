import { BASE_URL } from '@app'
import http from '@http'

export async function getIcons(params) {
  const result = await http.get(`${BASE_URL}/json/query`, params)

  return {
    count: result.count,
    data: result.icons,
  }
}
