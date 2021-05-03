import TaskModel from "./TaskModel";

export default interface SectionModel {
    id: number;
    name: string;
    tasks: TaskModel[];
}