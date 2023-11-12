// buttonHandlers.js or buttonHandlers.ts
export const Upload = () => {
    // const handleUpload = async () => {
    //     if (!selectedFile) {
    //       console.error("No file selected for upload.");
    //       return;
    //     }
    
    //     console.log("Begin upload");
    
    //     try {
    //       const fileReader = new FileReader();
    //       fileReader.readAsDataURL(new Blob([selectedFile.data]));
    
    //       fileReader.onload = async () => {
    //         const base64Data = fileReader.result.split(",")[1]; // Get the Base64-encoded data part
    
    //         const data = {
    //           name: selectedFile.name,
    //           fileData: base64Data, // Send the Base64-encoded data
    //         };
    
    //         try {
    //           const response = await axios.post("/upload", data, {
    //             headers: {
    //               "Content-Type": "application/json", // Set the content type to JSON
    //             },
    //           });
    
    //           if (response.status === 200) {
    //             console.log("File uploaded successfully");
    //             // You can handle success (e.g., display a success message) here.
    //           } else {
    //             console.error("File upload failed");
    //             // Handle errors (e.g., display an error message) here.
    //           }
    //         } catch (error) {
    //           console.error("Error during upload:", error);
    //           // Handle errors (e.g., display an error message) here.
    //         }
    //       };
    //     } catch (error) {
    //       console.error("Error reading file:", error);
    //       // Handle errors (e.g., display an error message) here.
    //     }
    //   };
    // Handler for Button 1
  };
  
  export const Embed = () => {
    // Handler for Button 2
  };
  
  export const Sign = () => {
    // Handler for Button 3
  };
  
  export const Download = () => {
    // Handler for Button 4
  };
  