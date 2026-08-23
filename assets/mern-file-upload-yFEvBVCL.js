const e={id:"mern-file-upload",title:"File Upload in MERN",difficulty:"intermediate",estimatedMinutes:15,tldr:["File upload in MERN uses multer (Express middleware) for handling multipart/form-data and cloud storage (Cloudinary, S3).","Flow: React sends FormData with file ? Multer parses in Express ? File saved locally or uploaded to cloud ? URL stored in MongoDB.","Multer provides: disk storage (local), memory storage (buffer for cloud), file filtering (type/size), and single/multiple file handling.","Best practices: validate file type and size, use cloud storage for production, compress images, serve via CDN, secure upload endpoints."],laymanDefinition:"File upload is like mailing a package. Your React app puts the file in a box (FormData) and ships it to the post office (Express/multer). The post office inspects the package (file validation), then either stores it in the back room (local disk) or sends it to a warehouse (cloud storage like S3/Cloudinary) and gives you a tracking number (URL) to reference it.",deepDive:[{heading:"Multer Configuration",text:'diskStorage: save to local filesystem, control filename and path. memoryStorage: keep in buffer for cloud upload (no local file). limits: fileSize (max bytes). fileFilter: validate mime type, reject invalid files. Single file: upload.single("file"). Multiple: upload.array("files", 5).'},{heading:"Cloud Storage Integration",text:"Cloudinary: image/video cloud with transformations and CDN. AWS S3: scalable object storage. Upload in memoryStorage buffer, send to cloud service, store returned URL. Benefits: scalable, CDN delivery, transformations, no server disk space concerns."},{heading:"File Validation",text:"Check file type via mimetype (image/jpeg, image/png, application/pdf). Check file size (max 5MB for images). Check dimensions for images (max width/height). Reject invalid files with clear error messages. Validate on both client and server."},{heading:"Serving Uploaded Files",text:'Local dev: express.static("uploads") serves files from disk. Cloud: use the cloud provider URL (https://res.cloudinary.com/...). Frontend renders: <img src={item.imageUrl} />. Store URL string in MongoDB document.'},{heading:"Security Considerations",text:"Authenticate upload routes (only logged-in users can upload). Validate file content (not just extension). Scan for malware. Limit concurrent uploads. Store files outside webroot on local. Use signed URLs for private files. Never trust file names from client."}],interviewAnswer:"File upload in MERN: multer on backend handles multipart data, cloud storage for production (Cloudinary/S3), file type and size validation, authenticated endpoints. Store the URL in MongoDB, not the file itself. Compress images before upload for performance.",interviewQuestions:[{question:"What middleware handles file upload in Express?",answer:"Multer � it parses multipart/form-data and makes files available via req.file or req.files."},{question:"How does file upload work from React?",answer:"Create FormData object, append file with key name matching multer field, send with Content-Type: multipart/form-data."},{question:"What is the difference between diskStorage and memoryStorage?",answer:"diskStorage saves files to local disk. memoryStorage keeps files in buffer for cloud upload without local storage."},{question:"How do you validate file types?",answer:"In multer fileFilter, check file.mimetype against allowed types (image/jpeg, image/png, etc.)."},{question:"What is Cloudinary?",answer:"A cloud-based image/video management service with storage, transformations, optimization, and CDN delivery."},{question:"How do you handle multiple file uploads?",answer:'Multer: upload.array("files", maxCount) or upload.fields([{ name: "avatar" }, { name: "gallery" }]).'},{question:"Where is the uploaded file URL stored?",answer:"In MongoDB as a string field on the relevant document (User.avatar, Item.image)."},{question:"How do you limit file size?",answer:"Multer limits option: { fileSize: 5 * 1024 * 1024 } (5MB). Also validate in fileFilter."},{question:"What Content-Type does file upload use?",answer:"multipart/form-data � this is required when sending files via HTTP POST."},{question:"How do you serve uploaded files in development?",answer:'Using express.static("uploads") middleware pointing to the upload directory.'}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">File Upload in MERN</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">React FormData</text><text x="60" y="43" text-anchor="middle" font-size="9" fill="#ddd">multipart/form-dat</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">a</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Multer</text><text x="200" y="54" text-anchor="middle" font-size="9" fill="#ddd">Parse + validate</text><line x1="150" y1="60" x2="150" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Cloud Storage</text><text x="60" y="89" text-anchor="middle" font-size="9" fill="#ddd">Cloudinary / S3</text><line x1="110" y1="83" x2="140" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="70" width="100" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="200" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">URL</text><text x="200" y="89" text-anchor="middle" font-size="9" fill="#ddd">Stored in MongoDB</text><line x1="150" y1="95" x2="150" y2="115" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="105" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">React Display</text><text x="60" y="124" text-anchor="middle" font-size="9" fill="#ddd"><img src={url} /></text><rect x="10" y="140" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="156" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Security</text><text x="60" y="148" text-anchor="middle" font-size="9" fill="#ddd">Auth + validate + </text><text x="60" y="159" text-anchor="middle" font-size="9" fill="#ddd">scan</text><rect x="270" y="35" width="210" height="150" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="375" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">File Upload Flow</text><text x="375" y="157" text-anchor="middle" font-size="9" fill="#ddd">React FormData ? Multer ? Cloud Storag</text><text x="375" y="168" text-anchor="middle" font-size="9" fill="#ddd">e ? MongoDB URL ? Display. Validate, s</text><text x="375" y="179" text-anchor="middle" font-size="9" fill="#ddd">ecure, compress.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">File Upload: Multer for parsing, Cloudinary/S3 for</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> storage, MongoDB for URL references, validation f</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">or security.</text></svg>',codeExamples:[{title:"Multer Config with Cloudinary",useCase:"Upload to Cloudinary via multer memory storage.",code:`const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'mern-app',
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
    transformation: [{ width: 1000, height: 1000, crop: 'limit' }]
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images allowed'), false);
    }
  }
});

