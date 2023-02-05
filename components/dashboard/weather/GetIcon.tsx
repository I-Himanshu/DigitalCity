import {
    IoMdSunny,
    IoMdRainy,
    IoMdCloudy,
    IoMdSnow,
    IoMdThunderstorm,
    IoMdMoon,
} from 'react-icons/io';
import { 
    TbMist, 
} from "react-icons/tb";
import {
    BsCloudHaze2Fill,
    BsCloudDrizzleFill,
    BsFillCloudFog2Fill,
} from 'react-icons/bs';
import { GiSmokeBomb } from "react-icons/gi";
import { WiDust } from "react-icons/wi";

export default function GetIcon(desc, hour) {
    let icon;
    console.log(desc);
    switch (desc) {
        case 'Clouds':
            icon = <IoMdCloudy />;
            break;
        case 'Haze':
            icon = <BsCloudHaze2Fill />;
            break;
        case 'Rain':
            icon = <IoMdRainy />;
            break;
        case 'Clear':
            if (hour >= 18 || hour <= 6){
                icon = <IoMdMoon />;
            } else{
            icon = <IoMdSunny />;
            }
            break;
        case 'Drizzle':
            icon = <BsCloudDrizzleFill />;
            break;
        case 'Snow':
            icon = <IoMdSnow />;
            break;
        case 'Thunderstorm':
            icon = <IoMdThunderstorm />;
            break;
        case 'Mist':
            icon = <TbMist />;
            break;
        case 'Fog':
            icon = <BsFillCloudFog2Fill />;
            break;
        case 'Smoke':
            icon = <GiSmokeBomb />;
            break;
        default:
            icon = <WiDust />;
    }
    console.log(icon);
    return icon;
}
