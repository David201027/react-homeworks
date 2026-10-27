function getPromise(): Promise<(string | number)[]> {
  return new Promise(resolve => {
    resolve(['Text', 50]);
  });
}

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, 'name' | 'color'>,
  bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function merge<T extends object, U extends object>(
  objA: T,
  objB: U
): T & U {
  return Object.assign({}, objA, objB);
}

class Component<T> {
  constructor(public props: T) {}
}

interface PageProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

const compared = compare(
  { name: 'Max', color: 'blue' },
  { position: 5, weight: 70 }
);

const merged = merge(
  { name: 'Alex', age: 25 },
  { role: 'Developer', active: true }
);

const page = new Page({
  title: 'TypeScript Generics',
});

const resultsElement = document.getElementById('results');
const logElement = document.getElementById('console-output');

function addResult(title: string, code: string, result: string): void {
  if (!resultsElement) {
    return;
  }

  const card = document.createElement('article');
  card.className = 'card';

  const heading = document.createElement('h2');
  heading.textContent = title;

  const codeElement = document.createElement('pre');
  codeElement.textContent = code;

  const resultElement = document.createElement('p');
  resultElement.textContent = result;

  card.append(heading, codeElement, resultElement);
  resultsElement.appendChild(card);
}

function addLog(message: string): void {
  if (!logElement) {
    return;
  }

  const line = document.createElement('div');
  line.textContent = message;
  logElement.appendChild(line);
}

addResult(
  '01 / Promise',
  'Promise<(string | number)[]>',
  'Returns an array containing strings and numbers.'
);

addResult(
  '02 / Pick',
  "Pick<AllType, 'name' | 'color'>",
  JSON.stringify(compared)
);

addResult(
  '03 / Generic merge',
  'merge<T extends object, U extends object>',
  JSON.stringify(merged)
);

addResult(
  '04 / Generic class',
  'class Page extends Component<PageProps>',
  page.props.title
);

getPromise().then(data => {
  console.log(data);
  addLog(`Promise resolved: ${JSON.stringify(data)}`);
});

page.pageInfo();
addLog(`Page title: ${page.props.title}`);
addLog(`Compare result: ${JSON.stringify(compared)}`);
addLog(`Merge result: ${JSON.stringify(merged)}`);