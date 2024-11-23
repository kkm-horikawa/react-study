import Form from "./components/Form";
import Result from "./components/Result";
import Title from "./components/Title";
import { useState } from "react";

type ResultState = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

const App = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=e86d08050e134ddeb9955755242311&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      });
  };
  const [results, setResults] = useState<ResultState>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });

  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result results={results} />
    </div>
  );
};

export default App;
