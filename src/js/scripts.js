const container = document.getElementById("container");
const leftBtn = document.getElementById("leftButton");
const rightBtn = document.getElementById("rightButton");

const moviesData = [
  {
    img: "dune.jpg",
    title: "Dune",
    desc: "A mythic and emotionally charged hero's journey, 'Dune' tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
  },
  {
    img: "hobbs_shaw.jpg",
    title: "Hobbs & Shaw",
    desc: "Lawman Luke Hobbs (Dwayne 'The Rock' Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
  },
  {
    img: "james_bond.jpg",
    title: "James Bond: No Time To Die",
    desc: "James Bond has retired and lives quietly in Jamaica, but everything changes when his friend from the CIA, Felix Leiter, asks him to help him stop an enigmatic villain who has state-of-the-art weapons.",
  },
];

leftBtn.addEventListener("click", () => {
  function throwObjectKeys(obj) {
    for (k in obj) {
      console.log(obj[k].title);
    }
  }
  throwObjectKeys(moviesData);
});

rightBtn.addEventListener("click", () => {
  console.log("You clicked the right button");
});
