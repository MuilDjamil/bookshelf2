import { navigateTo } from "../router.js"
import { checkStorage, loadStorageData, saveStorageData } from "../storage/localStorage.js"

const saveBookEventHandler = (event) => {
  event.preventDefault()
  const currentTarget =  event.currentTarget

  const newData = {
    id: +new Date(),
    title: currentTarget.querySelector("#title").value,
    imageUrl: currentTarget.querySelector("#image-url").value || "/assets/book-placeholder.webp",
    author: currentTarget.querySelector("#author").value,
    year: currentTarget.querySelector("#year").value,
    tags: currentTarget.querySelector("#tags").value,
    description: currentTarget.querySelector("#description").value,
    tags: (currentTarget.querySelector("#tags").value).split(","),
    reviewStar: 0,
  }

  if (checkStorage()) {
    const booklistData = loadStorageData()
    booklistData.push(newData)
    saveStorageData(booklistData)

    navigateTo("/")
  }
}

export default saveBookEventHandler