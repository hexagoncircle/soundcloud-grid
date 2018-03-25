export const placeholder = {
  methods: {
    setPlaceholder(e) {
      e.target.src = this.$trackPlaceholderImg;
      e.target.classList.add('placeholder-img');
      return true;
    }
  }
}