

const appendApiKey=(url)=> {
    
    const apiKeytool = process.env.API_KEY;
    url=url.replace("{apiKey}",apiKeytool);
   
    return url;
}


module.exports = {appendApiKey};