import React, { Suspense } from 'react'
import TodosList from './TodosList'
import Loading from './[todoId]/loading'

export default function RootLayout({ children }) {
  return (
    <div className='grid grid-cols-[100px_auto]'>
      <Suspense fallback={<p>Loading...</p>}>
        <div className='text-center my-4 flex justify-center'>
          <TodosList />
        </div>
      </Suspense>


      <div className='w-full'>{children}</div>
    </div>
  )
}
