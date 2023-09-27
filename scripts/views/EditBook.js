import editBookFormTemplate from "./templates/editBookForm.js";

export default class {
  constructor() {
    document.title = `Edit Book`
  }

  async render() {
    document.getElementById("absolute-content").append(editBookFormTemplate())
  }
}