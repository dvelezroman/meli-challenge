import React, { useEffect } from 'react'
import { useQuery } from '../utils'

const FullItemDescription = () => {
  const queryParams = useQuery()

  useEffect(() => {
    const id = queryParams.get("id")
    console.log({ id })
  }, [queryParams])

  return (
    <div>Full Item Description</div>
  )
}

export default FullItemDescription
