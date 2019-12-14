class Banknotes {

  constructor (faceValue, quantity) {

    this.faceValue = faceValue;
    this.quantity = quantity;
    this.image = new Image();
    this.image.src = images[this.faceValue];
  }
}
