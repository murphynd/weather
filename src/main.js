import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  $("#weatherLocation").click(function () {
    const city = $("#location").val();
    $("#location").val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9faeaeb4032def9f1c91c2b5f8fe47b0`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        debugger;
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $(".showHumidity").text(`The humidity in ${city} is ${response.main.humidity}%`);
      $(".showTemp").text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
