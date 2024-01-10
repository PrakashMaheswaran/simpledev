// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial

let out = document.querySelector(".class3");
      document.querySelector(".submit").addEventListener("click", () => {
        let city = document.querySelector(".inputcity").value;
        document.querySelector(".inputcity").value = "";
        if (city === "") {
          alert("enter the city name");
        } else {
          const Apikey = "b546fc350c0dc7aa5ec336d12848ac85";
          let url = "http://api.openweathermap.org/data/2.5/weather";
          let fetchRes = fetch(
            `${url}?q=${city}&appid=${Apikey}&units=imperial`
          );
          fetchRes.then((res) => {
              if (!res.ok) {
                out.innerHTML=`<p>Status: ${res.status}</p> <br>`;
                // console.log(`HTTP error! Status: ${res.status}`);
              }
              return res.json();
            }).then((d) => {
              out.innerHTML = `
                <p>city Name : ${d.name}</p>
                <p>Country : ${d.sys.country}</p>
                <p>description : ${d.weather[0].description}</p>
                <p>temp : ${d.main.temp}</p>
                <p>humidity : ${d.main.humidity}</p>`;
            })
            .catch((error) => {
              // console.error("Fetch error:", error);
                out.innerHTML += `<p>Error fetching data. Please try again later.</p>`;
            });
        }
      });