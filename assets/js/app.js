// import favourite from "./Fav"
var API_KEY = "0e69699ff4e48619703dbdd3c7b904f1";
const favourite=(i)=>{
    return (`
    <div class="container" id="fav${i}">
    <h2 class="d-flex justify-content-between meteo-title AN${i}">
        <span>
            Weather in <a id="fav${i}city" href="https://www.google.com/maps/place/India" class="text-muted meteo-city" target="_blank">India</a>
        </span>
        <p class="fav${i}" style="cursor:pointer">X</p> 
       
    </h2>
    <section class="section-meteo row">
        <div class="meteo-day meteo-day-1 AN${i} col-sm">
            <h3><span class="name">Day 1</span> <span class="text-muted date">--/--</span></h3>
            <div class="meteo-block row meteo-temperature-container">
                <div class="meteo-temperature AN${i}">
                    <i class="wi wi-night-sleet"></i>
                    <span class="data">--°C</span>
                </div>
            </div>
            <div class="row">
                <div class="col meteo-block meteo-humidity AN${i}">
                    <div class="meteo-block-title">
                        <i class="fa fa-tint" aria-hidden="true"></i>
                         Humidity
                    </div>
                    <div class="meteo-block-data">--%</div>
                </div>
                <div class="col meteo-block meteo-wind AN${i}">
                    <div class="meteo-block-title">
                        <i class="fa fa-flag" aria-hidden="true"></i>
                        Wind
                    </div>
                    <div class="meteo-block-data">-- km/h</div>
                </div>
            </div>
            <div class="row">
                <div class="col meteo-block meteo-sunrise AN${i}">
                    <div class="meteo-block-title">
                        <i class="fa fa-sun-o" aria-hidden="true"></i>
                        Sunrise
                    </div>
                    <div class="meteo-block-data">--:--</div>
                </div>
                <div class="col meteo-block meteo-sunset AN${i}">
                    <div class="meteo-block-title">                      
                        <i class="fa fa-sun-o" aria-hidden="true"></i>
                        Sunset
                    </div>
                    <div class="meteo-block-data">--:--</div>
                </div>
            </div>
        </div>
        <div class="meteo-day  meteo-day-2 AN${i} col-sm">
            <h3><span class="name">Day 2</span> <span class="text-muted date">--/--</span></h3>
            <div class="meteo-block row meteo-temperature-container">
                <div class="meteo-temperature AN${i}">
                    <i class="wi wi-night-sleet"></i>
                    <span class="data">--°C</span>
                </div>
            </div>
            <div class="row">
                <div class="col meteo-block meteo-humidity AN${i}">
                    <div class="meteo-block-title">
                        <i class="fa fa-tint" aria-hidden="true"></i>
                         Humidity
                    </div>
                    <div class="meteo-block-data">--%</div>
                </div>
                <div class="col meteo-block meteo-wind AN${i}">
                    <div class="meteo-block-title">
                        <i class="fa fa-flag" aria-hidden="true"></i>
                        Wind
                    </div>
                    <div class="meteo-block-data">-- km/h</div>
                </div>
            </div>
            <div class="row">
                <div class="col meteo-block meteo-sunrise AN${i}">
                    <div class="meteo-block-title">
                        <i class="fa fa-sun-o" aria-hidden="true"></i>
                        Sunrise
                    </div>
                    <div class="meteo-block-data">--:--</div>
                </div>
                <div class="col meteo-block meteo-sunset AN${i}">
                    <div class="meteo-block-title">                      
                        <i class="fa fa-sun-o" aria-hidden="true"></i>
                        Sunset
                    </div>
                    <div class="meteo-block-data">--:--</div>
                </div>
            </div>
        </div>
        <div class="meteo-day meteo-day-3 AN${i} col-sm">
            <h3><span class="name">Day 3</span> <span class="text-muted date">--/--</span></h3>
            <div class="meteo-block row meteo-temperature-container">
                <div class="meteo-temperature AN${i}">
                    <i class="wi wi-night-sleet"></i>
                    <span class="data">--°C</span>
                </div>
            </div>
            <div class="row">
                <div class="col meteo-block meteo-humidity AN${i}">
                    <div class="meteo-block-title">
                        <i class="fa fa-tint" aria-hidden="true"></i>
                         Humidity
                    </div>
                    <div class="meteo-block-data">--%</div>
                </div>
                <div class="col meteo-block meteo-wind AN${i}">
                    <div class="meteo-block-title">
                        <i class="fa fa-flag" aria-hidden="true"></i>
                        Wind
                    </div>
                    <div class="meteo-block-data">-- km/h</div>
                </div>
            </div>
            <div class="row">
                <div class="col meteo-block meteo-sunrise AN${i}">
                    <div class="meteo-block-title">
                        <i class="fa fa-sun-o" aria-hidden="true"></i>
                        Sunrise
                    </div>
                    <div class="meteo-block-data">--:--</div>
                </div>
                <div class="col meteo-block meteo-sunset AN${i}">
                    <div class="meteo-block-title">                      
                        <i class="fa fa-sun-o" aria-hidden="true"></i>
                        Sunset
                    </div>
                    <div class="meteo-block-data">--:--</div>
                </div>
            </div>
        </div>
    </section>
   </div>
   </div>`)
}
function displayMeteo1(data,k){
    date = moment();
    for (var i = 0; i < 3; i++){
        // Display date
        day = $(".meteo-day-" + (i + 1)+`.AN${k}`);
        day.find(".name").text(date.format("dddd"));
        day.find(".date").text(date.format("DD/MM"));
        // Go to the next day
        date = date.add(1, 'days')
    }
    // Update Google Map URL
    googleMapCity = "https://www.google.fr/maps/place/" + data.city.coord.lat + "," + data.city.coord.lon;
    $(`.meteo-title.AN${k} span`).html(`Weather in <a id="fav${k}city" href="` + googleMapCity + '" class="text-muted meteo-city" target="_blank">' + data.city.name + ', ' + data.city.country + '</a>');
    // Update meteo for each day
    var tempMoyenne = 0;
    for (var i = 0; i < 3; i++){
        // Get meteo
        meteo = data.list[i*8];
        // Get DOM elements
        day = $(".meteo-day-" + (i + 1)+`.AN${k}`);
        icon = day.find(`.meteo-temperature.AN${k} .wi`);
        temperature = day.find(`.meteo-temperature.AN${k} .data`);
        humidity = day.find(`.meteo-humidity.AN${k} .meteo-block-data`);
        wind = day.find(`.meteo-wind.AN${k} .meteo-block-data`);
        sunrise = day.find(`.meteo-sunrise.AN${k} .meteo-block-data`);
        sunset = day.find(`.meteo-sunset.AN${k} .meteo-block-data`);
        // Update DOM
        code = meteo.weather[0].id;
        icon.attr('class', 'wi wi-owm-' + code);
        temperature.text(toCelsius(meteo.main.temp) + "°C");
        humidity.text(meteo.main.humidity + "%");
        wind.text(meteo.wind.speed + " km/h");
        tempMoyenne += meteo.main.temp;
    }
    displaySunriseSunset1(data.city.coord.lat, data.city.coord.lon,k);
  
}

