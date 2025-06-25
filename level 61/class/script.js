class Flight {
  constructor(flightID, status) {
    this.flightID = flightID;
    this.status = status;
  }

  getStatusMessage() {
    return `Flight ${this.flightID} has ${this.status}`;
  }
}

let flightID = "NGT 929";
let status = "landed";

let flight = new Flight(flightID, status);

console.log(flight.getStatusMessage());
