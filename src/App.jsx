import { useState } from "react";
import "./App.css";
import { addTask, deleteTask, updateTask } from "./utils/helper";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editText, setEditText] = useState("");
  const [isEdit, setIsEdit] = useState(null);
  return (
    <div className="mt-10 p-10 w-full lg:w-1/2 mx-auto shadow-2xl h-[100%] max-lg:shadow-none">
      <h1 className="font-bold text-4xl text-center mb-5 text-amber-900">To Do List</h1>
      <input
        type="text"
        placeholder="What do you want to add..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border-gray-400 border-1 outline-none px-4 py-2 w-full max-w-[calc(100%-65px)] capitalize"
        autoFocus
      />

      {/* Add Button */}
      <button
        className="bg-amber-900 text-white px-4 py-2 border-1 border-amber-900 cursor-pointer"
        onClick={() => {
          if (task.length === 0) return alert("You can't add empty task!");
          setTaskList(addTask(taskList, task));
          setTask("");
          setIsEdit("");
        }}
      >
        Add
      </button>

      {/* Mapping the TaskList */}
      <div>
        {taskList.length === 0 ? (
          <h2 className="font-bold text-2xl mt-4 text-center">
            Empty task list!
          </h2>
        ) : (
          taskList.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-wrap items-center mt-5 justify-between w-full"
              >
                {isEdit !== index ? (
                  <>
                    <div className="w-1/2 flex flex-wrap justify-start">
                      <p className="capitalize">
                        {index + 1}. {val}
                      </p>
                    </div>

                    <div className="w-1/2 flex justify-end">
                      {/* Edit Button */}
                      <button
                        className="bg-yellow-600 text-white px-4 py-2 border-1 border-yellow-600 cursor-pointer mr-3"
                        onClick={() => {
                          setIsEdit(index);
                          setEditText(val);
                        }}
                      >
                        Edit
                      </button>

                      {/* Delete Button */}
                      <button
                        className="bg-amber-900 text-white px-4 py-2 border-1 border-amber-900 cursor-pointer"
                        onClick={() => {
                          setTaskList(deleteTask(taskList, index));
                          setIsEdit("");
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Edit Fields */}
                    <div className="w-full flex flex-wrap">
                      <div className="w-1/2">
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="border-gray-400 border-1 outline-none px-4 py-2 w-full max-w-[calc(100%-65px)] capitalize"
                          autoFocus
                        />
                      </div>

                      <div className="w-1/2 flex justify-end">
                        {/* Update Button */}
                        <button
                          className="bg-yellow-600 text-white px-4 py-2 border-1 border-yellow-600 cursor-pointer mr-3"
                          onClick={() => {
                            setTaskList(updateTask(taskList, index, editText));
                            setIsEdit("");
                          }}
                        >
                          Update
                        </button>

                        {/* Delete Button */}
                        <button
                          className="bg-amber-900 text-white px-4 py-2 border-1 border-amber-900 cursor-pointer"
                          onClick={() => {
                            setTaskList(deleteTask(taskList, index));
                            setIsEdit("");
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
