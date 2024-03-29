fetch("https://swapi.dev/api/films/", { mode: "cors" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response.results);
    for (i = 0; i < response.results.length; i++) {
      let filmName = response.results[i].title;
      let div = document.createElement("div");
      switch (filmName) {
        case "A New Hope":
          div.innerHTML = `<a href = "/anewhope"><img src = "pictures/1.jpeg" alt="A New Hope Movie Poster"><br>${response.results[i].title}</img></a>`;
          document.getElementById("filmDisplay").appendChild(div);
          break;
        case "The Empire Strikes Back":
          div.innerHTML = `<a href = "/theempirestrikesback"><img src = "pictures/2.jpeg" alt="The Empire Strikes Back Movie Poster"><br>${response.results[i].title}</img></a>`;
          document.getElementById("filmDisplay").appendChild(div);
          break;
        case "Return of the Jedi":
          div.innerHTML = `<a href = "/returnofthejedi"><img src = "pictures/3.jpeg" alt="Return of the Jedi Movie Poster"><br>${response.results[i].title}</img></a>`;
          document.getElementById("filmDisplay").appendChild(div);
          break;
        case "The Phantom Menace":
          div.innerHTML = `<a href = "/thephantommenace.html"><img src = "pictures/4.jpeg" alt="The Phantom Menace Movie Poster"><br>${response.results[i].title}</img></a>`;
          document.getElementById("filmDisplay").appendChild(div);
          break;
        case "Attack of the Clones":
          div.innerHTML = `<a href = "/attackoftheclones"><img src = "pictures/5.jpeg" alt="Attack of the Clones Movie Poster"><br>${response.results[i].title}</img></a>`;
          document.getElementById("filmDisplay").appendChild(div);
          break;
        case "Revenge of the Sith":
          div.innerHTML = `<a href = "revengeofthesith"><img src = "pictures/6.jpeg" alt="Revenge of the Sith Movie Poster"><br>${response.results[i].title}</img></a>`;
          document.getElementById("filmDisplay").appendChild(div);
          break;
      }
    }
  });

