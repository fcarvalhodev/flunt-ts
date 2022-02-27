# Flunt TS

Flunt is a fluent way to validate your entities, concentrating every change you made and easy accessing it when you need.

# Git

[check the repo](https://github.com/fcarvalhodev/flunt-ts/)

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install the depedencies.

```bash
npm install flunt-ts
```

## Usage

```typescript
import { Contract, Flunt } from '../node-modules/flunt-ts/src/modules/flunt';

export class TodoItem extends flunt {

    public id: number;
    public task: string;
    public complete: boolean = false;

    public constructor(id: number, task: string, complete: boolean = false) {
        super();
        this.id = id;
        this.task = task;
        this.complete = complete;
        Validate();
    }

    Validate(): void {
        const contract = new Contract()
            .IsNotNull(this.id, 'id', 'id cant be null')
    }
}
```

> Note: You may want to check the "src/ex" folder to see a full example.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate, and run lint and prettier always before commit.

## License
[MIT](https://opensource.org/licenses/MIT)
