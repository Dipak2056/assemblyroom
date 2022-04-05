import React, { useState } from "react";
const initialState = {
  employeeName: "",
  employeeNumber: "",
  startTime: "",
  endTime: "",
};

const Clocking = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [employeeList, setEmployeeList] = useState([]);
  const handleOnClick = () => {
    setEndTime(hour.getTime());
    console.log(endTime);
  };
  const hour = new Date();
  const handleOnSubmit = (e) => {
    const employeeDetail = { employeeName, employeeNumber, startTime };
    e.preventDefault();
    setEmployeeList([...employeeList, employeeDetail]);
    setEmployeeName("");
    setEmployeeNumber("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="clockingpage">
      <div className="clockingheader">
        <h3>📂Please fill the form to clock-in👨🏾</h3>
        <button onClick={handleOnClick}>Click</button>
      </div>
      <div className="clockingbody">
        <form className="form" onSubmit={handleOnSubmit}>
          Name:
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setEmployeeName(e.target.value)}
            value={employeeName}
            required
          />{" "}
          <br />
          Phone:{" "}
          <input
            type="tel"
            placeholder="mobile-number"
            pattern="[0-9]{1}"
            required
            onChange={(e) => setEmployeeNumber(e.target.value)}
            value={employeeNumber}
          />{" "}
          <br />
          Start:{" "}
          <input
            type="time"
            required
            onChange={(e) => setStartTime(e.target.value)}
            value={startTime}
          />{" "}
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <div className="in-shift">
          <table>
            <thead>
              <th>Name</th>
              <th>Start-Time</th>
              <th>End-Time</th>
              <th>Total Hours</th>
              <th>End-shift</th>
            </thead>
            {employeeList.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.employeeName}</td>
                  <td> {item.startTime} </td>
                  <td>{endTime}</td>
                  <td>{item.startTime - item.endTime}</td>
                  <td>
                    <button className="shiftEndbtn" onClick={handleOnClick}>
                      End
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clocking;
