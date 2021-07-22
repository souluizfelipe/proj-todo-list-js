const Main = {

  init: function() {
    this.cacheSelectors();
    this.bindEvents();
  },
  
  cacheSelectors: function() {
    this.$checkButtons = document.querySelectorAll('.check');
  },

  bindEvents: function() {
    this.$checkButtons.forEach(button => {
      button.addEventListener('click', this.Events.checkButton_click  );
   })
  },
  
  Events: {
    checkButton_click: function(e) {
      e.target.parentElement.classList.toggle('done');
    }
  },
};


Main.init();