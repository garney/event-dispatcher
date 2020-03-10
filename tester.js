// import EventDispatcher from 'event-dispatcher';
const EventDispatcher = require('./dist/index');

class CountDown extends EventDispatcher {
    constructor(num = 10) {
        super();
        this.num = num;
    }
    start() {
        if(!this.myTimer) {
            this.myTimer = setInterval(() => {
                this.dispatchEvent(CountDown.Events.TICK, this.num);
                this.num -= 1;
                if(this.num <= 0) {
                    clearInterval(this.myTimer);
                    this.dispatchEvent(CountDown.Events.WOOHOO);
                    this.myTimer = undefined;
                }
            }, 1000)
        }
    }
}

CountDown.Events = {
    TICK: 'TICK',
    WOOHOO: 'WOOHOO'
};
let eventId, eventId2;
const myCounter = new CountDown(10);
const cb = (data) => {
    console.log(data);
    // if(data === 6) {
    //     myCounter.removeEventListeners(CountDown.Events.TICK);
    // }
    if(data === 3) {
        console.log(myCounter.removeEventListenerById(eventId));
    }
    if(data === 5) {
        console.log(myCounter.removeEventListener(CountDown.Events.TICK, eventId2));
    }
};
myCounter.addEventListener(CountDown.Events.TICK, cb).then(id => {
    console.log('event id', id);
    eventId = id;
});

myCounter.addEventListener(CountDown.Events.TICK, cb).then(id => {
    console.log('event2 id', id);
    eventId2 = id;
});

myCounter.addEventListener(CountDown.Events.WOOHOO, () => {
    console.log('Woo Hoo');
});

myCounter.start();
