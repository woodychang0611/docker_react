//update config with environment variables

const fs = require('fs');
let input = "server_config.template.json"
let output = "server_config.json"
data = JSON.parse(fs.readFileSync(input, {encoding:'utf8'}))
for (key in data){
    if (envVariable = process.env[key]){
        data[key] = envVariable
        console.log(`Update ${key} with value ${envVariable}`)
    }
}
fs.writeFileSync(output,JSON.stringify(data))