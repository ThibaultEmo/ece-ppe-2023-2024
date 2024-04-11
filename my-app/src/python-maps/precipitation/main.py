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
nc_file_path = f'/home/temo/Bureau/ece-ppe-2023-2024/my-app/src/python-maps/precipitation/{scenario}.nc'

# Open the NetCDF file using xarray
dataset = xr.open_dataset(nc_file_path)

print(dataset)


# Extract near-surface air temperature data
tas_pr = dataset['pr']

tas_pr_selected_date = tas_pr[time_index]

# Create a plot using Cartopy for geographical context
fig, ax = plt.subplots(subplot_kw={'projection': ccrs.PlateCarree()})
tas_pr_selected_date.plot(ax=ax, transform=ccrs.PlateCarree(), cmap='viridis')

# Add coastlines for better geographical context
ax.coastlines()

# Add title and labels
plt.title(f'Precipitation on {month} {year} - {scenario}')
plt.xlabel('Longitude')
plt.ylabel('Latitude')

# Save the plot
plt.savefig(f'/home/temo/Bureau/ece-ppe-2023-2024/my-app/public/precipitation-map-{scenario}-{month}-{year}.png')


# Close the dataset
dataset.close()
