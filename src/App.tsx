import './App.css'

import ItemList, { Item } from './components/ItemList'
import { useEffect, useState } from 'react'

import ItemInput from './components/ItemInput'

const DEFAULT_VALUE: Item[] = []

function App() {
  const [items, setItems] = useState<Item[] | undefined>(undefined)

  useEffect(() => {
    const itemDataLoad = JSON.parse(
      localStorage.getItem('itemDat') ?? JSON.stringify(DEFAULT_VALUE)
    )
    setItems(itemDataLoad)
  }, [])

  useEffect(() => {
    if (items) {
      localStorage.setItem('itemDat', JSON.stringify(items ?? DEFAULT_VALUE))
    }
  }, [items])

  return (
    <div className="wrapper">
      <main className="main">
        {items ? (
          <>
            <ItemInput items={items} setItems={setItems} />
            <div className="divider" />
            <ItemList items={items} setItems={setItems} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <div className="blurSheet" />
      <div className="colorSheet" />
    </div>
  )
}

export default App
