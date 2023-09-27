import { htmlToElement } from "./parser.js"
import { selectBookEventHandler } from "../../events/index.js"
import {
  bookTagTemplate,
  bookReviewStarTemplate,
  bookReviewStarActiveTemplate
} from "./__global.js"

const bookListItemTemplate = ({ id, imgCover, title, author, year, tags, reviewStar, isComplete }) => {
  const bookItem = htmlToElement(`
    <article class="booklist__item" data-source="${id}">
      <div class="booklist__item-image">
        <img src="${imgCover}" alt="${imgCover}">
      </div>
      <div class="booklist__item-info">
        <h2>${title}</h2>
        <h3>Author: ${author} | ${year}</h3>
        <div class="book-tags">
         
        </div>
        <div class="book-review">
        
        </div>
      </div>
    </article>
  `)

  bookItem.addEventListener("click", selectBookEventHandler)

  tags.forEach(tag => {
    bookItem.querySelector(".book-tags").innerHTML += bookTagTemplate(tag)
  })

  for (let i = 1; i <= 5; i++) {
    if (i <= reviewStar) {
      bookItem.querySelector(".book-review").innerHTML += bookReviewStarActiveTemplate()
    } else {
      bookItem.querySelector(".book-review").innerHTML += bookReviewStarTemplate()
    }
  }

  if (isComplete) bookItem.innerHTML += bookListItemMarkTemplate()

  return bookItem
}

const bookListItemMarkTemplate = () => {
  return `
    <span class="icon booklist__item-mark">
      <iconify-icon icon="material-symbols:bookmark-sharp"></iconify-icon>
    </span>
  `
}

export default bookListItemTemplate