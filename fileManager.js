const fs = require("fs");

const fileName = "data.txt";

// CREATE
console.log('Creating File...');

fs.writeFile(fileName, "Hello from Node.js", (error) => {
  if (error) {
    console.log("Error creating file:", error);
    
  }

  console.log(" 1. File created successfully");
})
  // READ
  
  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) {
      console.log("Error reading file:", error);
      
    }
    
    console.log("Reading File");
    console.log("2. File content:", data);

    // UPDATE
    
    
    fs.appendFile(fileName,"\nThis file is being managed using Node.js.",(error) => {
        if (error) {
          console.log("Error updating file:", error);
          
        }

        console.log("3. File updated successfully");

        // READ
  console.log("Reading File");
  
  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) {
      console.log("Error reading file:", error);
      
    }

    console.log(" Updated content:", data);

        // DELETE
        fs.unlink(fileName, (error) => {
          if (error) {
            console.log("Error deleting file:", error);
            
          }

          console.log("4. File deleted successfully");
        });
      },
    );
  });
});
