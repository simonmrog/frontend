<template>
  <div id="info-template">
    <header>
      <h1>{{title}}</h1>
    </header>
    <QuoteTable :tableArray="tableArray"></QuoteTable>
  </div>
</template>

<script>
import QuoteTable from "./QuoteTable.vue";

export default {
  name: "InfoTemplate",
  props: {
    title: String
  },
  components: {
    QuoteTable
  },
  data: function () {
    return ({
      tableArray: [
        {
          zip_from: "12345",
          city_from: "Miami, FL",
          zip_to: "54321",
          city_to: "",
          hu_count: "2 pallets", 
          dimensions: "30x30x30 inch",
          weight: "300 lb",
          nmfc: "500",
          commodity: "aircraft parts"
        },
        {
          zip_from: "54321",
          city_from: "",
          zip_to: "12345",
          city_to: "Kansas",
          hu_count: "3 pallets", 
          dimensions: "40x40x40 inch",
          weight: "500 lb",
          nmfc: "300",
          commodity: "bobinas"
        }
      ]
    });
  },
}
</script>

<style scoped>
</style>