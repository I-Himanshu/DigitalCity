import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DetailBox from './DetailBox';
import Hourly from './Hourly';
import MainTemp from './MainTemp';
import MobileTable from './MobileTable';
import Table from './Table';


export default function Weather({ city }) {
  const APIkey = '41f10dab3b3d521cccd0c5bc11f21ad6';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
  const [data, setData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const hours = new Date().getHours();

  useEffect(() => {
    setData(null)
    setHourlyData(null)
    axios
      .get(url)
      .then((res) => {

        setData(res.data);
        const hourlyUrl = `https://openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`
        axios
          .get(hourlyUrl)
          .then((hourlyres) => {
            setHourlyData(hourlyres.data)
            console.log(hourlyres.data)
          })
      })
  }, [city])
  if (!data || !hourlyData) return (<div className={`z-20 text-white text-lg md:text-2xl text${hours} font-black flex flow-row items-center`}>
    <i className="fa-solid fa-cloud-moon"></i> <p className='ml-2'>Loading...</p>
  </div>)
  return (
    <div className='bg-black'>
      <div className=" flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-between w-[90vw] md:w-[85vw] lg:w-[75vw] mt-12">
        <MainTemp temp={Math.round(data.main.temp)} city={data.name} desc={data.weather[0].main} />
        <Hourly data={hourlyData.hourly} />
      </div>
      <div className="flex flex-col justify-center items-center w-[90vw] md:w-[85vw] lg:w-[75vw] mt-12">
        <Table data={hourlyData.daily} />
        <MobileTable data={hourlyData.daily} />
        <DetailBox sunriseHours={new Date(data.sys.sunrise * 1000).toLocaleTimeString().split(":")[0]}
          sunriseMins={new Date(data.sys.sunrise * 1000).toLocaleTimeString().split(":")[1]}
          sunsetHours={new Date(data.sys.sunset * 1000).toLocaleTimeString().split(":")[0]}
          sunsetMins={new Date(data.sys.sunset * 1000).toLocaleTimeString().split(":")[1]}
          uv={hourlyData.current.uvi}
          windSpeed={hourlyData.current['wind_speed']}
          visibility={hourlyData.current.visibility / 1000}
          humidity={hourlyData.current.humidity}
          pressure={hourlyData.current.pressure}
          feelsLike={hourlyData.current.feels_like}
        />
      </div>
    </div>
  )
}




// import React, { useState, useEffect } from 'react';

// // import axios
// import axios from 'axios';

// // import icons
// import {
//   IoMdSunny,
//   IoMdRainy,
//   IoMdCloudy,
//   IoMdSnow,
//   IoMdThunderstorm,
//   IoMdSearch,
// } from 'react-icons/io';

// import {
//   BsCloudHaze2Fill,
//   BsCloudDrizzleFill,
//   BsEye,
//   BsWater,
//   BsThermometer,
//   BsWind,
// } from 'react-icons/bs';

// import { TbTemperatureCelsius } from 'react-icons/tb';
// import { ImSpinner8 } from 'react-icons/im';

// // api key
// const APIkey = 'bcf2048bc3be154bded8f277f580ba2e';

// const App = () => {
//   const [data, setData] = useState(null);
//   const [location, setLocation] = useState('Bucharest');
//   const [inputValue, setInputValue] = useState('');
//   const [animate, setAnimate] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleInput = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     // if input value is not empty
//     if (inputValue !== '') {
//       // set location
//       setLocation(inputValue);
//     }

//     // select input
//     const input = document.querySelector('input');

//     // if input value is empty
//     if (input.value === '') {
//       // set animate to true
//       setAnimate(true);
//       // after 500 ms set animate to false
//       setTimeout(() => {
//         setAnimate(false);
//       }, 500);
//     }

//     // clear input
//     input.value = '';

//     // prevent defaults
//     e.preventDefault();
//   };

//   // fetch the data
//   useEffect(() => {
//     // set loading to true
//     setLoading(true);

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;

//     axios
//       .get(url)
//       .then((res) => {
//         // set the data after 1500 ms
//         setTimeout(() => {
//           setData(res.data);
//           // set loading to false
//           setLoading(false);
//         }, 1500);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setErrorMsg(err);
//       });
//   }, [location]);

//   // error message
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setErrorMsg('');
//     }, 2000);
//     // clear timer
//     return () => clearTimeout(timer);
//   }, [errorMsg]);

//   // if data is false show the loader
//   if (!data) {
//     return (
//       <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
//         <div>
//           <ImSpinner8 className='text-5xl animate-spin text-white' />
//         </div>
//       </div>
//     );
//   }

//   // set the icon according to the weather
//   let icon;

//   switch (data.weather[0].main) {
//     case 'Clouds':
//       icon = <IoMdCloudy />;
//       break;
//     case 'Haze':
//       icon = <BsCloudHaze2Fill />;
//       break;
//     case 'Rain':
//       icon = <IoMdRainy className='text-[#31cafb]' />;
//       break;
//     case 'Clear':
//       icon = <IoMdSunny className='text-[#ffde33]' />;
//       break;
//     case 'Drizzle':
//       icon = <BsCloudDrizzleFill className='text-[#31cafb]' />;
//       break;
//     case 'Snow':
//       icon = <IoMdSnow className='text-[#31cafb]' />;
//       break;
//     case 'Thunderstorm':
//       icon = <IoMdThunderstorm />;
//       break;
//   }

//   // date object
//   const date = new Date();

//   return (
//     <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0'>
//       {errorMsg && (
//         <div className='w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md'>{`${errorMsg.response.data.message}`}</div>
//       )}
//       {/* form */}
//       <form
//         className={`${
//           animate ? 'animate-shake' : 'animate-none'
//         } h-16 bg-black/30 w-full max-w-[450px]
//       rounded-full backdrop-blur-[32px] mb-8`}
//       >
//         <div className='h-full relative flex items-center justify-between p-2'>
//           <input
//             onChange={(e) => handleInput(e)}
//             className='flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full'
//             type='text'
//             placeholder='Search by city or country'
//           />
//           <button
//             onClick={(e) => handleSubmit(e)}
//             className='bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition'
//           >
//             <IoMdSearch className='text-2xl text-white' />
//           </button>
//         </div>
//       </form>
//       {/* card */}
//       <div className='w-full max-w-[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6'>
//         {loading ? (
//           <div className='w-full h-full flex justify-center items-center'>
//             <ImSpinner8 className='text-white text-5xl animate-spin' />
//           </div>
//         ) : (
//           <div>
//             {/* card top */}
//             <div className='flex items-center gap-x-5'>
//               {/* icon */}
//               <div className='text-[87px]'>{icon}</div>
//               <div>
//                 {/* country name */}
//                 <div className='text-2xl font-semibold'>
//                   {data.name}, {data.sys.country}
//                 </div>
//                 {/* date */}
//                 <div>
//                   {date.getUTCDate()}/{date.getUTCMonth() + 1}/
//                   {date.getUTCFullYear()}
//                 </div>
//               </div>
//             </div>
//             {/* card body */}
//             <div className='my-20'>
//               <div className='flex justify-center items-center'>
//                 {/* temp */}
//                 <div className='text-[144px] leading-none font-light'>
//                   {parseInt(data.main.temp)}
//                 </div>
//                 {/* celsius icon */}
//                 <div className='text-4xl'>
//                   <TbTemperatureCelsius />
//                 </div>
//               </div>
//               {/* weather description */}
//               <div className='capitalize text-center'>
//                 {data.weather[0].description}
//               </div>
//             </div>
//             {/* card bottom */}
//             <div className='max-w-[378px] mx-auto flex flex-col gap-y-6'>
//               <div className='flex justify-between'>
//                 <div className='flex items-center gap-x-2'>
//                   {/* icon */}
//                   <div className='text-[20px]'>
//                     <BsEye />
//                   </div>
//                   <div>
//                     Visibility{' '}
//                     <span className='ml-2'>{data.visibility / 1000} km</span>
//                   </div>
//                 </div>
//                 <div className='flex items-center gap-x-2'>
//                   {/* icon */}
//                   <div className='text-[20px]'>
//                     <BsThermometer />
//                   </div>
//                   <div className='flex'>
//                     Feels like
//                     <div className='flex ml-2'>
//                       {parseInt(data.main.feels_like)}
//                       <TbTemperatureCelsius />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className='flex justify-between'>
//                 <div className='flex items-center gap-x-2'>
//                   {/* icon */}
//                   <div className='text-[20px]'>
//                     <BsWater />
//                   </div>
//                   <div>
//                     Humidity
//                     <span className='ml-2'>{data.main.humidity} %</span>
//                   </div>
//                 </div>
//                 <div className='flex items-center gap-x-2'>
//                   {/* icon */}
//                   <div className='text-[20px]'>
//                     <BsWind />
//                   </div>
//                   <div>
//                     Wind <span className='ml-2'>{data.wind.speed} m/s</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;