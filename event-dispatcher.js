class EventDispatcher {
    constructor() {
        this.listeners = {};
    }

    addEventListener(event, callback) {
        const self = this;
        return new Promise(resolve => {
            const listener = self.listeners[event] || [];
            listener.push(callback);
            self.listeners[event] = listener;
            resolve();
        });

    }

    dispatchEvent(event, ...params) {
        const self = this;
        return new Promise(resolve => {
            const listener = self.listeners[event];
            if(listener) {
                listener.forEach(cb => {
                    cb.apply(null, params);
                })
            } else {
                resolve(false);
            }
        });
    }
}

export default EventDispatcher;