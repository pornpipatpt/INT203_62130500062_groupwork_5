const app = Vue.createApp({
  data() {
    return {
      photos: [
        { no: "1", url: "images/cat.jfif", title: "Cat", done: false },
        { no: "2", url: "images/dog.jfif", title: "Dog", done: false },
        { no: "3", url: "images/rabbit.jfif", title: "Rabbit", done: false },
        { no: "4", url: "images/wolf.jfif", title: "Wolf", done: false },
        { no: "5", url: "images/monkey.jfif", title: "Monkey", done: false },
        { no: "6", url: "images/turtle.jfif", title: "Turtle", done: false },
      ],
      searchbutton: false,
      text: "",
      viewing: {
        hasView: false,
        viewImg: "",
      },

      setClick: {
        delay: 200,
        clicks: 0,
        timer: null,
      },
    };
  },

  methods: {
    toggle(photo) {
      this.setClick.clicks++;
      if (this.setClick.clicks === 1) {
        this.timer = setTimeout(() => {
          this.photos[photo.no - 1].done = !this.photos[photo.no - 1].done;
          this.setClick.clicks = 0;
        }, this.setClick.delay);
      } else {
        clearTimeout(this.setClick.timer);
        this.toggleView(photo);
        this.setClick.clicks = 0;
      }
    },

    search() {
      this.searchbutton = !this.searchbutton;
      this.text = "";
    },

    toggleView(photo) {
     
      this.viewing.viewImg = this.photos[photo.no - 1].url;
      this.viewing.hasView = !this.hasView;
      
    },
    distoggleView() {
      this.viewing.viewImg = "";
      this.viewing.hasView = false;
    },
  },
  computed: {
    countUndone() {
      return this.photos.filter((t) => t.done).length;
    },
    searching() {
      return this.photos.filter((pic) => {
        return pic.title.toLowerCase().includes(this.text.toLowerCase());
      });
    },
  },
});
