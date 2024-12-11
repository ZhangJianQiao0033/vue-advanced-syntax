export default function directiveUint(app) {
  app.directive("unit", {
    mounted(el, bindings) {
      const defaultText = el.textContent
      console.log(bindings.value);
      let uint = bindings.value
      if(!uint) {
        uint = "¥"
      }
      el.textContent = defaultText + uint
    }
  })
}