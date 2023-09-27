import { htmlToElement } from "./parser.js"

const navigationListTemplate = () => {
  const nav = htmlToElement(`
    <ul class="navigation__list">
      <li class="navigation__list-item">
        <a href="/" class="navigation__link" data-link>
          <div class="icon">
            <iconify-icon icon="clarity:home-line" data-link></iconify-icon>
          </div>
          Home
        </a>
      </li>
      <li class="navigation__list-item">
        <a href="/add-book" class="navigation__link" data-link>
          <div class="icon">
            <iconify-icon icon="gala:add" data-link></iconify-icon>
          </div>
          Add
        </a>
      </li>
      <li class="navigation__list-item">
        <a href="/read-list" class="navigation__link" data-link>
          <div class="icon">
            <iconify-icon icon="ant-design:book-outlined" data-link></iconify-icon>
          </div>
          Readed
        </a>
      </li>
    </ul>
  `)

  const navLink = nav.querySelectorAll(".navigation__link")

  for (let link of navLink) {
    if (link.href === location.href) {
      link.querySelector(".icon").innerHTML += `<span class="dot"></span>`
    }
  }

  return nav
}

export default navigationListTemplate