import { resolve } from 'node:path'

const alias_path = [
  ['@app', './components/utils/app'],
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
