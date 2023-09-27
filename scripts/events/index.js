import { navigateTo } from "../router.js"

const selectBookEventHandler = () => {
  navigateTo(`/books/${event.currentTarget.attributes["data-source"].value}`)
}

const editBookEventHandler = (event) => {
  navigateTo(`/edit-book`)
}

const saveBookEventHandler = (event) => {
  event.preventDefault()
}

export {
  selectBookEventHandler,
  saveBookEventHandler,
  editBookEventHandler
}