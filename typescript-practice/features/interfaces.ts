interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const beverage = {
  name: "pepsi",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle) => {
  console.log(`name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
};

const printSummary = (item: Reportable) => {
  item.summary();
};

printSummary(oldCivic);
printSummary(beverage);
