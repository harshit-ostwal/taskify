import React from 'react'
import { Input } from './ui/input'

function SearchTask() {
  return (
    <form className="w-full">
      <Input placeholder="Title / Description" className="md:max-w-xl w-full" />
    </form>
  )
}

export default SearchTask