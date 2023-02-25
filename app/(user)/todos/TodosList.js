import Link from 'next/link'
import React from 'react'

export default async function TodosList() {
    const todos = await fetchTodos()
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div className='my-2' key={todo.id}>
                        <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
                    </div>
                )

            })}
        </div>
    )
}

const fetchTodos = async () => {
    
    const res =  await fetch('https://jsonplaceholder.typicode.com/todos')
    
    return res.json()
    
}