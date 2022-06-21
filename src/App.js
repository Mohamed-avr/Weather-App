import './App.css';
import React , { useState , useRef} from 'react' ; 
import axios from 'axios';

function App() {

  const  [data , setData ] = useState({}) ;
  const   [location , setLocation] = useState(''); 


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=fd2b2d5e01b15c23158135a171fe9e30`;

  
 
  const searchLocationhandler = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then( (resposne) => {
        setData(resposne.data)
        console.log(data)
       
   
      })
      setLocation('')
    }
  }
  
  return (
    <div className=" text-white App w-full h-screen relative bg-black/60  font-body  ">



        <div className=' rounded-xl pt-10'>
           <div className=''>
              <input className='bg-white/10   text-white   border-2 border-white/70 py-2 outline-none rounded-xl indent-3' 
               type='text'
               placeholder='inter your location'
               value={location}
               onChange ={ event => setLocation(event.target.value) }
               onKeyPress= {searchLocationhandler}

              />
           </div>
      
          <div className=' absolute mt-20  '> 
             <div className=' text-left space-y-4 pl-6'>
               <p className='text-2xl '> {data.name} </p> 
               <p className='text-7xl font-bold'> {data.main ? data.main.temp.toFixed() : null }°C</p> 
               <p className=' font-bold '> {data.weather ? data.weather[0].main : 'not selected' } {} </p> 
             </div>
          </div>
     

          { data.name != undefined  && <div className=' flex justify-center absolute bottom-[10px]  w-full ' >
           <div className=' space-x-10 mt-10 py-4 px-4 rounded-2xl bg-white/5 '> 
             <div className=' inline-flex  flex-col'> 
              <p className='font-bold'> {data.main ? data.main.feels_like.toFixed() : null }°C</p>
              <p> feels like</p>
             </div>
             <div className='inline-flex flex-col'> 
              <p className='font-bold'>{data.main ? data.main.humidity : null }%</p>
              <p> Humidity</p>
             </div>
             <div className='inline-flex flex-col'> 
              <p className='font-bold'>{data.wind ? data.wind.speed.toFixed() : null }MPH</p>
              <p> wind speed</p>
             </div>
           </div>
         </div>}


        </div>
    </div>
  );
}

export default App;
