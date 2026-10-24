"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.door = false;
        this.tenants = [];
        this.key = key;
    }
    comeIn(person) {
        if (!this.door) {
            return false;
        }
        this.tenants.push(person);
        return true;
    }
    getIsOpen() {
        return this.door;
    }
    getTenantsCount() {
        return this.tenants.length;
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            return true;
        }
        return false;
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
const wrongKey = new Key();
const statusElement = document.getElementById('door-status');
const tenantElement = document.getElementById('tenant-count');
const signatureElement = document.getElementById('key-signature');
const logElement = document.getElementById('activity-log');
const enterButton = document.getElementById('enter-button');
const correctButton = document.getElementById('correct-key-button');
const wrongButton = document.getElementById('wrong-key-button');
const resetButton = document.getElementById('reset-button');
function log(message) {
    if (!logElement) {
        return;
    }
    const item = document.createElement('li');
    item.textContent = message;
    logElement.prepend(item);
}
function updateUI() {
    if (statusElement) {
        statusElement.textContent = house.getIsOpen() ? 'OPEN' : 'CLOSED';
        statusElement.className = house.getIsOpen() ? 'open' : 'closed';
    }
    if (tenantElement) {
        tenantElement.textContent = String(house.getTenantsCount());
    }
    if (signatureElement) {
        signatureElement.textContent = key.getSignature().toFixed(8);
    }
}
wrongButton?.addEventListener('click', () => {
    const opened = house.openDoor(wrongKey);
    log(opened
        ? 'Door opened.'
        : 'Access denied. Wrong key signature.');
    updateUI();
});
correctButton?.addEventListener('click', () => {
    const opened = house.openDoor(person.getKey());
    log(opened
        ? 'Access granted. The door is now open.'
        : 'Access denied.');
    updateUI();
});
enterButton?.addEventListener('click', () => {
    const entered = house.comeIn(person);
    log(entered
        ? 'Person entered the house successfully.'
        : 'Cannot enter. The door is closed.');
    updateUI();
});
resetButton?.addEventListener('click', () => {
    window.location.reload();
});
log('House created. The door is closed.');
log('Person received the matching key.');
updateUI();
//# sourceMappingURL=index.js.map