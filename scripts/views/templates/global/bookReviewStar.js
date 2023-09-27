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

export {
  bookReviewStarTemplate,
  bookReviewStarActiveTemplate
}