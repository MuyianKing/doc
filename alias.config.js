import { resolve } from 'node:path'

const alias_path = [
  ['@', './src'],
  ['@api', './src/api'],
  ['@comp', './src/components'],
  ['@utils', './utils'],
  ['@def', './src/default'],
  ['@server', './src/server'],
  ['@model', './src/model'],
  ['@views', './src/views'],
  ['@hooks', './src/hooks'],
  ['@img', './src/assets/img'],
  ['@data', './src/assets/data'],
  ['@pinia', './src/pinia/modules'],
  ['@style', './src/assets/style'],
  ['@list-page', './src/components/hl/list-page'],
  ['@layout', './src/layout'],
]

export default function useAlias() {
  // 处理成vite许亚的格式
  const alias_map = {}
  alias_path.forEach((item) => {
    alias_map[item[0]] = resolve(__dirname, item[1].replace('./', ''))
  })

  return {
    alias_map,
    alias_path,
  }
}
