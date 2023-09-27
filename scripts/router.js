import data from "./storage/data.js"
import Home from "./views/Home.js"
import ReadList from "./views/ReadList.js"
import BookView from "./views/BookView.js"
import AddBook from "./views/AddBook.js"
import EditBook from "./views/EditBook.js"

const pathToRegexp = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const getParams = match => {
  const values = match.result.slice(1)
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1])

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]]
  }))
}

const navigateTo = url => {
  history.pushState(null, null, url)  
  router()
} 

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/read-list", view: ReadList },
    { path: "/books/:id", view: BookView },
    { path: "/add-book", view: AddBook },
    { path: "/edit-book", view: EditBook },
  ]
  
  const routeMatches = routes.map(route => {
    return {
      route,
      result: location.pathname.match(pathToRegexp(route.path))
    }
  })

  let match = routeMatches.find(route => route.result !== null)

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    }
  }

  const view = new match.route.view(data, getParams(match))
  view.render()
}

export { router, navigateTo }