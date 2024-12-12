function reactive(obj) {
  const dep = new Set() // 用于收集依赖的集合

  Object.keys(obj).forEach(key => {
    let val = obj[key]
    Object.defineProperty(obj, key, {
      get() {
        dep.add(effect) // 将当前正在执行的 effect 添加到依赖中
        return val
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal
          dep.forEach(effect => effect()) // 触发依赖中的所有函数
        }
      }
    })
  })

  return obj
}

let effect = null

function watchEffect(fn) {
  effect = fn
  fn()
}

// 使用示例
const data = reactive({ count: 0 })

watchEffect(() => {
  console.log(data.count)
})

data.count++ 