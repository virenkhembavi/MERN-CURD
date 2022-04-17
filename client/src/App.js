import './App.css';
import Home from './Component/Home'
import { getData } from './Api/api'
import { useEffect, useState } from 'react';
import ShowData from './Component/ShowData';

function App() {
  const [userData, setUserData] = useState([])
  const Data = async () => {
    const response = await getData()
    // console.log(response)
    setUserData(response.data)
  }
  useEffect(() => {
    Data()
  }, [])

  // console.log(userData)
  return (
    <div className="App">
      <Home />
      <div className='main'>
        {userData.map((items) => {
          return (
            <ShowData key={items._id}
              name={items.name}
              age={items.age}
              city={items.city}
              country={items.country}
              id={items._id}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
