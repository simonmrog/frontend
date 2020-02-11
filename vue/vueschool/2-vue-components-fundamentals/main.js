const PlanComponent = {
  template: "#plan-template",
  props: {
    name: String
  }
};

const PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    plane: PlanComponent
  },
  data () {
    return ({
      plans: ["the hacker", "addicted"]
    });
  }
};

new Vue ({
  el: "#app",
  components: {
    PlanPicker: PlanPickerComponent
  }
});