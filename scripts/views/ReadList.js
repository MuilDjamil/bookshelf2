// import data from "../storage/data.js"
import { checkStorage, loadStorageData } from "../storage/localStorage.js"
import MainView from "./MainView.js"
import bookListItemTemplate from "./templates/bookListItem.js"

export default class extends MainView {
  constructor() {
    super()
    this.setTitle("Read List")

    if (checkStorage()) {
      this.booklist = loadStorageData().filter(book => book.isComplete)
      this.filteredBooks = this.booklist
    }

    document.getElementById("search-input").addEventListener("keyup", (event) => {
      this.filteredBooks = this.booklist.filter((book) => {
        return (book.title).toLowerCase().includes(event.target.value.toLowerCase())
      })
      
      this.render()
    })
  }

  async render() {
    const bookListElement = document.getElementById("booklist-element")
    bookListElement.textContent = ""

    this.filteredBooks.forEach(book => {
      const bookItem = bookListItemTemplate(book)

      bookListElement.appendChild(bookItem)
    })

    if (this.filteredBooks.length < 1) {
      bookListElement.innerHTML = `<p class="book-empty">Books Not Found !</p>`
    }
  }
}
