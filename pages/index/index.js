import UserMixin from './user_mixin';

Page({
  mixins: [UserMixin],

  data: {
    message: 'Hello',
  },

  onLoad() {
    this.introduce();
  },
});
