module.exports = {
  data: {
    user: {
      name: 'Jasper',
    },
  },

  introduce() {
    console.log(`My nams is ${this.data.user.name}`);
  },
};
