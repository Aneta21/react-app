import "./Weather.css";
import Form from "./Form";
import Footer from "./Footer";

export default function Weather() {
  const weatherData = {
    city: "Prague",
    day: "Monday",
    time: "15:00",
    description: "light rain",
    img: "https://openweathermap.org/img/wn/10d@2x.png",
    temperature: 8,
    feelsLike: 6,
    humidity: 95,
    wind: 15,
  };
  return (
    <div className="Weather">
      <div className="wrapper">
        <div className="app">
          <div className="row">
            <div className="col-8">
              <Form />
            </div>
            <h1>{weatherData.city}</h1>
            <div className="overview">
              <ul>
                <li className="description">{weatherData.description}</li>
                <li>
                  <span className="date">
                    {weatherData.day},{weatherData.time}
                  </span>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix main-icon">
                  <img
                    src={weatherData.img}
                    alt="weather icon"
                    className="float-left icon"
                  />
                  <span className="float-left">
                    <span className="temperature">
                      {weatherData.temperature}
                    </span>
                    <span className="units">
                      <a className="active">°C</a> |<a> °F</a>
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-6">
                <ul className="details">
                  <li>Feels like: {weatherData.feelsLike}°C</li>
                  <li>Humidity: {weatherData.humidity}% </li>
                  <li>Wind: {weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
