<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="thead-dark">
        <caption>Details</caption>
        <tr>
          <th>ZIP_FROM</th>
          <th>CITY_FROM</th>
          <th>ZIP_TO</th>
          <th>CITY_TO</th>
          <th>HU_COUNT</th>
          <th>DIMENSIONS</th>
          <th>WEIGHT</th>
          <th>NMFC</th>
          <th>COMMODITY</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="quote in tableArray">
          <td v-for="(entity, index) in quote">
            <input type="text" v-model="quote[index]"
            @blur="updateEntity(quote, index, entity); recalculateNMFC(index)"
            @keyup.enter="$event.target.blur()">
          </td>
          <td>
            <button class="btn fa fa-trash" @click="deleteQuote(quote)"></button>
          </td>
        </tr>
        <tr>
          <td v-for="(entity, index) in totals">
            <label>{{ entity }}</label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "QuoteTable",
  props: {
    tableArray: Array
  },
  computed: {
    totals: function () {
      let totalsObject = {
          zip_from: "TOTALS:",
          city_from: "",
          zip_to: "",
          city_to: "",
          hu_count: "5 pallets", 
          dimensions: "333 CBF",
          weight: "1000 lb",
          nmfc: "",
          commodity: "",
        }
        return (totalsObject);
    }
  },
  methods: {
    updateEntity: function (quote, index, entity) {
      quote[index] = entity;
      console.log (entity);
    },
    deleteQuote: function (quote) {
      console.log ("deleteQuote")
      this.tableArray = this.tableArray.filter ((element) => {
        return (element != quote);
      });
    },
    recalculateNMFC: function (entity) {
      if (entity == "hu_count" || entity == "dimensions" || entity == "weight")
        console.log ("I'm recalculating NMFC :)");
    },
  },
  mounted: function () {
    console.log (this.tableArray);
  }
}
</script>

<style scoped>
  input {
    border: none;
  }
</style>