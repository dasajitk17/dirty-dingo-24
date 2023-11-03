

export default (req, res) => {
  // Simulate some data (you can fetch data from a database or another source here)
  const data = {
    message: "Hello, API!",
    timestamp: new Date().toISOString(),
  };

  // Set the response status code and send the JSON data
  res.status(200).json(data);
};
