import requests
import json

def get_venue(year):
	x = requests.get(f'http://ergast.com/api/f1/{year}.json')
	data = json.loads(x.content)


	venues = []

	for venue in data["MRData"]["RaceTable"]["Races"]:
		venues.append(venue["Circuit"]["circuitId"])
	print(venues)
	return venues

def get_drivers(year):
	x = requests.get(f'http://ergast.com/api/f1/{year}/drivers.json')
	data = json.loads(x.content)


	drivers = []

	for driver in data["MRData"]["DriverTable"]["Drivers"]:
		drivers.append(driver["code"])
	print(drivers)
	return drivers