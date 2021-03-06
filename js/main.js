const Main = {

  init: function() {
    this.cacheSelectors();
    this.bindEvents();
  },
  
  cacheSelectors: function() {
    this.$checkButtons = document.querySelectorAll('.check');
    this.$inputText = document.querySelector('#inputText');
    this.$list = document.querySelector('#list');
    this.$removeBtn = document.querySelectorAll('.remove');
  },

  bindEvents: function() {
    
    this.$checkButtons.forEach(button => {
      button.addEventListener('click', this.Events.checkButton_click);
    });  
   
    //this.$inputText.addEventListener('keypress', self.Events.inputText_keypress.bind(this));
    this.$inputText.onkeypress = this.Events.inputText_keypress.bind(this);

    this.$removeBtn.forEach(button => {
      button.addEventListener('click', this.Events.removeBtn_click)
    });
  },
  
  Events: {
    checkButton_click: function(e) {
      e.target.parentElement.classList.toggle('done');
    },

    inputText_keypress: function(e) {
      const key = e.key;
      const value = e.target.value;

      if(key === 'Enter' && value) {
        this.$list.innerHTML += `
          <li>
            <div class="check"></div>
            <label class="task">
              ${value}
            </label>
            <button class="remove"></button>
          </li> 
        `
        e.target.value = "";
        
        this.init();
      };
    },

    removeBtn_click: function(e) {
      e.target.parentElement.classList.add('remove');

      setTimeout(() => {
        e.target.parentElement.classList.add('hidden');
      }, 280);
    },
  },
};


Main.init();