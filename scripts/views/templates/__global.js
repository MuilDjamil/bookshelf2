import { htmlToElement } from "./parser.js"
import { saveBookEventHandler } from "../../events/index.js"

const bookTagTemplate = tag => {
  return `
    <span class="book-tag"> 
      <p>${tag}</p>
    </span>
  `
}

const bookReviewStarTemplate = () => {
  return `
    <span class="icon book-star-review">
      <iconify-icon icon="material-symbols:star"></iconify-icon>
    </span>
  `
}

const bookReviewStarActiveTemplate = () => {
  return `
    <span class="icon book-star-review book-star-review--active">
      <iconify-icon icon="material-symbols:star"></iconify-icon>
    </span>
  `
}

const bookFormTemplate = () => {
  const bookForm = htmlToElement(`
    <form class="book-form">
      <div class="book-form__input">
        <label class="book-form__input-label">
          Title :
        </label>
        <input type="text" class="book-form__input-control" />
      </div>
      <div class="book-form__input">
        <label class="book-form__input-label">
          Image Url :
        </label>
        <input type="text" class="book-form__input-control" placeholder="E.g https://imgv3.com/Fiction-Covers.jpg" />
      </div>
      <div class="book-form__input-group">
        <div class="book-form__input book-form__input-author">
          <label class="book-form__input-label">
            Author :
          </label>
          <input type="text" class="book-form__input-control" />
        </div>
        <div class="book-form__input book-form__input-year">
          <label class="book-form__input-label">
            Year :
          </label>
          <input type="number" class="book-form__input-control" />
        </div>
      </div>
      <div class="book-form__input">
        <label type="text" class="book-form__input-label">
          Tags
        </label>
        <input class="book-form__input-control" placeholder="Separate by space..."></input>
      </div>
      <div class="book-form__input book-form__input-description">
        <label class="book-form__input-label">
          Description :
        </label>
        <textarea class="book-form__input-control"></textarea>
      </div>

      <div class="button-list">
        <div class="button-list__item">
          <button class="button-list__reset" type="reset">Reset</button>
        </div>
        <div class="button-list__item">
          <button class="button-list__submit" type="submit">Submit</button>
        </div>
      </div>
    </form>
  `)

  bookForm.addEventListener("submit", saveBookEventHandler)

  return bookForm
}

const overlayViewportTemplate = () => {
  const overlayViewport = htmlToElement(`
    <div class="overlay-viewport">
      <div class="overlay-viewport__container">
        <header class="overlay-viewport__header">
          <h2 class="overlay-viewport__h2">Add Book</h2>
          <a href="/" class="icon overlay-viewport__close-button" data-link>
            <iconify-icon icon="ph:x" data-link></iconify-icon>
          </a>
        </header>
        <div class="overlay-viewport__content">
          
        </div>
      </div>
    </div>
  `)

  overlayViewport.querySelector(".overlay-viewport__h2").textContent = document.title

  return overlayViewport
}

export {
  bookTagTemplate,
  bookReviewStarTemplate,
  bookReviewStarActiveTemplate,
  bookFormTemplate,
  overlayViewportTemplate
}