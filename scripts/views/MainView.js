import navigationListTemplate from "./templates/navigationList.js"

export default class {
  constructor() {
    this.renderNavigation()
  }
  
  setTitle(title) {
    document.title = title
  }

  async renderNavigation() {
    const absoluteContentContainer = document.getElementById("absolute-content")
    const navigationElement = document.getElementById("navigation-element")
   
    absoluteContentContainer.textContent = ""

    navigationElement.textContent = ""
    navigationElement.append(navigationListTemplate())
  }
}