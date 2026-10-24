# HW-42-TypeScript

TypeScript OOP homework.

## Classes

- `Key` generates a random signature.
- `Person` stores a key and returns it with `getKey()`.
- `House` is an abstract class with a door, key, and tenants.
- `MyHouse` implements `openDoor()` and checks the key signature.

## Run

```bash
npm install
npm run build
```

Open `index.html` with Live Server.

## Test

1. Try entering with the door closed.
2. Try opening the door with the wrong key.
3. Open the door with the correct key.
4. Enter the house.
5. Confirm that the tenant count increases.