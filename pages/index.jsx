import { useState, useContext, useEffect} from 'react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather'
import BackgroundImage from '../components/BackgroundImage'
import { FavouriteContext } from '../context/Favourites';
import { IoIosClose } from 'react-icons/io'
import NoSSR from '../utils/NoSSR'


export default function Home() {
  const {favourites, setFavourites} = useContext(FavouriteContext)
  const [city, setCity] = useState('')
  const [cityFav, setCityFav] = useState('')
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const setStateAsync = (state) => {
    return new Promise((resolve) => {
      setCityFav(state, resolve)
    });
}

useEffect(() => {
  if (cityFav !== '') {
    setLoading(true)
    axios.get(urlFav).then((response) => {
      setWeather(response.data);
    })
  
  setLoading(false);
  setCity('')
  }
}, [cityFav])

  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_TOKEN}`;
  const urlFav = `https://api.openweathermap.org/data/2.5/weather?q=${cityFav}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_TOKEN}`

  

  const removeFav = (city) => {
    setFavourites([...favourites.filter((found) => found !== city)])
  }


  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    })
    setCity('');
    setLoading(false);
  };


  const fetchFav = async(city) => { 
      await setStateAsync(city)  
  }


  if (loading) {
    return <p> Chargement... </p>
  } 


    return (
      <NoSSR>
        <Head>
          <title>Climat App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />
        {/* Background image */}
        {weather.main ? <BackgroundImage data={weather}/> : <Image
          src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2575&q=80'
          layout='fill'
          className='object-cover'
          alt=""
        />}
        
        {/* Search */}
        <div className='relative flex justify-between items-center max-w-[700px] w-full m-auto pt-4 px-4 text-white z-10'>
          
            {favourites?.length > 0 && favourites.map((e, index) => {
              return (
                <a key={index} onClick={() => fetchFav(e)} className='bg-black/50 opacity-60 hover:opacity-100 cursor-pointer relative m-2 p-2 rounded-md top-0 left-0 w-full max-w-[100px] truncate'>
                {e}
                  <button className='absolute top-0 right-0 z-50' onClick={()=> removeFav(e)}> <IoIosClose/> </button>
                </a>
              ) 
            })}
          
          <form
            onSubmit={fetchWeather}
            className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent border-none text-white focus:outline-none text-2xl'
                type='text'
                placeholder='Entrer une ville..'
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* Weather */}
        {weather.main && <Weather data={weather} />}
      </NoSSR>
    );
  
}

