import React, { ReactElement } from 'react'
import SectionModel from '../../models/SectionModel'
import Task from '../Task/Task'


export default function Section({name, tasks}: SectionModel): ReactElement {
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                {tasks.map(task => <Task key={task.id} id={task.id} what={task.what}/>)}
            </ul>
        </div>
    )
}
