// 默认分页大小
export const pageSize = 20

/**
 * 判断字符串是否合法
 * @param {string} str
 * @returns boolean 如果时null、false、''、'false'、'null'、'NULL'、'undefined'返回false，否则返回true
 */
export function isTruth(str) {
  if (!str || str === 'null' || str === 'NULL' || str === 'undefined' || str === 'false') {
    return false
  }
  return true
}

export function guid() {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export function getLabelByVal(array, val, config = {}) {
  const label = config.label || 'label'
  const value = config.value || 'value'
  const obj = config.obj || false
  for (let i = 0; i < array.length; i++) {
    if (val === array[i][value]) {
      if (obj) {
        return array[i]
      }
      return array[i][label]
    }
  }
  return ''
}

/**
 * JSON 解析
 * @param {string} str
 * @param {*} def 解析失败返回值
 */
export function jsonparse(str, def = {}) {
  try {
    return JSON.parse(str)
  } catch (error) {
    return def
  }
}

/**
 * 数组去重
 * @param {Array} arr
 */
export const arrayUnion = arr => Array.from(new Set(arr))

/**
 * 首字母大写
 * @param {string} str
 */
export function firstUpcase(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * 将传入的字符串或数字转成可以直接使用到设置元素宽度是值
 * @param {string | number} str
 */
export function getCanUseValue(str) {
  if (Number.isNaN(+str)) {
    return str
  }

  return `${str}px`
}

/**
 * 获取地址栏参数
 * @param {string} key 参数名
 */
export function getUrlParam(key) {
  const params = useUrlSearchParams('history')

  let value = params[key]
  if (!value) {
    const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`)
    value = window.location.hash.split('?')[1]?.match(reg)?.[2] || ''
  }
  return value || ''
}
