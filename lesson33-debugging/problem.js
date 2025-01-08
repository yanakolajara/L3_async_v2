class EventManager {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []; // Initialize event array if not already present
    }
    this.events[eventName].push(callback);
  }

  unsubscribe(eventName, callback) {
    if (this.events[eventName]) {
      const index = this.events[eventName].indexOf(callback);
      if (index > -1) {
        this.events[eventName].splice(index, 1); // Remove callback from the event array
      }
    } else {
      console.log(`No such event: ${eventName}`);
    }
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(data);
      });
    } else {
      console.error(`Event not found: ${eventName}`);
    }
  }
}

module.exports = EventManager;
