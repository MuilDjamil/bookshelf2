import { htmlToElement } from "../parser.js"
import saveBookEventHandler from "../../../events/saveBookEvent.js"
import { editBookEventHandler } from "../../../events/editBookEvent.js"

const bookFormTemplate = (book = {}) => {
  const bookForm = htmlToElement(`
    <form class="book-form">
      <div class="book-form__input">
        <label for="title" class="book-form__input-label">
          Title <span class="required-tooltip">*</span> :
        </label>
        <input type="text" id="title" name="title" value="${book.title || ""}" class="book-form__input-control" required>
      </div>
      <div class="book-form__input">
        <label for="image-url" class="book-form__input-label">
          Image Url :
        </label>
        <input type="text" id="image-url" name="image-url" placeholder="E.g https://imgv3.com/Fiction-Covers.jpg" value="${book.imageUrl || ""}" class="book-form__input-control">
      </div>
      <div class="book-form__input-group">
        <div class="book-form__input book-form__input-author">
          <label for="author" class="book-form__input-label">
            Author <span class="required-tooltip">*</span> :
          </label>
          <input type="text" id="author" name="author" value="${book.author || ""}" class="book-form__input-control" required>
        </div>
        <div class="book-form__input book-form__input-year">
          <label for="year" class="book-form__input-label">
            Year <span class="required-tooltip">*</span> :
          </label>
          <input type="number" id="year" name="year" value="${book.year || ""}" class="book-form__input-control" required>
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
          Description <span class="required-tooltip">*</span> :
        </label>
        <textarea id="description" name="description" class="book-form__input-control" required>${book.description || ""}</textarea>
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

  if (book.id) {
    bookForm.id = book.id
    bookForm.addEventListener("submit", editBookEventHandler)
  } else {
    bookForm.addEventListener("submit", saveBookEventHandler)
  }

  return bookForm
}

export default bookFormTemplate