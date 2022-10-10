const dog = {
  name: "Hachiko",
  size: "Big",
  color: "brown",

  giveVoice() {
    console.log("Hau Hau");
  },

  getDog() {
    return [this.size, this.color, this.name].join(' ')
  },
};

console.log(dog.getDog());