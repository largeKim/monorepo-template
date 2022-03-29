export type TaskType = {
    task:{
        id: number;
        title: string;
        state: any;
    },
    onArchiveTask:any,
    onPinTask:any
}
export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }:TaskType) {
    return (
        <div className="list-item">
        <input type="text" value={title} readOnly={true} />
    </div>
);
}
