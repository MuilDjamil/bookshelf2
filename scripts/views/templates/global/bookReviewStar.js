import { htmlToElement } from "../parser.js"

const bookReviewStarTemplate = () => {
  return htmlToElement(`
    <span class="icon book-star-review">
      <iconify-icon icon="material-symbols:star"></iconify-icon>
    </span>
  `)
}

const bookReviewStarActiveTemplate = () => {
  return htmlToElement(`
    <span class="icon book-star-review book-star-review--active">
      <iconify-icon icon="material-symbols:star"></iconify-icon>
    </span>
  `)
}

export {
  bookReviewStarTemplate,
  bookReviewStarActiveTemplate
}