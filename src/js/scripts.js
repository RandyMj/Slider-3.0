const container = document.getElementById("container");
const middleSquare = document.getElementById("middle-square");
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
  {
    img: "god_king.jpg",
    title: "Godzilla vs Kingkong",
    desc: "Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond. But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe.",
  },
];

const numberOfElements = moviesData.length;
const translationPercent = 100 / numberOfElements;
let containerSizeCalc = 100 * numberOfElements;
let position = 0;
let positionCalc = 0;

function addElement(arr) {
  for (element in arr) {
    let newElement = document.createElement("div");
    newElement.setAttribute("class", "container_middle-square");
    container.append(newElement);
    newElement.innerHTML = `
      <div class="img-container">
        <img src="./src/assets/${arr[element].img}" alt="" />
      </div>
      <div class="text-container">
        <h1 class="movie-title">${arr[element].title}</h1>
        <p class="movie-description">${arr[element].desc}</p>
      </div>`;
  }
}

function resizingContainer() {
  let newContainerSize = (container.style.width = `${containerSizeCalc}%`);
  return newContainerSize;
}

function resizingMiddleSquare() {
  let middleSquareSizeCalc = containerSizeCalc / numberOfElements;
  let newMiddleSquareSize =
    (middleSquare.style.width = `${middleSquareSizeCalc}%`);
  return newMiddleSquareSize;
}

rightBtn.addEventListener("click", () => {
  if (position == numberOfElements - 1) {
    position = 0;
    positionCalc = position * translationPercent;
  } else if (position >= 0) {
    position++;
    positionCalc = position * translationPercent;
  }
  container.style.transform = `translateX(-${positionCalc}%)`;
  console.log(positionCalc);
});

leftBtn.addEventListener("click", () => {
  if (position == 0) {
    position = numberOfElements - 1;
    positionCalc = position * -translationPercent;
  } else if (position <= numberOfElements - 1) {
    position--;
    positionCalc = position * -translationPercent;
  }
  container.style.transform = `translateX(${positionCalc}%)`;
  console.log(positionCalc);
});

addElement(moviesData);
resizingContainer();
resizingMiddleSquare();
