import UUID from './uuid';
class EventDispatcher {
    constructor() {
        this.listeners = {};
    }

    addEventListener(event, callback) {
        const self = this;
        return new Promise(resolve => {
            const listener = self.listeners[event] || [];
            const id = UUID.generate();
            listener.push({
                id,
                callback
            });
            self.listeners[event] = listener;
            resolve(id);
        });

    }

    dispatchEvent(event, ...params) {
        const self = this;
        return new Promise(resolve => {
            const listener = self.listeners[event];
            if(listener) {
                listener.forEach(cb => {
                    cb.callback.apply(null, params);
                })
            } else {
                resolve(false);
            }
        });
    }

    removeEventListeners(event) {
        delete this.listeners[event];
    }

    removeEventListener(event, id) {
        let found = false;
        let listeners =  this.listeners[event];
        if(listeners) {
            listeners = listeners.filter(item => {
                return item.id !== id;
            });
            found = this.listeners.length !== listeners.length
            this.listeners[event] = listeners;
        }
        return found;
    }

    removeEventListenerById(id) {
        let found = false;
        for (const prop in this.listeners) {
            found = this.removeEventListener(prop, id)
        }
        return found;
    }
}

export default EventDispatcher;