import bookDetailTemplate from "./templates/bookDetail.js"

export default class {
  constructor(data, params) {
    document.title = `Book Detail - ${params.id}`
    this.data = data.find(d => d.id == params.id)
  }

  async render() {
    const contentContainer = document.getElementById("absolute-content")

    contentContainer.textContent = ""
    contentContainer.append(bookDetailTemplate(this.data))
  }
}