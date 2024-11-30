'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <main className='w-screen h-screen flex flex-col gap-3 justify-center items-center'>
      <h2 className='text-black dark:text-white'>{error.message}</h2>
      <button
        onClick={
          () => reset()
        }
        className='text-neutral-800 dark:text-neutral-300'
      >
        Try again
      </button>
    </main>
  )
}