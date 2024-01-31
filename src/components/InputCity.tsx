import {useState} from "react";
import {useNavigate} from "react-router-dom";

const InputCity = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setCity(value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!city) {
      setMessage("Please enter a city before submitting");
      return setTimeout(() => {
        return setMessage("");
      }, 2000);
    }

    try {
      const apiKey = "c2983700da64e23505449a84bb7e8d07";
      const requestData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      );
      if (!requestData.ok) {
        setMessage("Unable to find a city corresponding to the given input.");
        return setTimeout(() => {
          return setMessage("");
        }, 2000);
      }
      const responseData = await requestData.json();
      navigate("/weather", {state: {weatherData: responseData}});
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <>
      <form className="search-container-blk" onSubmit={onSubmitHandler}>
        <input
          className="search-city-input"
          type="text"
          value={city}
          name="city"
          onChange={onChangeHandler}
          placeholder="Search City...."
          autoComplete="off"
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className="message-prompt-blk"> {message}</div>
    </>
  );
};

export default InputCity;
