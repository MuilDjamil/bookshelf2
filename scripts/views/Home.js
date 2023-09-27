import MainView from "./MainView.js";
import bookListItemTemplate from "./templates/bookListItem.js"

export default class extends MainView {
  constructor(booklist) {
    super()
    this.setTitle("Home")
    this.booklist = booklist
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