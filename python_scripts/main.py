import fastf1 as ff1
from venues import get_venue, get_drivers
from pathlib import Path
import os

ff1.Cache.enable_cache('./cache')  # optional but highly recommended

year_list = ['2020', '2021']
session_list = ['FP1', 'FP2', 'FP3', 'Q', 'R']

for year in year_list:
	driver_list = get_drivers(year)
	venue_list = get_venue(year)
	for venue in venue_list:
		for session in session_list:
			race = ff1.get_session(int(year), venue, session)
			laps = race.load_laps(with_telemetry=True)
			for driver in driver_list:
				try:
					lap = laps.pick_driver(driver).pick_fastest()
					car_data = lap.get_car_data()
					json_dump = car_data.to_json(orient="table")
					Path(f"{os.getcwd()}/data/{year}/{venue}/{session}").mkdir(parents=True, exist_ok=True)

					with open(f'data/{year}/{venue}/{session}/{driver}.json', 'w') as file:
						file.write(json_dump)
				except:
					print(f"Error fetching {driver}")