function displaySunriseSunset1(lat, long,k){
    date = moment();
    for (var i = 0; i < 3; i++) {
        // Get sunrise and sunset
        var times = SunCalc.getTimes(date, lat, long);
        var sunrise = pad(times.sunrise.getHours(), 2) + ':' + pad(times.sunrise.getMinutes(), 2);
        var sunset = pad(times.sunset.getHours(), 2) + ':' + pad(times.sunset.getMinutes(), 2);
        // Display sunrise and sunset
        day = $(".meteo-day-" + (i + 1)+`.AN${k}`);
        day.find(`.meteo-sunrise.AN${k} .meteo-block-data`).text(sunrise);
        day.find(`.meteo-sunset.AN${k} .meteo-block-data`).text(sunset);
        // Go to the next day
        date = date.add(1, 'days')
    }
}

let obj=null;
obj=JSON.parse(localStorage.getItem("fav-collection"))

let arr=[];
if(obj==null){
    localStorage.setItem("fav-collection",JSON.stringify({arr}));
}else{
    arr=obj.arr;
}


if(arr.length!==0){
    for(let i=0;i<arr.length;i++){
        let city=arr[i];
        getMeteoByCity(city, function (data, error){
            if (error == null) {
             $("#fav-item").append(favourite(i+1))
               displayMeteo1(data,i+1);
               $(`.fav${i+1}`).click(function(e){
                   let dd=$(`#fav${i+1}city`).text().split(",")[0];
                   let aa=arr.findIndex((i)=>i===dd)
                   arr.splice(aa,1)
                 $(`#${this.className}`).remove();
                 localStorage.setItem("fav-collection",JSON.stringify({arr}));
               })
            }
            else {
                meteoTitle = $('#meteo-title span');
                meteoTitle.html('City <span class="text-muted">' + city + '</span> not found');
            }
            // Stop loader
            setTimeout(function () {
                loading.attr('class', 'loading')
            }, 500);
        });
    //    $("#fav-item").append(favourite(0));
   
    
    }
    
}




