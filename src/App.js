
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='offer'>FREE</div>
        <div className='price'>$0<span>/month</span></div>
        <hr></hr>
        <div>
          <p className='tick'>&#x2714; Single User</p>
          <p className='tick'>&#x2714; 5GB Storage</p>
          <p className='tick'>&#x2714; Unlimited Public Projects</p>
          <p className='tick'>&#x2714; Community Access</p>
          <p className='close'>&#x2717; Unlimited Private Projects</p>
          <p className='close'>&#x2717; Dedicated Phone Support</p>
          <p className='close'>&#x2717; Free Subdomain</p>
          <p className='close'>&#x2717; Monthly Status Reports</p>
        </div>
        <button>BUTTON</button>
      </div>

      <div className='card'>
        <div className='offer'>PLUS</div>
        <div className='price'>$9<span>/month</span></div>
        <hr></hr>
        <div>
          <p className='tick'>&#x2714;<span className='bold'>5 Users</span></p>
          <p className='tick'>&#x2714; 50GB Storage</p>
          <p className='tick'>&#x2714; Unlimited Public Projects</p>
          <p className='tick'>&#x2714; Community Access</p>
          <p className='tick'>&#x2714; Unlimited Private Projects</p>
          <p className='tick'>&#x2717; Dedicated Phone Support</p>
          <p className='tick'>&#x2717; Free Subdomain</p>
          <p className='close'>&#x2717; Monthly Status Reports</p>
        </div>
        <button>BUTTON</button>
      </div>

      <div className='card'>
        <div className='offer'>PRO</div>
        <div className='price'>$49<span>/month</span></div>
        <hr></hr>
        <div>
          <p className='tick'>&#x2714;<span className='bold'> Unlimited Users</span></p>
          <p className='tick'>&#x2714; 150GB Storage</p>
          <p className='tick'>&#x2714; Unlimited Public Projects</p>
          <p className='tick'>&#x2714; Community Access</p>
          <p className='tick'>&#x2714; Unlimited Private Projects</p>
          <p className='tick'>&#x2714; Dedicated Phone Support</p>
          <p className='tick'>&#x2714; <span className='bold'>Unlimited</span> Free Subdomain</p>
          <p className='tick'>&#x2714; Monthly Status Reports</p>
        </div>
        <button>BUTTON</button>
      </div>


    </div >
  );
}

export default App;
