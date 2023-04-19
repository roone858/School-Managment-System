const Table = () => {
  return (
    <>
      <div className="project-2 bg-w bor-rad p-20 mt-30">
        <h2 className="m-0">Project</h2>
        <div className="resbonsive mt-20">
          <table className="">
            <thead className="bg-eee">
              <tr>
                <th className="p-20">name</th>
                <th className="p-20">finish date</th>
                <th className="p-20">client</th>
                <th className="p-20">price</th>
                <th className="p-20">team</th>
                <th className="p-20">status</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="p-20">ministry wikipedia</td>
                <td className="p-20">10 may 2023</td>
                <td className="p-20">ministry</td>
                <td className="p-20">$5300</td>

                <td className="p-20">
                  <span className="p-5 bor-rad c-w bg-or-2">pending</span>
                </td>
              </tr>
              <tr>
                <td className="p-20">elzero shop</td>
                <td className="p-20">10 oct 2023</td>
                <td className="p-20">elzero company</td>
                <td className="p-20">$1500</td>

                <td className="p-20">
                  <span className="p-5 bor-rad c-w bg-blue-3">progress</span>
                </td>
              </tr>
              <tr>
                <td className="p-20">bouba app</td>
                <td className="p-20">10 seb 2023</td>
                <td className="p-20">bouba</td>
                <td className="p-20">$800</td>
              </tr>
              <tr>
                <td className="p-20">mahmoud website</td>
                <td className="p-20">22 may 2023</td>
                <td className="p-20">mahmoud</td>
                <td className="p-20">$600</td>
                <td className="p-re p-20">
                  <img
                    src="images/team-01.png"
                    alt=""
                    className="p-ab"
                    width="20px"
                  />
                  <img
                    src="images/team-02.png"
                    alt=""
                    className="p-ab"
                    width="20px"
                  />
                </td>
                <td className="p-20">
                  <span className="p-5 bor-rad c-w bg-gr-2">completed</span>
                </td>
              </tr>
              <tr>
                <td className="p-20">sayed website</td>
                <td className="p-20">24 may 2023</td>
                <td className="p-20">sayed</td>
                <td className="p-20">$300</td>

                <td className="p-20">
                  <span className="p-5 bor-rad c-w bg-red-2">rejected</span>
                </td>
              </tr>
              <tr>
                <td className="p-20">arena application</td>
                <td className="p-20">1 may 2023</td>
                <td className="p-20">arena compeny</td>
                <td className="p-20">$2600</td>

                <td className="p-20">
                  <span className="p-5 bor-rad c-w bg-gr-2">completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
