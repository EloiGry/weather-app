import Image from 'next/image';
import Climat from './Climat'
import {AiFillStar} from 'react-icons/ai'
import {useContext} from 'react'
import { FavouriteContext } from '../context/Favourites';

const Weather = ({ data }) => {
  const {favourites, setFavourites} = useContext(FavouriteContext)
  
 const handleFavourite = (city) => {
  const fav = favourites.includes(city)
    console.log("fav" ,fav);
    if (!fav) {
      setFavourites([city, ...favourites])
    }
 }
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <Climat className='text-2xl' data={data}/>
        </div>
        <p className='text-9xl'>{((data.main.temp - 32)/1.8).toFixed(0)}&#176;</p>
      </div>
      <button onClick={() => handleFavourite(data.name)} className='rounded bg-black/50 opacity-60 hover:opacity-100 w-2/5 m-auto p-3 flex justify-center items-center'> <span className='pr-1'>Ajouter aux favoris</span> <AiFillStar/> </button>

      {/* Bottom */}

<div className='bg-black/50 relative p-8 rounded-md'>
    <p className='text-2xl text-center pb-6'>Climat à {data.name}</p>
    <div className='flex justify-between text-center'>
        <div>
            <p className='font-bold text-2xl'>{((data.main.feels_like - 32)/1.8).toFixed(0)}&#176;</p>
            <p className='text-xl'>Ressenti </p>
        </div>
        <div>
            <p className='font-bold text-2xl'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidité</p>
        </div>
        <div>
            <p className='font-bold text-2xl'>{(data.wind.speed * 1.609).toFixed(0)} Km/h</p>
            <p className='text-xl'>Vent</p>
        </div>
    </div>
</div>

    </div>
  );
};

export default Weather;