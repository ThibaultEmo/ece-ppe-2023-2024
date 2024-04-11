import xarray as xr
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import sys
import os 


#file name & date neeeded
if len(sys.argv) != 4:
    raise ValueError("Missing argument. Usage: <file_name> <scenario> <year> <month>")

scenario = sys.argv[1]
year = sys.argv[2]
month = sys.argv[3]

time_index = 0

if year == '2030':
    time_index = 0
elif year == '2050':
    time_index = 3
elif year == '2100':
    time_index = 6

if month == 'February':
    time_index += 0
elif month == 'July':
    time_index += 1
elif month == 'November':
    time_index += 2

# Specify the path to your NetCDF file
nc_file_path = f'/home/temo/Bureau/ece-ppe-2023-2024/my-app/src/python-maps/tas/{scenario}.nc'

# Open the NetCDF file using xarray
dataset = xr.open_dataset(nc_file_path)

print(dataset)

# Extract near-surface air temperature data
tas_kelvin = dataset['tas']

tas_selected_date_kelvin = tas_kelvin[time_index]

print(tas_selected_date_kelvin)

# Convert temperature from Kelvin to Celsius
tas_selected_date_celsius = tas_selected_date_kelvin - 273.15

# Create a plot using Cartopy for geographical context
fig, ax = plt.subplots(subplot_kw={'projection': ccrs.PlateCarree()})
tas_selected_date_celsius.plot(ax=ax, transform=ccrs.PlateCarree(), cmap='coolwarm')

# Add coastlines for better geographical context
ax.coastlines()

# Add title and labels
plt.title(f'Near-surface air temperature on {month} {year} - {scenario} (°C)')
plt.xlabel('Longitude')
plt.ylabel('Latitude')

# Save the plot
plt.savefig(f'/home/temo/Bureau/ece-ppe-2023-2024/my-app/public/tas-map-{scenario}-{month}-{year}.png')

# Close the dataset
dataset.close()
