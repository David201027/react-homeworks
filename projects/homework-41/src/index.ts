const age: number = 50;
const userName: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const notInitialize: undefined = undefined;
const callback: (a: number) => number = (a: number): number => {
  return 100 + a;
};

let anything: any = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
  console.log(str);
}

const person: readonly [string, number] = ['Max', 21];

enum LoadingStatus {
  LOADING = 'LOADING',
  READY = 'READY',
}

let value: string | number = 'Hello';
value = 42;

let switchState: 'enable' | 'disable' = 'enable';
switchState = 'disable';

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

function renderResults(): void {
  const output = document.getElementById('results');

  if (!output) {
    return;
  }

  const results: Array<[string, string]> = [
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

  errorButton?.addEventListener('click', () => {
    try {
      customError();
    } catch (error) {
      if (error instanceof Error) {
        showMessage(error.message);
      }
    }
  });
}

showMessage('TypeScript homework loaded');
renderResults();
