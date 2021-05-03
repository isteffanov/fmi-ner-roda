import React, { ReactElement } from 'react'
import ISection from '../../models/SectionModel'
import Section from '../Section/Section'

interface Props {
    name: string;
    sections: ISection[];
}

export default function Project({name, sections}: Props): ReactElement {
    return (
        <div>
            <h1>{name}</h1>
            <div>
                {sections.map( section => 
                    <Section 
                        key={section.id} 
                        id={section.id}
                        name={section.name} 
                        tasks={section.tasks}
                    />
                )}
            </div>
        </div>
    )
}
