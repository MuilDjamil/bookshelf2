import bookFormTemplate from "./global/bookForm.js"
import overlayViewportTemplate from "./global/overlayViewport.js"

const addBookFormTemplate = () => {
  const overlayViewport = overlayViewportTemplate()
  const bookForm = bookFormTemplate()

  overlayViewport.querySelector(".overlay-viewport__content").append(bookForm)

  return overlayViewport
}

export default addBookFormTemplate