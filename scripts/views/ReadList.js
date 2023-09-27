import data from "../storage/data.js"
import MainView from "./MainView.js"
import bookListItemTemplate from "./templates/bookListItem.js"

export default class extends MainView {
  constructor() {
    super()
    this.setTitle("Read List")
    this.booklist = data.filter(book => book.isComplete)
  }

  async render() {
    const bookListElement = document.getElementById("booklist-element")
    bookListElement.textContent = ""

    this.booklist.forEach(book => {
      const bookItem = bookListItemTemplate(book)

      bookListElement.appendChild(bookItem)
    })
  }
}
