import { htmlToElement } from "../parser.js"

const overlayViewportTemplate = () => {
  const overlayViewport = htmlToElement(`
    <div class="overlay-viewport">
      <div class="overlay-viewport__container">
        <header class="overlay-viewport__header">
          <h2 class="overlay-viewport__h2">Add Book</h2>
          <a href="/" class="icon overlay-viewport__close-button" data-link>
            <iconify-icon icon="ph:x" data-link></iconify-icon>
          </a>
        </header>
        <div class="overlay-viewport__content">
          
        </div>
      </div>
    </div>
  `)

  overlayViewport.querySelector(".overlay-viewport__h2").textContent = document.title

  return overlayViewport
}

export default overlayViewportTemplate