# Certificate preview images

Add one image per certificate (photo or screenshot of the cert).  
Name them however you like (e.g. `aws-cloud-practitioner.png`, `ms-power-platform-solution-architect.png`).

Then in `src/constants/index.js`:
1. Import each image at the top (e.g. `import certAws from "../assets/certificates/aws-cloud-practitioner.png";`).
2. Add an `image` property to the matching certificate object (e.g. `image: certAws`).

The certificate card will show your image first; if `image` is missing, it will try the Google Drive thumbnail, then the document placeholder.
