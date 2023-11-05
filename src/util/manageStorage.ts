export default function manageStorage(
  operation: string,
  key: string,
  value?: string,
) {
  switch (operation) {
    case 'set':
      window.localStorage.setItem(key, value ?? '')
      break
    case 'get':
      return window.localStorage.getItem(key)
  }
}