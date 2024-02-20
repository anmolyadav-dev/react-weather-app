const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=ca498de6b8314b64b1e92500240802";
async function ok(city)
{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    let a= await response.json();
    console.log(a)
}

ok("delhi");
