const core = require('@actions/core');
const github = require('@actions/github')
const axios = require('axios');
const apiEndpoint = core.getInput('api-endpoint-url')
//const apiEndpoint = 'https://catfact.ninja/fact';

if(!apiEndpoint){
    console.log("No endpoint value defined")
} else {
    CallEndpoint();
}

function CallEndpoint(){
    try{
        axios.get(apiEndpoint).then(response =>{
        console.log(response.data);
    })
    } catch (error) {
        console.log(error);
    }
}

