
async function greet() {                            // async -> returns a promise compulsory.
    console.log("Hare Krishna..!");
}
greet();



function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data.")
            resolve();
        }, 3000);
    });
};


async function getWeatherData() {
    await api();
    await api();
    await api();
} 
getWeatherData();



function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 2000); 
    });
  }
  
  async function showData() {
    console.log("Fetching data...");
    
    const result = await fetchData();          // Wait for fetchData to complete
    
    console.log(result);
    console.log("All done.")                      // Output: Data fetched!             
  }
  
  // Call the async function
  showData();
  