// -- On load --0e69699ff4e48619703dbdd3c7b904f1
$(document).ready(function(){
    // If geolocation is not supported, hide the geolocaion icon
    if (!navigator.geolocation){
        $('#geolocation').hide();
    }
    // Get default city
    var city;
    if (document.location.hash){
        // Get city from hash
        city = document.location.hash.substr(1);
    }
    else {
        // Default city
        city = "Delhi";
    }
    // Get and display current date
    date = moment();
    for (var i = 0; i < 3; i++){
        // Display date
        day = $("#meteo-day-" + (i+1));
        day.find(".name").text(date.format("dddd"));
        day.find(".date").text(date.format("DD/MM"));
        // Go to the next day
        date = date.add(1, 'days')
    }
    // Loading...
    loading = $('#search-loading');
    loading.attr('class', 'loading inload');
    // Get and update meteo
    getMeteoByCity(city, function (data, error) {
        if (error == null) {
            displayMeteo(data);
        }
        else {
            meteoTitle = $('#meteo-title span');
            meteoTitle.html('City <span class="text-muted">' + city + '</span> not found');
        }
        // Stop loader
        setTimeout(function () {
            loading.attr('class', 'loading')
        }, 500);
    });
});



$("#fav-button").on('click',function(){
    let city=$('#search-fav').val();
    getMeteoByCity(city, function (data, error){
        if (error == null) {
            arr.push(city);
            localStorage.setItem("fav-collection",JSON.stringify({arr}));
            window.location.reload();
        }
        else {
            meteoTitle = $('#meteo-title span');
            meteoTitle.html('City <span class="text-muted">' + city + '</span> not found');
        }
        // Stop loader
        setTimeout(function () {
            loading.attr('class', 'loading')
        }, 500);
    });
//    $("#fav-item").append(favourite(0));
   
})

// -- Core --
$("#meteo-form").submit(function (event) {
    // Loading...
    loading = $('#search-loading');
    loading.attr('class', 'loading inload');
    // Get and update meteo
    var city = event.currentTarget[0].value;
    getMeteoByCity(city, function (data, error){
        if (error == null) {
            displayMeteo(data);
        }
        else {
            meteoTitle = $('#meteo-title span');
            meteoTitle.html('City <span class="text-muted">' + city + '</span> not found');
        }
        // Stop loader
        setTimeout(function () {
            loading.attr('class', 'loading')
        }, 500);
    });
    // Don't refresh the page
    return false;
});

