import React from 'react'
import { BaseDropdownProps } from '@/types'

export function BaseDropdown({ title, name, options }: BaseDropdownProps) {
  return (
    <div className="w-full">
      <label className=" capitalize" htmlFor={name}>
        {title}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded border border-gray-200 p-3"
      >
        {options.map((option) => (
          <option className="" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BaseDropdown
