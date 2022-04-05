import React from "react";

const ColdStoreLog = () => {
  return (
    <div className="coldstore">
      <div className="coldstoreheader">
        <h3>ColdStore stockpicking</h3>
      </div>
      <div className="coldstorebody">
        <form action="">
          <table className="coolroom">
            <tr>
              <th>Items</th>
              <th>Not Open</th>
              <th>Today's packed</th>
              <th>Total</th>
              <th>Last-Week</th>
            </tr>
            <tr>
              <td>Dipak</td>
              <td>
                <input type="number" placeholder="in kg" required />
              </td>
              <td>
                <input type="number" placeholder="in kg" required />
              </td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Dipak</td>
              <td>
                {" "}
                <input type="number" placeholder="in kg" required />
              </td>
              <td>
                {" "}
                <input type="number" placeholder="in kg" required />
              </td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Dipak</td>
              <td>
                {" "}
                <input type="number" placeholder="in kg" required />
              </td>
              <td>
                {" "}
                <input type="number" placeholder="in kg" required />
              </td>
              <td>-</td>
              <td>-</td>
            </tr>
          </table>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ColdStoreLog;
