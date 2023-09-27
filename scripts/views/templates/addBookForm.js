import { overlayViewportTemplate, bookFormTemplate } from "./__global.js"

const addBookFormTemplate = () => {
  const overlayViewport = overlayViewportTemplate()
  const bookForm = bookFormTemplate()

  overlayViewport.querySelector(".overlay-viewport__content").append(bookForm)

  return overlayViewport
}

export default addBookFormTemplate