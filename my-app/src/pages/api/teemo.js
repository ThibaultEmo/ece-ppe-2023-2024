import { spawn, exec } from "child_process";
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Define the filename for the generated image
  

  /*
  // Execute the Python script
  const pythonProcess = spawn('python3', ['generate_image.py'], { cwd: path.join(process.cwd(), 'scripts') });

  pythonProcess.on('close', (code) => {
    if (code === 0) {
      // Read the generated image file
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).end();
          return;
        }

        
      });
    } else {
      console.error(`Python script exited with code ${code}`);
      res.status(500).end();
    }
  });*/

  const imageMapPromise = new Promise((resolve, reject) => {
		exec(
			`python3 src/python_scripts/generate_map.py`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					reject(error);
				}
				const filename = 'generated_image.jpg';
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
