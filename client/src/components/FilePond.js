import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Uploader = () => {
  const [files , setFiles] = useState([])


    return (
      <div className="App">
        <FilePond
          files={files}
          allowMultiple={true}
          allowReorder={true}
          maxFiles={3}
          onupdatefiles={setFiles}
        />
      </div>
    );
  }

export default Uploader