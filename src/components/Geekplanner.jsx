import { useState, useEffect } from "react";
// import TaskList from "./TaskList";
import Geeklist from "./Geeklist";
import { v4 as uniqueId } from "uuid";
const Geekplanner = () => {
  const storedGeekList = localStorage.getItem("mytask");
  const initialGeekList = storedGeekList ? JSON.parse(storedGeekList) : [];

  const [myTask, setmyTask] = useState(initialGeekList);
  const [sub, setsub] = useState("");
  const [hour, sethour] = useState("");

  useEffect(() => {
    localStorage.setItem("mytask", JSON.stringify(myTask));
  }, [myTask]);

  useEffect(() => {
    const storedGeekList = localStorage.getItem("todoList");
    if (storedGeekList) {
      setmyTask(JSON.parse(storedGeekList));
    }
  }, []);

  const addHour = () => {
    console.log("hello");
    if (!sub || !hour) return;
    const obj = {
      id: uniqueId(),
      Topic: sub,
      Hour: hour,
    };
    setmyTask([...myTask, obj]);
    console.log(myTask);
    setsub("");
    sethour("");
  };

  const handleDelete = (index) => {
    const updatedTasks = [...myTask];
    updatedTasks.splice(index, 1);
    setmyTask(updatedTasks);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center font-Poppins">
      <div className="flex justify-center items-center p-1  rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-1/2 p-10 rounded-lg flex flex-col gap-5 bg-gray-800 back">
          <h1 className="font-bold capitalize">Geekster education plan</h1>
          <div className="flex justify-between">
            <input
              className="rounded-lg p-3"
              type="text"
              placeholder="Subject"
              onChange={(e) => setsub(e.target.value)}
              value={sub}
            />
            <input
              className="rounded-lg p-3"
              type="number"
              placeholder="Hours"
              onChange={(e) => sethour(e.target.value)}
              value={hour}
            />
            <button onClick={addHour}>Add</button>
          </div>
          <section className="flex flex-col w-full items-center">
            {myTask.map((e, index) => (
              <Geeklist
                key={e.Topic}
                subject={e.Topic}
                hour={e.Hour}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Geekplanner;
