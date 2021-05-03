import React, { ReactElement } from 'react'
import TaskModel from '../../models/TaskModel'


export default function Task({id, what}: TaskModel): ReactElement {
    return (
        <div>
            <button/> {what}
        </div>
    )
}
