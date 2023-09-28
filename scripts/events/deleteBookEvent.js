import { navigateTo } from "../router.js"
import { checkStorage, loadStorageData, saveStorageData } from "../storage/localStorage.js"

const deleteBookEventHandler = (event) => {
  event.preventDefault()

  const id = event.target.closest("[data-source]").attributes["data-source"].value

  if (checkStorage()) {
    const booklistData = loadStorageData()
    const dataIndex = booklistData.findIndex(data => data.id == id)

    booklistData.splice(dataIndex, 1)

    saveStorageData(booklistData)

    navigateTo("/")
  }
}

export default deleteBookEventHandler