const app = new Vue({

  el: '#app',
  data: {
    
    counterPhoto: 0,
    photos: [
      'img/img-1.jpg',
      'img/img-2.jpg',
      'img/img-3.jpg',
      'img/img-4.jpg'
    ]

  },

  methods:{

    nextPhoto(){
      this.counterPhoto++;
      if(this.counterPhoto === this.photos.length)this.counterPhoto = 0;
    },
    prevPhoto(){
      this.counterPhoto--;
      if(this.counterPhoto < 0)this.counterPhoto = this.photos.length - 1; 
    },
    resetPlay: function() {
      clearInterval(this.timer);
      /* this.play(); */
      console.log("minghieee");
    },
    play: function() {
      let app = this;
      this.timer = setInterval(function() {
        app.nextPhoto();
      }, 1000);
    }
  },
  created: function() {
    this.play();
  }
  
});



 