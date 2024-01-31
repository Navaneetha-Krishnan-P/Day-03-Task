var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var req = JSON.parse(request.response);
    console.log(req);

    for(var i=0;i<req.length;i++){
        console.log(`
        [Name]:${req[i].name.common} 
        [Region]:${req[i].region} 
        [Subregion]:${req[i].subregion} 
        [Population]:${req[i].population}`)
     }
}