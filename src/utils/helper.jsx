export function addTask(taskList,task){
    const newTask = [...taskList, task];
    return newTask;
}

export function deleteTask(taskList, index){
    const delTask = taskList.filter((_, i) => index !== i );
    return delTask;
}

export function updateTask(taskList,index,task){
    const updatedList = [...taskList];
    updatedList[index] = task;
    return updatedList;
}