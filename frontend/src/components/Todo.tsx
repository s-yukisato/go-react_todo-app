import React from 'react';
import {Todo} from "../entities/Todo";
import "./TodoItem.scss";

type Props = {
    todo: Todo
}

export const TodoItem: React.FC<Props> = ({todo}) => {
    const {title, description, isConpleted} = todo;
    return (
        <article className="todo-item">
            <section className="todo-item-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
            <input type="checkbox" defaultChecked={isConpleted} />
        </article>
    )
}