import React, {useState} from 'react';

export const AddToDo = (props) => {
    const [Task, setTask] = useState("");
    const [Desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!Task || !Desc) {
            alert("Either of the value is empty");
        }
        props.addToDo(Task, Desc);
    }

    return (
        <div className="my-3">
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="Task" className="form-label"> Task</label>
                    <input type="text" value={Task} onChange={(e) => setTask(e.target.value)} className="form-control" id="Task" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="Desc" className="form-label">Task Description</label>
                    <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="Desc" />
                </div>
                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        </div>
    );
}