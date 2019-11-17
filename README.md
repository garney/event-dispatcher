# event-dispatcher
Super class to dispatch events

## Background
I wanted to create a  class to handle my events that's not shared globally

## Installation

```bash
npm install --save-dev event-dispatcher
```

## Usage

```js
import EventDispatcher from 'event-dispatcher';

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

const myCounter = new CountDown(10);

myCounter.addEventListener(CountDown.Events.TICK, (data) => {
    console.log(data);
});

myCounter.addEventListener(CountDown.Events.WOOHOO, () => {
    console.log('Woo Hoo');
});

myCounter.start();

```