export const saveToLocalStorage = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error)
  }
}

export const getFromLocalStorage = <T>(key: string): T | null => {
  try {
    const storedValue = localStorage.getItem(key)
    return storedValue ? (JSON.parse(storedValue) as T) : null
  } catch (error) {
    console.error('Erro ao obter dados do localStorage:', error)
    return null
  }
}
