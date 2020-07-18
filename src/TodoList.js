//use "rfc" withc 'react ES7 react/redux/GraphQl/React-Native snippets' plugin
import React from 'react'
import Todo from './Todo'

export default function TodoList ({ todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id}   toggleTodo = {toggleTodo} todo = {todo} />
        })
    )
}


