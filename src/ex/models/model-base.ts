import { Notifiable } from '../../lib/Notifiable';

export abstract class ModelBase extends Notifiable {
	public constructor() {
		super();
	}

	abstract Validate(): void;
}
