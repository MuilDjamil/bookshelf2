import { 
  overlayViewportTemplate,
  bookFormTemplate,
  bookReviewStarTemplate
} from "./__global.js"
import { htmlToElement } from "./parser.js"

const editBookFormTemplate = () => {
  const overlayViewport = overlayViewportTemplate()
  const bookForm = bookFormTemplate()

  overlayViewport.querySelector(".overlay-viewport__content").append(bookForm)

  const bookReviewEdit = htmlToElement(`
    <div class="book-review book-form__input">
      <label>Rate :</label>
    </div>
  `)

  for (let i = 1; i <= 5; i++) {
    bookReviewEdit.innerHTML += bookReviewStarTemplate()
  }

  const markBookEdit = `
    <div class="book-review book-form__input">
      <input type="checkbox" />
      <label>Mark as Read</label>
    </div>
  `

  bookForm.querySelector(".book-form__input-description").insertAdjacentElement("beforebegin", bookReviewEdit)
  bookForm.querySelector(".book-form__input-description").insertAdjacentHTML("afterend", markBookEdit)

  return overlayViewport
}

export default editBookFormTemplate