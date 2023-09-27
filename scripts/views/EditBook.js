import data from "../storage/data.js";
import editBookFormTemplate from "./templates/editBookForm.js";

export default class {
  constructor(params) {
    document.title = `Edit Book`
    this.data = data.find(d => d.id == params.id)
  }

  async render() {
    document.getElementById("absolute-content").append(editBookFormTemplate(this.data))
  }
}