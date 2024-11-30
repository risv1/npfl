import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center gap-5'>
      <h2 className='text-black text-3xl font-bold dark:text-white'>Not Found</h2>
      <p className='text-neutral-800 text-xl font-medium dark:text-neutral-300'
      >Could not find requested resource</p>
      <Link href="/" className='text-white font-medium py-2 px-3 rounded-lg bg-black dark:bg-white dark:text-neutral-800'>Go back</Link>
    </main>
  )
}