$("#geolocation").click(function (event) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // Loading...
        loading = $('#search-loading');
        loading.attr('class', 'loading inload');
        // Get latitude and longitude
        var lat = position.coords.latitude
        var lon = position.coords.longitude
        // Get and update meteo
        getMeteoByCoordinates(lat, lon, function (data, error) {
            if (error == null) {
                displayMeteo(data);
            }
            else {
                meteoTitle = $('#meteo-title span');
                meteoTitle.html('Can\'t  get meteo for your position');
            }
            // Stop loader
            setTimeout(function () {
                loading.attr('class', 'loading')
            }, 500);
        });
    });
});

function getMeteoByCity(city, callback){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=" + API_KEY,
        success: function(data){
            callback(data, null);
        },
        error: function(req, status, error){
            callback(null, error);
        }
    });
}

function getMeteoByCoordinates(lat, lon, callback){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&APPID=" + API_KEY,
        success: function(data){
            callback(data, null);
        },
        error: function(req, status, error){
            callback(null, error);
        }
    });
}

function displaySunriseSunset(lat, long){
    date = moment();
    for (var i = 0; i < 3; i++) {
        // Get sunrise and sunset
        var times = SunCalc.getTimes(date, lat, long);
        var sunrise = pad(times.sunrise.getHours(), 2) + ':' + pad(times.sunrise.getMinutes(), 2);
        var sunset = pad(times.sunset.getHours(), 2) + ':' + pad(times.sunset.getMinutes(), 2);
        // Display sunrise and sunset
        day = $("#meteo-day-" + (i + 1));
        day.find('.meteo-sunrise .meteo-block-data').text(sunrise);
        day.find('.meteo-sunset .meteo-block-data').text(sunset);
        // Go to the next day
        date = date.add(1, 'days')
    }

}

function displayMeteo(data){
    // Update Google Map URL
    googleMapCity = "https://www.google.fr/maps/place/" + data.city.coord.lat + "," + data.city.coord.lon;
    $('#meteo-title span').html('Weather in <a href="' + googleMapCity + '" class="text-muted meteo-city" target="_blank">' + data.city.name + ', ' + data.city.country + '</a>');
    // Update meteo for each day
    var tempMoyenne = 0;
    for (var i = 0; i < 3; i++){
        // Get meteo
        meteo = data.list[i*8];
        // Get DOM elements
        day = $("#meteo-day-" + (i + 1));
        icon = day.find(".meteo-temperature .wi");
        temperature = day.find(".meteo-temperature .data");
        humidity = day.find(".meteo-humidity .meteo-block-data");
        wind = day.find(".meteo-wind .meteo-block-data");
        sunrise = day.find(".meteo-sunrise .meteo-block-data");
        sunset = day.find(".meteo-sunset .meteo-block-data");
        // Update DOM
        code = meteo.weather[0].id;
        icon.attr('class', 'wi wi-owm-' + code);
        temperature.text(toCelsius(meteo.main.temp) + "°C");
        humidity.text(meteo.main.humidity + "%");
        wind.text(meteo.wind.speed + " km/h");
        tempMoyenne += meteo.main.temp;
    }
    displaySunriseSunset(data.city.coord.lat, data.city.coord.lon);
    // Get custom gradient according to the temperature
    tempMoyenne = toCelsius(tempMoyenne / 3);
    var hue1 = 30 + 240 * (30 - tempMoyenne) / 60;
    var hue2 = hue1 + 30;
    rgb1 = 'rgb(' + hslToRgb(hue1 / 360, 0.6, 0.5).join(',') + ')';
    rgb2 = 'rgb(' + hslToRgb(hue2 / 360, 0.6, 0.5).join(',') + ')';
    $('body').css('background', 'linear-gradient(' + rgb1 + ',' + rgb2 + ')');
}