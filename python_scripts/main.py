import fastf1 as ff1
from matplotlib import pyplot as plt
from fastf1 import plotting

ff1.Cache.enable_cache('./cache')  # optional but highly recommended

monza_quali = ff1.get_session(2019, 'Monza', 'Q')

vettel = monza_quali.get_driver('VET')
print(f"Pronto {vettel.name}?")
# Pronto Se🅱️astian?


plotting.setup_mpl()

laps = monza_quali.load_laps(with_telemetry=True)
fast_leclerc = laps.pick_driver('LEC').pick_fastest()
lec_car_data = fast_leclerc.get_car_data()
t = lec_car_data['Time']
vCar = lec_car_data['Throttle']

# The rest is just plotting
fig, ax = plt.subplots()
ax.plot(t, vCar, label='Fast')
ax.set_xlabel('Time')
ax.set_ylabel('Speed [Km/h]')
ax.set_title('Leclerc is')
ax.legend()
plt.show()