const tamogotchi = {
    name: 'egg',
    meal: 0,
    energy: 2,
    mood: 4,
    getStatus: function () {
        // if(this.meal < 3) {
        //     this.meal= 'Я голоден';
        // } else {
        //     this.meal= 'Я не голоден';
        // }
        // if(this.energy < 3) {
        //     this.energy = 'Я хочу спать"';
        // } else {
        //     this.energy = 'Я не хочу спать';
        // }
        // if(this.mood < 3) {
        //     this.energy = 'Мне скучно';
        // } else {
        //     this.energy = 'Мне весело';
        // }
        // console.log(`Имя: ${this.name}, Еда: ${this.meal}, Энергия: ${this.energy}, Настроение:${this.mood}`);
        if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log(`${this.name} умер :(.`);
        }
    },
    setName: function (name) {
        this.name = name
    },
    toEat: function(){
        if(this.meal < 5) {
            this.meal++
        }
        this.mood--
    },
    toSleep: function() {
        if(this.energy < 5) {
            this.energy++
        }
        this.meal--
    },
    toPlay: function() {
        if(this.mood < 5) {
            this.mood++
        }
        this.energy--
    }
}
tamogotchi.getStatus()
