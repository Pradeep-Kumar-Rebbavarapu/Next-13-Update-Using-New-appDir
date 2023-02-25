import React, { Suspense } from 'react'
import axios from 'axios'
import { notFound } from 'next/navigation'
// import NotFound from './not-found';
export const dynamicParams = true;

export default async function TodoPage({ params: { todoId } }) {
    const todo = await fetchTodo(todoId)
    // if (!todo.id) return <NotFound />
    return (
        <Suspense fallback={<p>loading Each todo...</p>}>
        <div className=''>
            <div className='bg-yellow-300 p-4 m-4'>
                <div className=''>
                    {todo.id} : {todo.title}
                </div>
                <div>Completed : {todo.completed ? "Yes" : "No"}</div>
                <div>By User : {todo.userId}</div>
            </div>
        </div>
        </Suspense>
    )
}
const fetchTodo = async (todoId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 } });
    const todo = await res.json();
    return todo;
}

// no-cache means Server Side Rendering 
//force cache means Static Side Rendering
export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, { next: { revalidate: 60 } });
    const todos = await res.json();
    const trimmedTodos = todos.splice(0, 10);
    return trimmedTodos.map((todo) => ({
        todoId: todo.id.toString()
    }))
}