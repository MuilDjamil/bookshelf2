import { router, navigateTo } from "./router.js"

const initApp = () => {
  router()
  
  document.body.addEventListener("click", event => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault()
  
      navigateTo(event.target.closest("[href]"))
    }
  })
}

window.addEventListener("DOMContentLoaded", initApp)