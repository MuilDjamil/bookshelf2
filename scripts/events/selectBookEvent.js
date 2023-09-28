import { navigateTo } from "../router.js"

const selectBookEventHandler = (event) => {
  navigateTo(`/books/${event.currentTarget.attributes["data-source"].value}`)
}

export default selectBookEventHandler