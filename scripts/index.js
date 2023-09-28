import { router, navigateTo } from "./router.js"

const initApp = () => {
  router()

  const searchInputElement = document.getElementById("search-input")
  const searchInputPlaceholder = document.getElementById("search-placeholder")
  
  document.body.addEventListener("click", event => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault()
  
      navigateTo(event.target.closest("[href]"))
    }
  })

  searchInputElement.addEventListener("focus", () => {
    searchInputPlaceholder.classList.add("hide")
  })

  searchInputElement.addEventListener("focusout", () => {
    searchInputPlaceholder.classList.remove("hide")
  })
}

window.addEventListener("DOMContentLoaded", initApp)