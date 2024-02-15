import xarray as xr
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import sys

#file name & date neeeded
if len(sys.argv) != 2:
    raise ValueError("Missing argument. Usage: <file_name> <date>")

# Specify the path to your NetCDF file
nc_file_path = 'src/python-maps/franceDataset.nc'

# Open the NetCDF file using xarray
dataset = xr.open_dataset(nc_file_path)

# Extract near-surface air temperature data
tas_kelvin = dataset['tas']

selected_date = sys.argv[1]

tas_selected_date_kelvin = tas_kelvin.sel(time=selected_date)

# Convert temperature from Kelvin to Celsius
tas_selected_date_celsius = tas_selected_date_kelvin - 273.15

# Create a plot using Cartopy for geographical context
fig, ax = plt.subplots(subplot_kw={'projection': ccrs.PlateCarree()})
tas_selected_date_celsius.plot(ax=ax, transform=ccrs.PlateCarree(), cmap='plasma')

# Add coastlines for better geographical context
ax.coastlines()

# Add title and labels
plt.title(f'Near-surface air temperature on {selected_date} (°C)')
plt.xlabel('Longitude')
plt.ylabel('Latitude')

# Save the plot
plt.savefig('public/tas-map.png')

# Show the plot
#plt.show()

# Close the dataset
dataset.close()
