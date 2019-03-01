import React, { useState, useContext } from 'react';

interface TaskContextProvider {
  setTasks: Function,
  setPopup: Function,
  tasks: string[],
  popup: boolean
}

const defaultContextValue: TaskContextProvider = {
  setTasks: () => {},
  setPopup: () => {},
  tasks: [],
  popup: false
}

export const TaskContext = React.createContext<TaskContextProvider>(defaultContextValue)

export function useTaskContext() {
  return useContext<TaskContextProvider>(TaskContext)
}


export default function TaskManger({ children }) {
  let [ tasks, setTasks ] = useState<string[]>([])
  let [popup, setPopup] = useState(false)

  return (
    <TaskContext.Provider value={{setTasks, setPopup, tasks, popup }}>
      {children}
    </TaskContext.Provider>
  )
}