import Sidebar from "../employerdetails";



const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> 
      <div style={{ marginLeft: '20px', padding: '10px', width: '100%' }}>
        
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;