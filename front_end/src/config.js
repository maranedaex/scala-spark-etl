module.exports = function () {
    console.log(`Usando config: ${process.env.REACT_APP_NODE_ENV}`)
    switch(process.env.REACT_APP_NODE_ENV){
      case "development":
        return {
          "backend": {
            "hostname": "localhost",
            "port": "5000",
            "baseUrl": "http://localhost:5000"
          }
        };
      case "staging":
        return {
          "backend": {
            "hostname": "159.65.230.54",
            "port": "3038",
            "baseUrl": "http://159.65.230.54:3038"
          }
        };
      case "docker":
        return {
          "backend": {
            "hostname": "localhost",
            "port": "3038",
            "baseUrl": "http://localhost:3038"
          }
        };
      default:
        return {
          "backend": {
            "hostname": "localhost",
            "port": "5000",
            "baseUrl": "http://localhost:5000"
          }
        };
    }
  
  }