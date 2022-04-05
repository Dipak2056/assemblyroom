import React from "react";

const Clocking = () => {
  return (
    <div className="clockingpage">
      <div className="clockingheader">
        <h3>Please fill the form to clock-in👨🏾</h3>
      </div>
      <div className="clockingbody">
        <form className="form">
          Name:
          <input type="text" placeholder="Name" required /> <br />
          Phone:{" "}
          <input
            type="tel"
            placeholder="mobile-number"
            pattern="[0-9]{10}"
            required
          />{" "}
          <br />
          start: <input type="time" /> <br />
          end: <input type="time" required /> <br />
          <button type="submit">Submit</button>
        </form>
        <div className="in-shift">
          <table>
            <tr>
              <th>Name</th>
              <th>Start-Time</th>
              <th>End-Time</th>
              <th>End-shift</th>
              <th>Total Hours</th>
            </tr>
            <tr>
              <td>Dipak</td>
              <td>4:55</td>
              <td>-</td>
              <td>
                <button className="shiftEndbtn">End</button>
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>Dipak rama reddy</td>
              <td>4:55</td>
              <td>-</td>
              <td>
                <button className="shiftEndbtn">End</button>
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>Dipak</td>
              <td>4:55</td>
              <td>-</td>
              <td>
                <button className="shiftEndbtn">End</button>
              </td>
              <td>-</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clocking;
