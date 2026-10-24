"use strict";
const age = 50;
const userName = 'Max';
const toggle = true;
const empty = null;
const notInitialize = undefined;
const callback = (a) => {
    return 100 + a;
};
let anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
    console.log(str);
}
const person = ['Max', 21];
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus["LOADING"] = "LOADING";
    LoadingStatus["READY"] = "READY";
})(LoadingStatus || (LoadingStatus = {}));
let value = 'Hello';
value = 42;
let switchState = 'enable';
switchState = 'disable';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    },
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
function renderResults() {
    const output = document.getElementById('results');
    if (!output) {
        return;
    }
    const results = [
        ['1. Primitive types', `${userName}, ${age}, ${toggle}, ${empty}, ${notInitialize}`],
        ['1. Typed callback', String(callback(25))],
        ['2. Any', JSON.stringify(anything)],
        ['3. Unknown narrowing', str],
        ['5. Readonly tuple', JSON.stringify(person)],
        ['6. Enum', `${LoadingStatus.LOADING} â†’ ${LoadingStatus.READY}`],
        ['7. Union', String(value)],
        ['8. Literal union', switchState],
        ['9. Typed functions', `calc(10, 20) = ${calc(10, 20)}`],
        ['10. Page 1', `${page1.title} â€” ${page1.likes} likes`],
        ['10. Page 2', `${page2.title} â€” ${page2.status}`],
    ];
    output.innerHTML = '';
    results.forEach(([label, result]) => {
        const item = document.createElement('article');
        item.className = 'result';
        const heading = document.createElement('h2');
        heading.textContent = label;
        const description = document.createElement('p');
        description.textContent = result;
        item.append(heading, description);
        output.appendChild(item);
    });
    const errorButton = document.getElementById('error-button');
    errorButton === null || errorButton === void 0 ? void 0 : errorButton.addEventListener('click', () => {
        try {
            customError();
        }
        catch (error) {
            if (error instanceof Error) {
                showMessage(error.message);
            }
        }
    });
}
showMessage('TypeScript homework loaded');
renderResults();
//# sourceMappingURL=index.js.map