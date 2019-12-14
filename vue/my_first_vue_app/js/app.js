"use strict";

const app = new Vue ({
  //html element related to the vue instance
  el: "#app",
  //variables in the vue instance
  data: {
    data: json,
    message: "Working with Vue",
    value: 5,
    isVisible: false
  },
  //computed methods
  computed: {
    reverseMessage: function () {
      return (this.message.split (" ").reverse ().join (" "));
    }
  },
  //callable methods
  methods: {
    randomNumber (min, max) {
      return (Math.floor (Math.random () * (max + min) + min));
    },
    titleCase (string) {
      let titledString = string.split (" ").map ((word) => (word.charAt (0).toUpperCase () + word.slice (1))).join (" ");
      return (titledString);
    },
    generateRandomMessage () {
      let color = this.randomNumber (0, this.data["colors"].length);
      let fruit = this.randomNumber (0, this.data["fruits"].length);
      let message = `${this.data["colors"][color]} ${this.data["fruits"][fruit]}.`;
      return (this.titleCase (message));
    }
  },
  //code called when the DOM is mounted
  mounted () {
    let button = document.querySelector ("#message-button");
    let message_div = document.querySelector ("#message");

    button.addEventListener (("click"), (event) => {
      let message = this.generateRandomMessage ();
      message_div.innerHTML = message;
    });
  }
});