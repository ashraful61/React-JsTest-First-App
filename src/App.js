import { useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState("")

  return (
    <div className="App">
      <p>my test react app</p>
      
      {/* <input type='text' placeholder='user name' name="user_name" /> <br /> */}
      
      <h1>Snapshot Testing</h1>
      <p>{data}</p>

      {/* <input type='text' placeholder='full name' name="full_name" onChange={ e => setData(e.target.value)}/> */}
      <button onClick={ e => setData('Updated data test')}>Update data</button>

      <br/>
      <br/>
      <br/>
      <br/>

      <img title='test image title' src="https://api.deepai.org/job-view-file/e67717d4-f9c0-4b32-b1f7-c94e38cf1328/outputs/output.jpg" alt="" />
   
    </div>
  );
}

export default App;
