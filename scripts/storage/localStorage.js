const STORAGE_KEY = 'Bookshelf-Storage';

let memory = []

const checkStorage = () => {
  if (typeof Storage === undefined) {
    alert("Your browser doesn't support localStorage. Please change your browser")
    return false
  }

  return true
}

const loadStorageData = () => {
  let storageData = localStorage.getItem(STORAGE_KEY)
  storageData = JSON.parse(storageData)

  if (storageData) {
    memory = storageData
  }
}

const saveStorageData = () => {
  const storageData = JSON.stringify(memory)
  localStorage.setItem(STORAGE_KEY, storageData)
}

export { 
  checkStorage,
  loadStorageData, 
  saveStorageData
}