module.exports = upload;`,description:"Multer configuration with Cloudinary storage, file type validation, and size limits."},{title:"File Upload Route and Controller",useCase:"Handle image upload endpoint.",code:`const upload = require('../middleware/upload');

router.post('/upload', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({
      url: req.file.path,
      filename: req.file.filename,
      size: req.file.size
    });
  } catch (err) { next(err); }
});`,description:"Express route handling single file upload with multer middleware."},{title:"React File Upload Component",useCase:"Frontend file upload with preview.",code:`import { useState } from 'react';
import api from '../services/api';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Uploaded:', res.url);
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type='file' onChange={handleFileChange} accept='image/*' />
      {preview && <img src={preview} alt='Preview' style={{ width: 200 }} />}
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}</button>
    </div>
  );
}`,description:"React component with file selection, preview, and upload to Express API."},{title:"Multer Error Handling",useCase:"Handle multer-specific errors gracefully.",code:`const multer = require('multer');

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Max 5MB.' });
    }
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({ error: 'Unexpected file field' });
    }
    return res.status(400).json({ error: err.message });
  }
  if (err.message === 'Only images allowed') {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});`,description:"Separate multer error handler for user-friendly file upload error messages."},{title:"Multiple File Upload (Gallery)",useCase:"Upload multiple images at once.",code:`// Server:
router.post('/gallery', upload.array('images', 5), async (req, res) => {
  const urls = req.files.map(f => f.path);
  res.json({ urls });
});

// Client:
function GalleryUpload() {
  const handleUpload = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
    const res = await api.post('/gallery', formData);
    console.log(res.urls);
  };

  return <input type='file' multiple onChange={handleUpload} />;
}`,description:"Multiple file upload handling with array field in multer and FormData."}],mcqQuestions:[{question:"What middleware handles file upload in Express?",options:["express-file","multer","busboy","formidable"],answer:1,explanation:"Multer is the most popular Express middleware for handling multipart/form-data file uploads."},{question:"What Content-Type do file uploads use?",options:["application/json","multipart/form-data","text/plain","application/xml"],answer:1,explanation:"File uploads require multipart/form-data Content-Type."},{question:"What does multer memoryStorage do?",options:["Saves to disk","Keeps file in buffer for cloud upload","Deletes the file","Encodes the file"],answer:1,explanation:"memoryStorage keeps the file in a buffer for uploading to cloud services without local storage."},{question:"How do you limit file size with multer?",options:["In fileFilter","In limits option","In storage config","In route handler"],answer:1,explanation:"File size is limited via the limits option: { fileSize: maxBytes }."},{question:"Where is the uploaded file URL stored?",options:["In a text file","In MongoDB document field","In server memory","In environment variable"],answer:1,explanation:"The file URL (from cloud storage) is stored in the relevant MongoDB document."},{question:"What should file upload routes require?",options:["No auth","Authentication","Admin only","Public access"],answer:1,explanation:"File upload routes should require authentication to prevent anonymous uploads."},{question:"File Upload in MERN — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"File Upload in MERN — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"File Upload in MERN — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"File Upload in MERN — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as mern_file_upload};
