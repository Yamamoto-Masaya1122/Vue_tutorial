new Vue({
  el: '#app',
  data() {
    return {
      name: 'name',
      tel: '00'
    };
  },
  computed: {
    isInValidName() {
      return this.name.length < 4;
    },
    isInValidTel() {
      const tel = this.tel;
      const isErr = tel.length < 8 || isNaN(Number(tel));
      return isErr;
    },
  }
});