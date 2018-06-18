class Record {
	constructor(temperature, humidity, pressure, windSpeed) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		this.windSpeed = windSpeed;
		
		this.id = Record.getId();
	}
	
	get weatherStatus() {
		return (this.temperature < 20 &&
			(this.pressure < 700 || this.pressure > 900) &&
			this.windSpeed > 25) ? "Stormy" : "Not stormy";
	}
	
	toString() {
		return `Reading ID: ${this.id}\n` +
			`Temperature: ${this.temperature}*C\n` +
			`Relative Humidity: ${this.humidity}%\n` +
			`Pressure: ${this.pressure}hpa\n` +
			`Wind Speed: ${this.windSpeed}m/s\n` +
			`Weather: ${this.weatherStatus}`
	}
	
	static getId() {
		if (Record.nextId === undefined) {
			Record.nextId = 0;
		}
		return Record.nextId++;
	}
}