import {useLocation, useNavigate} from "react-router-dom";
import dateFormatter from "../utils/dateFormatter";

type WeatherData = {
  name: string;
  weather?:
    | {
        main: string;
        description: string;
        icon: string;
      }[];
  main?: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
} | null;

const WeatherPage = () => {
  const navigate = useNavigate();
  const {
    state: {weatherData},
  } = useLocation();

  const data: WeatherData = weatherData;

  const onBackHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="table-weather-blk">
      <h1>{data?.name}</h1>
      <div className="table-container-blk">
        <div>
          <h2>Date</h2>
          <p>{dateFormatter()}</p>
        </div>
        <div>
          <h2>Temp(F)</h2>
          <p>{data?.main?.temp}</p>
        </div>
        <div>
          <h2>Description</h2>
          <p>{data?.weather?.[0]?.description}</p>
        </div>

        <div>
          <h2>Main</h2>
          <p>{data?.weather?.[0]?.main}</p>
        </div>

        <div>
          <h2>Pressure</h2>
          <p>{data?.main?.pressure}</p>
        </div>

        <div>
          <h2>Humidity</h2>
          <p>{data?.main?.humidity}</p>
        </div>
      </div>
      <button onClick={onBackHandler}>Back to Dashboard</button>
    </div>
  );
};

export default WeatherPage;
