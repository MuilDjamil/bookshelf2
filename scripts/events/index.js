import { navigateTo } from "../router.js"

const selectBookEventHandler = (event) => {
  navigateTo(`/books/${event.currentTarget.attributes["data-source"].value}`)
}

const editBookEventHandler = (event) => {
  navigateTo(`/edit-book/${event.target.closest("[data-source]").attributes["data-source"].value}`)
}

const saveBookEventHandler = (event) => {
  event.preventDefault()
  const currentTarget =  event.currentTarget

  const data = {
    id: +new Date(),
    title: currentTarget.querySelector("#title").value,
    imgUrl: currentTarget.querySelector("#image-url").value,
    author: currentTarget.querySelector("#author").value,
    year: currentTarget.querySelector("#year").value,
    tags: currentTarget.querySelector("#tags").value,
    description: currentTarget.querySelector("#description").value,
    tags: currentTarget.querySelector("#tags").value,
    reviewStar: 0,
  }

  console.log(data)
}

export {
  selectBookEventHandler,
  saveBookEventHandler,
  editBookEventHandler
}