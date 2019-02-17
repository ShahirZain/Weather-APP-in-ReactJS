import React, { Component } from 'react';
import './App.css';
import Title from './component/Title';
import Form from './component/form';
import Weather from './component/weather'



const API_KEY = "1a7084b82a2506293668fe86ab7766a2";
class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    description: undefined,
    wind: undefined ,
    humidity : undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&unit=metric`)
    const data = await api_call.json();
    if (city && country) {
      console.log(data)
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        description: data.weather[0].description,
        wind: data,
        humidity: data.main.humidity,
        error : undefined
      })
    }
    else {
      console.log("err")
      this.setState({
        city: undefined,
        country: undefined,
        temp: undefined,
        description: undefined,
        wind: undefined,
        humidity: undefined,
        error : "please enter values"
      }, ()=> console.log(this.state.error))
    }
  }


  render() {
    return (
        <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
