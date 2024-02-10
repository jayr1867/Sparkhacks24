function AllAcceptedReqs() {
  return (
    <>
      <div className="active_requests_header">Active requests</div>
      <div className="active_requests_table">
        <table className="data_active">
          <tr className="table_header">
            <th className="id">ID</th>
            <th className="request_details"> Request Details</th>
            <th className="status">Status</th>
            <th className="expiry">Expiry</th>
          </tr>
          <tr className="table_data">
            <td>
              <a onClick={() => setDetailsPopup(true)}> ID</a>
            </td>
            <td>adbjhavdsjhsdvkhsfbvgksfbvlfdn</td>
            <td>Active</td>
            <td>Expiry</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default AllAcceptedReqs;
