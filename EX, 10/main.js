const dog = {
  name: "Hachiko",
  size: "Big",
  color: "brown",

  giveVoice() {
    console.log("Hau Hau");
  },

  getDog() {
    let properties = Object.values(dog);
    let str = '';
    properties.slice(0, 3).map((element) => {
      str += (element + ' ');
    });
    return str;
  },
};

console.log(dog.getDog());