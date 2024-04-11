import { spawn, exec } from "child_process";
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {

    const { scenario, year, month } = req.query;

    if (!scenario) {
    return res.status(400).json({ error: "Scenario parameter is required"} );
  }

  if (!year) {
    return res.status(400).json({ error: "Year parameter is required"} );
  }

  if (!month) {
    return res.status(400).json({ error: "Month parameter is required"} );
  }

  const imageMapPromise = new Promise((resolve, reject) => {
		exec(
			`python3 src/python-maps/tas/main.py ${scenario} ${year} ${month}`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					reject(error);
				}
				const filename = `tas-map-${scenario}-${month}-${year}.png`;
      const imagePath = path.join(process.cwd(), 'public', filename);
      resolve(imagePath)
			}
		);
	});

  

  const handleRequest = async (req, res) => {
    try {
      // Get the image path from the promise
      const imagePath = await imageMapPromise;
      // Set the response headers to indicate it's an image
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
      });
  
      // Send the image file as the response
      const imageStream = fs.createReadStream(imagePath);
      imageStream.pipe(res);
    } catch (error) {
      console.error('Error:', error);
      // Handle error response
      res.status(500).send('Error while generating the map');
    }
  };

  
  handleRequest(req, res);

}
