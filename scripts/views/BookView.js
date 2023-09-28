import { loadStorageData } from "../storage/localStorage.js"
import bookDetailTemplate from "./templates/bookDetail.js"

export default class {
  constructor(params) {
    document.title = `Book Detail - ${params.id}`
    this.data = loadStorageData().find(data => data.id == params.id)
  }

  async render() {
    const contentContainer = document.getElementById("absolute-content")

    contentContainer.textContent = ""
    contentContainer.append(bookDetailTemplate(this.data))
  }
}