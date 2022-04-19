import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent'
import avtImg from './assest/img/Avata.jpg'
import { useState, useEffect } from 'react'


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(item => { setData(item.data) })
  }, [])

  console.log(data)

  return (
    <div className="wrapper">
      {data.map(item => {
        return (
          <div className="card">
            <div className="card__img">
              <img src={item.avatar} alt="" />
            </div>
            <h4 className="card__id">Id: {item.id}</h4>
            <h2 className="card__name">Name: {item.first_name + " " + item.last_name}</h2>
            <p className="card__email">Email: {item.email}</p>
            <div className="card__soci">
              <i className='bx bxl-facebook'></i>
              <i className='bx bxl-youtube' ></i>
              <i className='bx bxl-tiktok' ></i>
              <i className='bx bxl-github' ></i>
            </div>
            <button class="card__contact-btn">Contact me</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
