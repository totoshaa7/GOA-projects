class Cuboid {
    constructor(length, width, height) {
      this.length = length;
      this.width = width;
      this.height = height;
    }
  
    getVolume() {
      return this.length * this.width * this.height;
    }
  }
  