import { CityType, GovernmentBuildingType, StreetType } from "./01_01";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
	city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, number: number) {
	return buildings.filter(building => building.staffCount > number)
}