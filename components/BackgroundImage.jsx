import Image from 'next/image'
import clear from '../assets/clear.jpg'
import cloud from '../assets/cloud.jpg'
import drizzle from '../assets/drizzle.jpg'
import other from '../assets/other.jpg'
import rain from '../assets/rain.jpg'
import snow from '../assets/snow.jpg'
import thunderstorm from '../assets/thunderstorm.jpg'

const BackgroundImage = ({data}) => {
    switch(data.weather[0].main) {
        case 'Clouds' :
            return <Image
                src={cloud}
                layout='fill'
                className='object-cover'
                alt=""
                placeholder='blur'
                /> ;
        case 'Drizzle' : 
            return <Image
            src={drizzle}
            layout='fill'
            className='object-cover'
            alt=""
            placeholder='blur'
            /> ;
        case 'Clear' : 
            return <Image
            src={clear}
            layout='fill'
            className='object-cover'
            alt=""
            placeholder='blur'
            /> ;
        case 'Rain' : 
            return <Image
            src={rain}
            layout='fill'
            className='object-cover'
            alt=""
            placeholder='blur'
            /> ;
        case 'Snow' : 
            return <Image
            src={snow}
            layout='fill'
            className='object-cover'
            alt=""
            placeholder='blur'
            /> ;
        case 'Thunderstorm' : 
            return <Image
            src={thunderstorm}
            layout='fill'
            className='object-cover'
            alt=""
            placeholder='blur'
            /> ;
        default : 
            return <Image
            src={other}
            layout='fill'
            className='object-cover'
            alt=""
            placeholder='blur'
            /> ;

    }
};

export default BackgroundImage;