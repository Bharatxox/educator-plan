// import PropTypes from "prop-types";
import PropTypes from "prop-types";
import { useState } from "react";
const Geeklist = ({ subject, hour, onDelete }) => {
  // const [subVal, setsubVal] = useState(subject);
  const [hourVal, sethourVal] = useState(hour);

  const Increment = () => {
    sethourVal(parseInt(hourVal) + 1);
  };

  const Decrement = () => {
    if (hourVal == 0) return;
    sethourVal(parseInt(hourVal) - 1);
  };
  const DeleteItem = () => {
    onDelete();
  };
  return (
    <ul className="py-2 w-full">
      <li className="flex justify-center gap-4 items-center">
        <span>{subject}</span>
        <span>-</span>
        <span>{hourVal}</span>
        <button className="rounded-full" onClick={Increment}>
          +
        </button>
        <button className="rounded-full" onClick={Decrement}>
          -
        </button>
        <button onClick={DeleteItem}>delete</button>
      </li>
    </ul>
  );
};
Geeklist.propTypes = {
  subject: PropTypes.string,
  hour: PropTypes.number,
  onDelete: PropTypes.func,
};

export default Geeklist;
