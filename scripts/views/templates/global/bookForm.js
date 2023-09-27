import { htmlToElement } from "../parser.js"
import { saveBookEventHandler } from "../../../events/index.js"

const bookFormTemplate = (book = {}) => {
  const bookForm = htmlToElement(`
    <form class="book-form">
      <div class="book-form__input">
        <label for="title" class="book-form__input-label">
          Title :
        </label>
        <input type="text" id="title" name="title" value="${book.id || ""}" class="book-form__input-control" />
      </div>
      <div class="book-form__input">
        <label for="image-url" class="book-form__input-label">
          Image Url :
        </label>
        <input type="text" id="image-url" name="image-url" placeholder="E.g https://imgv3.com/Fiction-Covers.jpg" value="${book.imageUrl || ""}" class="book-form__input-control" />
      </div>
      <div class="book-form__input-group">
        <div class="book-form__input book-form__input-author">
          <label for="author" class="book-form__input-label">
            Author :
          </label>
          <input type="text" id="author" name="author" value="${book.author || ""}" class="book-form__input-control" />
        </div>
        <div class="book-form__input book-form__input-year">
          <label for="year" class="book-form__input-label">
            Year :
          </label>
          <input type="number" id="year" name="year" value="${book.year || ""}" class="book-form__input-control" />
        </div>
      </div>
      <div class="book-form__input">
        <label type="text" for="tags" class="book-form__input-label">
          Tags
        </label>
        <input placeholder="Separate by comma" id="tags" name="tags" value="${book.tags || ""}" class="book-form__input-control"></input>
      </div>
      <div class="book-form__input book-form__input-description">
        <label for="description" class="book-form__input-label">
          Description :
        </label>
        <textarea id="description" name="description" class="book-form__input-control">${book.description || ""}</textarea>
      </div>

      <div class="button-list">
        <div class="button-list__item">
          <button class="button-list__reset" type="reset">Reset</button>
        </div>
        <div class="button-list__item">
          <button class="button-list__submit" type="submit">Submit</button>
        </div>
      </div>
    </form>
  `)

  bookForm.addEventListener("submit", saveBookEventHandler)

  return bookForm
}

export default bookFormTemplate