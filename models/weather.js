function Weather(id, temperature, locationId, timestamp) {
    this.id = id || null;
    this.temperature  = temperature  || null;
    this.locationId = locationId || null;
    this.timestamp  = timestamp  || Date.UTC();
}

Weather.prototype.getId = function() {
    return this.id;
}

Weather.prototype.setId = function(id) {
    this.id = id;
}

Weather.prototype.getTemperature = function() {
    return this.temperature;
}

Weather.prototype.setTemperature = function(temperature) {
    this.temperature = temperature;
}

Weather.prototype.getLocationId = function() {
    return this.locationId;
}

Weather.prototype.setLocationId = function(locationId) {
    this.locationId = locationId;
}

Weather.prototype.getTimestamp = function() {
    return this.timestamp;
}

Weather.prototype.setTimestamp = function(timestamp) {
    this.timestamp = timestamp;
}

Weather.prototype.equals = function(otherWeather) {
    return otherWeather.getId() == this.getId()
        && otherWeather.getTemperature() == this.getTemperature()
        && otherWeather.getLocationId() == this.getLocationId()
        && otherWeather.getTimestamp() == this.getTimestamp();
}

Weather.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

module.exports = Weather;