import xarray as xr
import matplotlib.pyplot as plt
import cartopy.crs as ccrs

# Specify the path to your NetCDF file
nc_file_path = 'franceDataset.nc'

# Open the NetCDF file using xarray
dataset = xr.open_dataset(nc_file_path)

# Extract near-surface air temperature data
tas_kelvin = dataset['tas']

# Choose a specific date (e.g., July 4, 2050)
selected_date = '2050-07-16'
tas_selected_date_kelvin = tas_kelvin.sel(time=selected_date)

# Convert temperature from Kelvin to Celsius
tas_selected_date_celsius = tas_selected_date_kelvin - 273.15

# Create a plot using Cartopy for geographical context
fig, ax = plt.subplots(subplot_kw={'projection': ccrs.PlateCarree()})
tas_selected_date_celsius.plot(ax=ax, transform=ccrs.PlateCarree(), cmap='plasma')

# Add coastlines for better geographical context
ax.coastlines()

# Add title and labels
plt.title(f'Sea level on {selected_date} (°C)')
plt.xlabel('Longitude')
plt.ylabel('Latitude')

# Show the plot
plt.show()

# Close the dataset
dataset.close()
