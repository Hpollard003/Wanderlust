import React, { useState } from 'react'



// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import { useParams } from 'react-router-dom';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Uploader = () => {
  const [files , setFiles] = useState([])
  const { user_id } = useParams()


    return (
      <div className="App">
        <FilePond
          files={files}
          allowMultiple={true}
          allowReorder={true}
          maxFiles={3}
          server={{
            url: "http://localhost:3000", 
            process: {
              url: `/users/${user_id}/upload-images`, 
              method: "POST",
              withCredentials: true
                       
            }
          }}
          onupdatefiles={fileItems => setFiles(fileItems.map(fileItem => fileItem.file))}
        />
      </div>
    );
  }

export default Uploader