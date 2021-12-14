import React from 'react';
import {Todo} from '../entities/Todo';
import { TodoItem } from './Todo';
import './TodoList.scss';

type Props = {
    todos: Todo[];
}

export const TodoList: React.FC<Props> = ({todos}) => {
    return (
        <ul className="todo-list">
            {
                todos.map((todo, i) => (
                    <li key={i}>
                        <TodoItem todo={todo} />
                    </li>
                ))
            }
        </ul>
    )
}