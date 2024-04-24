import { useState } from "react";

export const TaskItem = ( { task } ) => {
    
    const [isDone, setIsDone] = useState(false);

    const changeFormat = (event) => {
        setIsDone(!isDone);
    };

    return(
        <>
            <p id={task} className={isDone ? 'itemDone': 'itemUndone'} onClick={ event => changeFormat(event) }>{task}</p>
        </>
    )

}
