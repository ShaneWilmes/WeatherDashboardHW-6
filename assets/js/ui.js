class UI {
    constructor() {
        this.uiContainer = document.getElementById('content');
        this.city;
    }


    populateUI(data) {
        this.uiContainer.innerHTML =        
        `<div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-text">High Temperature of ${data.main.temp_max}</h6>
                <h7 class="card-text">Low Temperature of ${data.main.temp_min}</h7>
                
                <p class="card-text">Current conditions: ${data.weather[0].description}</p>
                
                <p2 class="cart-text">Wind: ${data.wind.speed}</p2>
                
                
            </div>
        </div>`;
    }

    clearUI() {
        uiContainer.innerHTML = "";
      }
    
      saveToLS(data) {
        localStorage.setItem("city", JSON.stringify(data));
      }
    
      getFromLS() {
        if (localStorage.getItem("city" == null)) {
          return this.defaultCity;
        } else {
          this.city = JSON.parse(localStorage.getItem("city"));
        }
    
        return this.city;
      }
    
      clearLS() {
        localStorage.clear();
      }

}






