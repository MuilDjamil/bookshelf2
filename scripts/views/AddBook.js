import addBookFormTemplate from "./templates/addBookForm.js"

export default class {
  constructor() {
    document.title = `Add Book`
  }

  async render() {
    document.getElementById("absolute-content").append(addBookFormTemplate())
  }
}