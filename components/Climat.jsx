
const Climat = ({data}) => {
    switch (data.weather[0].main) {
        case 'Clouds' :
            return <p> Nuageux </p>
        case 'Drizzle' : 
            return <p> Légère pluie </p>;
        case 'Clear' : 
            return <p> Soleil </p>;
        case 'Rain' : 
           return <p> Pluie </p>;
        case 'Snow' : 
            return <p> Neige </p>
        case 'Thunderstorm' : 
            return <p> Orageux </p>
        default : 
            return <p> Brumeux </p>
    }
};

export default Climat;