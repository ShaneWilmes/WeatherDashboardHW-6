//API Fetch 

class Fetch {
    async getCurrent(input){
        const myKey = "4c8ef238a069221bc3de230628323419";
        
        //making request to api url

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`);

        const data = await response.json();

        // console.log(data);  //Not needed.  Used to inspect in DevTools as I added elements of weather to display

        return data;
    }
}