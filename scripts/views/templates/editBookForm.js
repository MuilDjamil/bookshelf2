import { htmlToElement } from "./parser.js"
import { bookReviewStarTemplate } from "./global/bookReviewStar.js"
import overlayViewportTemplate from "./global/overlayViewport.js"
import bookFormTemplate from "./global/bookForm.js"

const editBookFormTemplate = (data) => {
  const overlayViewport = overlayViewportTemplate()
  const bookForm = bookFormTemplate(data)

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
      <input type="checkbox" id="mark" name="mark" />
      <label for="mark">Mark as Read</label>
    </div>
  `

  bookForm.querySelector(".book-form__input-description").insertAdjacentElement("beforebegin", bookReviewEdit)
  bookForm.querySelector(".book-form__input-description").insertAdjacentHTML("afterend", markBookEdit)

  return overlayViewport
}

export default editBookFormTemplate