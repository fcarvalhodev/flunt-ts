import { Notifiable } from './lib/Notifiable';

export abstract class flunt extends Notifiable {
	public constructor() {
		super();
	}

	abstract Validate(): void;
}
