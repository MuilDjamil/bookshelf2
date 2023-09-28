import { loadStorageData } from "../storage/localStorage.js";
import editBookFormTemplate from "./templates/editBookForm.js";

export default class {
  constructor(params) {
    document.title = `Edit Book`
    this.data = loadStorageData().find(data => data.id == params.id)
  }

  async render() {
    document.getElementById("absolute-content").append(editBookFormTemplate(this.data))
  }
}