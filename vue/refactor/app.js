const RefactorTable = Vue.component ("refactor-table", {
  template: `
  <div class="table-responsive">
    <table class="table">
      <thead class="thead-dark">
        <caption>Details</caption>
        <tr>
          <th>zip_from</th>
          <th>city_from</th>
          <th>zip_to</th>
          <th>city_to</th>
          <th>hu_count</th>
          <th>dimensions</th>
          <th>weight</th>
          <th>nmfc</th>
          <th>commodity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="quote in array">
          <td v-for="(entity, index) in quote">
            <input style="border: none;" type="text" v-model='entity'
            @blur="updateEntity(quote, index, entity); recalculateNMFC(index)" @keyup.enter="$event.target.blur()">
          </td>
          <td>
            <button class="btn fa fa-trash" @click="deleteQuote(quote)"></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  data: function () {
    return ({
      array: [
        {
          "zip_from": "12345",
          "city_from": "Miami, FL",
          "zip_to": "54321",
          "city_to": "",
          "hu_count": "2 pallets", 
          "dimensions": "30x30x30 inch",
          "weight": "300 lb",
          "nmfc": "500",
          "commodity": "aircraft parts"
        },
        {
          "zip_from": "54321",
          "city_from": "",
          "zip_to": "12345",
          "city_to": "Kansas",
          "hu_count": "3 pallets", 
          "dimensions": "40x40x40 inch",
          "weight": "500 lb",
          "nmfc": "300",
          "commodity": "bobinas"
        }
      ]
    });
  },
  methods: {
    updateEntity: function (quote, index, entity) {
      quote[index] = entity;
    },
    deleteQuote: function (quote) {
      console.log ("deleteQuote")
      this.array = this.array.filter ((element) => {
        return (element != quote);
      });
    },
    recalculateNMFC: function (entity) {
      if (entity == "hu_count" || entity == "dimensions" || entity == "weight")
        console.log ("I'm recalculating NMFC :)");
    },
  },
  mounted: function () {
    console.log (this.palletArray);
  }
});

let app = new Vue ({
  el: "#app",
});