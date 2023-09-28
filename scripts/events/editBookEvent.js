import { navigateTo } from "../router.js"
import { checkStorage, loadStorageData, saveStorageData } from "../storage/localStorage.js"

const editButtonEventHandler = (event) => {
  navigateTo(`/edit-book/${event.target.closest("[data-source]").attributes["data-source"].value}`)
}

const editBookEventHandler = (event) => {
  event.preventDefault()
  const currentTarget =  event.currentTarget

  const dataForUpdate = {
    title: currentTarget.querySelector("#title").value,
    imageUrl: currentTarget.querySelector("#image-url").value || "/assets/book-placeholder.webp",
    author: currentTarget.querySelector("#author").value,
    year: currentTarget.querySelector("#year").value,
    tags: currentTarget.querySelector("#tags").value,
    description: currentTarget.querySelector("#description").value,
    tags: (currentTarget.querySelector("#tags").value).split(","),
    isComplete: currentTarget.querySelector("#mark").checked,
    reviewStar: currentTarget.querySelector("#review-star").attributes["data-source"].value,
  }

  if (checkStorage()) {
    const booklistData = loadStorageData()
    const dataForUpdateIndex = booklistData.findIndex(data => data.id == currentTarget.id)

    booklistData[dataForUpdateIndex] = {
      ...booklistData[dataForUpdateIndex],
      ...dataForUpdate
    }

    saveStorageData(booklistData)

    navigateTo("/")
  }
}

export { editButtonEventHandler, editBookEventHandler }