import React, { useState } from 'react'
import { SearchableCheckboxProps } from '@/types'

export function SearchableCheckboxList({
  title,
  list,
  name,
}: SearchableCheckboxProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [checkedItems, setCheckedItems] = useState({})
  const [focusedItem, setFocusedItem] = useState('')

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearchTerm(event.target.value)
  }

  const handleCheck = (event: { target: { value: any; checked: any } }) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.value]: event.target.checked,
    })
  }

  const handleKeyDown = (event: { key: string }) => {
    const filteredList = list.filter((item: string) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const currentIndex = filteredList.indexOf(focusedItem)

    if (event.key === 'ArrowDown') {
      const nextItem = filteredList[currentIndex + 1]
      if (nextItem) {
        setFocusedItem(nextItem)
      }
    } else if (event.key === 'ArrowUp') {
      const prevItem = filteredList[currentIndex - 1]
      if (prevItem) {
        setFocusedItem(prevItem)
      }
    } else if (event.key === 'Enter') {
      if (focusedItem) {
        setCheckedItems({ ...checkedItems, [focusedItem]: true })
        setSearchTerm('')
      }
    }
  }

  const filteredList = list.filter((item: string) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex w-full flex-col">
      <h3 className="mb-2 block text-sm font-bold text-gray-700">{title}</h3>
      <input
        type="text"
        value={searchTerm}
        className="w-full rounded border border-gray-200 px-3 py-1.5"
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      {filteredList.map((item: string) => (
        <label
          key={item}
          className={`mt-1 inline-flex items-center p-1 ${searchTerm !== '' && item === focusedItem ? 'bg-slate-300' : 'hover:bg-slate-300 focus:bg-slate-300'}`}
        >
          <input
            type="checkbox"
            value={item}
            name={name}
            checked={!!checkedItems[item]}
            onChange={handleCheck}
            className="form-checkbox h-5 w-5 text-gray-600 "
          />
          <span className="ml-2 text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  )
}
