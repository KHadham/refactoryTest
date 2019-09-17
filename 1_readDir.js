const fs = require('fs');
fs.readdir('/etc', 'utf-8', async (err, data) => {
    if(err){
    await console.log(new Error (err))
}else{
    await console.log(data);
    
}   
})