# Flunt TS

Flunt is a fluent way to validate your entities, concentrating every change you made and easy accessing it when you need.

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install the depedencies.

```bash
npm install flunt-ts
```

## Usage

```typescript
import { flunt } from 'flunt';

//create a new model and a property
class client extends flunt {
  public name: string;

  public constructor(name:string) {
     this.name = name;
     //the validate method will run the flunt for this specific model.
     Validate(); 
  }

  Validate() {
    const contract = new Contract()
        .IsNotNullOrEmptyString(
          this._name,
         'name',
         'Name should not be null or empty')
	    .IsLengthBetweenMaxMin(
          this._name, 
          15,
          3,
         'name', 
         'Name must have at least 3 characteres and maximum of 15') 
  }

}
```
```javascript
//Then, you can just validate your model and use as you please
import { Client } from './client.ts';

let client: Client;

describe('client tests should be valid', () => {
	test('a new client should be created', () => {
		//act
    client = new Client('');

	  //act
		const result = client.Valid;
		const messagesLength = client.Notifications.length;
		const errorMessage = client.Notifications.find((err) => err.message).message;
		const errorProperty = client.Notifications.find((err) => err.property).property;

		//assert
		expect(result).toBe(false);
		expect(messagesLength).toBe(1);
		expect(errorMessage).toBe('Name should not be null or empty');
		expect(errorProperty).toBe('name');
	});
});

```
> Note: You may want to check the "srx/ex" folder to see a full example.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate, and run lint and prettier always before commit.

## License
[MIT](https://choosealicense.com/licenses/mit/)