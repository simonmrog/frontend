<template>
  <div id="app">
    <input type="text" placeholder="Option" v-model="tab">
    <QueueInfo v-if="tab == 1"></QueueInfo>
    <FailedInfo v-if="tab == 3"></FailedInfo>
    <SentInfo v-if="tab == 4"></SentInfo>
  </div>
</template>

<script>
import QueueInfo from './components/QueueInfo.vue';
import FailedInfo from './components/FailedInfo.vue';
import SentInfo from './components/SentInfo.vue';

export default {
  name: 'App',
  components: {
    QueueInfo,
    FailedInfo,
    SentInfo
  },
  data: function () {
    return ({
      tab: 1
    });
  }
}
</script>

<style>
</style>
