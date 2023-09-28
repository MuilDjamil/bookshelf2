const STORAGE_KEY = 'Bookshelf-Storage';

const checkStorage = () => {
  if (typeof Storage === undefined) {
    alert("Your browser doesn't support localStorage. Please change your browser")
    return false
  }

  return true
}

const loadStorageData = () => {
  let storageData = localStorage.getItem(STORAGE_KEY)
  return JSON.parse(storageData) || []
}

const saveStorageData = (data) => {
  const storageData = JSON.stringify(data)
  localStorage.setItem(STORAGE_KEY, storageData)
}

export { 
  checkStorage,
  loadStorageData, 
  saveStorageData
}