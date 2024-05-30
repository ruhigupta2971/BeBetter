import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logged_in_user");
    toast.success('Logout successful', {
      position: "top-center",
    });
    navigate("/loginsignup");
  };

  // const lsData = localStorage.getItem('donationData');
  const lsData = JSON.parse(localStorage.getItem('donationData'));;
  console.log('DATA-->', lsData);

  return (
    <div className="dashboard-container">
      <div style={{ margin: "10px 30px" }}>

      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout} className="logout-button">Logout</button>

        <table class="table table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">Item Type</th>
              <th scope="col">Address</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{lsData?.fullName}</td>
              <td>{lsData?.email}</td>
              <td>{lsData?.mobileNo}</td>
              <td>{lsData?.itemType}</td>
              <td>{lsData?.address}</td>
              <td>{lsData?.message}</td>

            </tr>

          </tbody>
        </table>

      </div>


      <ToastContainer />
    </div>
  );
};

export default Dashboard;
