class Keyboard {
	constructor(manufacturer, responseTime) {
		this.manufacturer = manufacturer;
		this.responseTime = responseTime;
	}
}

class Monitor {
	constructor(manufacturer, width, height) {
		this.manufacturer = manufacturer;
		this.width = width;
		this.height = height;
	}
}

class Battery {
	constructor(manufacturer, expectedLife) {
		this.manufacturer = manufacturer;
		this.expectedLife = expectedLife;
	}
}

class Computer {
	constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
		if (new.target === Computer) {
			throw new Error("Cannot make an instance of abstract class Computer");
		}
		this.manufacturer = manufacturer;
		this.processorSpeed = processorSpeed;
		this.ram = ram;
		this.hardDiskSpace = hardDiskSpace;
	}
}

class Laptop extends Computer {
	constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
		super(manufacturer, processorSpeed, ram, hardDiskSpace);
		this.weight = weight;
		this.color = color;
		this.battery = battery;
	}
	
	get battery() {
		return this._battery;
	}
	
	set battery(newBattery) {
		if (!(newBattery instanceof Battery)) {
			throw new TypeError("not a valid battery");
		}
		this._battery = newBattery;
	}
}

class Desktop extends Computer {
	constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
		super(manufacturer, processorSpeed, ram, hardDiskSpace);
		this.keyboard = keyboard;
		this.monitor = monitor;
	}
	
	get keyboard() {
		return this._keyboard;
	}
	
	set keyboard(newKeyboard) {
		if (!(newKeyboard instanceof Keyboard)) {
			throw new TypeError("Not a valid keyboard");
		}
		this._keyboard = newKeyboard;
	}
	
	get monitor() {
		return this._monitor;
	}
	
	set monitor(newMonitor) {
		if (!(newMonitor instanceof Monitor)) {
			throw new TypeError("Not a valid monitor");
		}
		this._monitor = newMonitor;
	}
}

function mixins() {
	
	function computerQualityMixin(classToExtend) {
		classToExtend.prototype.getQuality = function () {
			return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
		};
		classToExtend.prototype.isFast = function () {
			return this.processorSpeed > (this.ram / 4);
		};
		classToExtend.prototype.isRoomy = function () {
			return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
		};
	}
	
	
	function styleMixin(classtoExtend) {
		classtoExtend.prototype.isFullSet = function () {
			return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer;
		};
		classtoExtend.prototype.isClassy = function () {
			return this.battery.expectedLife >= 3 && (this.color === "Silver" || this.color === "Black") && this.weight < 3;
		}
	}
	
	return {computerQualityMixin, styleMixin};
}

