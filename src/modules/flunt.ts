import { Notifiable } from '../lib/Notifiable';
import { Contract } from '../lib/Contract';

abstract class Flunt extends Notifiable {
	public constructor() {
		super();
	}

	abstract Validate(): void;
}

export { Flunt, Contract };
