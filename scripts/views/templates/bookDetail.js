import { editButtonEventHandler } from "../../events/editBookEvent.js"
import deleteBookEventHandler from "../../events/deleteBookEvent.js"
import { bookReviewStarTemplate, bookReviewStarActiveTemplate } from "./global/bookReviewStar.js"
import { htmlToElement } from "./parser.js"

const bookDetailTemplate = ({ id, imageUrl, title, author, year, description, reviewStar, isComplete }) => {
  const bookDetail = htmlToElement(`
    <article class="book-detail" id="book-detail" data-source="${id}">       
      <nav class="book-detail__navigation">
        <a href="/" class="icon book-detail__back-icon" id="book-detail__back" data-link>
          <iconify-icon icon="ep:back" data-link></iconify-icon>
        </a>
        <p class="icon book-detail__mark-icon" id="book-detail__mark">
          -<iconify-icon icon="ph:dot-fill"></iconify-icon>-
        </p>
      </nav>
      <div class="book-detail__content" id="book-content">
        <div class="book-content__image">
          <img src="${imageUrl}" alt="${imageUrl}">
        </div>
        <div class="book-content__info">
          <h2>${title}</h2>
          <h3>Author: ${author} | ${year}</h3>
          <div class="book-review">
            
          </div>
          <p>${description}</p>
        </div>
        <div class="button-list">
          <div class="button-list__item">
            <button id="delete-button">Delete</button>
          </div>
          <div class="button-list__item">
            <button id="edit-button">Edit</button>
          </div>
        </div>
      </div>
    </article>
  `)

  if (isComplete) {
    bookDetail.querySelector(".book-detail__mark-icon").innerHTML = `
      -<iconify-icon icon="material-symbols:bookmark-sharp"></iconify-icon>-
    `
  }

  for (let i = 1; i <= 5; i++) {
    if (i <= reviewStar) {
      bookDetail.querySelector(".book-review").appendChild(bookReviewStarActiveTemplate())
    } else {
      bookDetail.querySelector(".book-review").appendChild(bookReviewStarTemplate())
    }
  }

  bookDetail.querySelector("#edit-button").addEventListener("click", editButtonEventHandler)
  bookDetail.querySelector("#delete-button").addEventListener("click", deleteBookEventHandler)

  return bookDetail
}

export default bookDetailTemplate