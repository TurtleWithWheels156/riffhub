import Component from '@ember/component';

export default Component.extend({
    theme: 0,
    actions: {
    changeTheme() {
      console.log('changing theme: ' + this.theme);
      this.theme++;
    },
  },
});
