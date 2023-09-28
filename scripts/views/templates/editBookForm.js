import { htmlToElement } from "./parser.js"
import { bookReviewStarActiveTemplate, bookReviewStarTemplate } from "./global/bookReviewStar.js"
import overlayViewportTemplate from "./global/overlayViewport.js"
import bookFormTemplate from "./global/bookForm.js"

const updateStarReview = (target, value) => {
  target.innerHTML = "<label>Rate :</label>"
  for (let i = 1; i <= 5; i++) {
    let starReview;
    if (i <= value) {
      starReview = bookReviewStarActiveTemplate()
    } else {
      starReview = bookReviewStarTemplate()
    }

    starReview.addEventListener("click", () => {
      target.setAttribute("data-source", i)
      updateStarReview(target, i)
    })

    target.appendChild(starReview)
  }
}

const editBookFormTemplate = (data) => {
  const overlayViewport = overlayViewportTemplate()
  const bookForm = bookFormTemplate(data)

  overlayViewport.querySelector(".overlay-viewport__content").append(bookForm)

  const bookReviewEdit = htmlToElement(`
    <div class="book-review book-form__input" id="review-star" data-source="${data.reviewStar}">
      
    </div>
  `)

  updateStarReview(bookReviewEdit, data.reviewStar)

  const markBookEdit = `
    <div class="book-review book-form__input">
      <input type="checkbox" id="mark" name="mark" ${data.isComplete ? "checked" : ""} />
      <label for="mark">Mark as Read</label>
    </div>
  `

  bookForm.querySelector(".book-form__input-description").insertAdjacentElement("beforebegin", bookReviewEdit)
  bookForm.querySelector(".book-form__input-description").insertAdjacentHTML("afterend", markBookEdit)

  return overlayViewport
}

export default editBookFormTemplate