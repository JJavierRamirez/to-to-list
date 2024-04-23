import { useState } from "react";

export const TaskItem = ( { task } ) => {
    
    const [isDone, setIsDone] = useState(false);

    const changeFormat = (event) => {
        setIsDone(!isDone);
    };

    if(!isDone){
        return(
            <>
                <p id={task} onClick={ event => changeFormat(event) }>{task}</p>
            </>
        )
    }
    return(
        <>
            <p className="line"  id={task} onClick={ event => changeFormat(event) }>{task}</p>
        </>
    )

}
