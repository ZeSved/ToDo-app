export function manageStorage(
  operation: string,
  key: string,
  value?: string
) {
  switch (operation) {
    case 'set':
      localStorage.setItem(key, value ?? '')
      break
    case 'get':
      return localStorage.getItem(key)
  }
}