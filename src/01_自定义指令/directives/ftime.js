import dayjs from "dayjs"

export default function directiveFtime(app) {
  app.directive("ftime", {
    mounted(el, bindings) {
      
      let timestamp = el.textContent
      if(timestamp.length === 10) {
        timestamp = 1000 * timestamp
      }

      timestamp = Number(timestamp)
      let value = bindings.value
      if(!value) {
        value = "YYYY-MM-DD"
      }
      el.textContent = dayjs(timestamp).format(value)
    }
  })
}