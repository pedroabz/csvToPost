var csv = require("csvtojson");
var configuration = require ("../configuration");
const api = require("./api")(configuration);

const filePath = (configuration.csvPath)

csv()
  .fromFile(filePath)
  .then(function(array){  
        array.forEach(x => {
                const {codigo, valor} = x
                const response = api.post(configuration.postEndpoint, {
                    codigo,
                    valor
                }, {auth: {
                    username: configuration.username,
                    password: configuration.password
                }})
                .then((response) => console.log(response.data))                
            }
        )       
    })
    
    
    