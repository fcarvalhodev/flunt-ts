import { Notifiable } from './Notifiable';

export class Contract extends Notifiable {
	public IsNotNull(Value: any, Property: string, Message: string): Contract {
		if (Value === null) {
			this.Result(Property, Message);
		}
		return this;
	}

	public IsNotEmptyString(Value: string, Property: string, Message: string): Contract {
		if (Value === '') this.Result(Property, Message);
		return this;
	}

	public IsNotNullOrEmptyString(Value: string, Property: string, Message: string): Contract {
		if (Value === '' || Value === null) this.Result(Property, Message);
		return this;
	}

	public AreEquals(Value1: any, Value2: any, Property: string, Message: string): Contract {
		if (!(Value1 === Value2)) {
			this.Result(Property, Message);
		}
		return this;
	}

	public IsBetweenMaxMin(Value: number, Max: number, Min: number, Property: string, Message: string): Contract {
		if (Value <= Min || Value >= Max) {
			this.Result(Property, Message);
		}

		return this;
	}

	public IsLengthBetweenMaxMin(Value: any, Max: number, Min: number, Property: string, Message: string): Contract {
		if (Value) {
			if (Value.length <= Min || Value.length >= Max) {
				this.Result(Property, Message);
			}
		}
		return this;
	}

	public IsLengthBiggerThan(Value: any, Min: number, Property: string, Message: string): Contract {
		if (Value) {
			if (Value.length > Min) this.Result(Property, Message);
		}
		return this;
	}

	public IsLengthLessThan(Value: any, Max: number, Property: string, Message: string): Contract {
		if (Value) {
			if (Value.length < Max) this.Result(Property, Message);
		}
		return this;
	}

	public IsBiggerThan(Value: number, Min: number, Property: string, Message: string): Contract {
		if (Value < Min) this.Result(Property, Message);

		return this;
	}

	public IsLessThan(Value: number, Max: number, Property: string, Message: string): Contract {
		if (Value > Max) this.Result(Property, Message);

		return this;
	}

	public IsExactlyLength(Value: any, Size: number, Property: string, Message: string): Contract {
		if (Value) {
			const result = Value !== null && Value !== '' ? true : false;
			if (result) {
				if (Value.length !== Size) this.Result(Property, Message);
			}
		}
		return this;
	}

	public IsEmail(Value: string, Property: string, Message: string): Contract {
		if (Value) {
			const result =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
					Value.toString()
				);
			if (!result) {
				this.Result(Property, Message);
			}
		}
		return this;
	}

	public IsUrl(Value: any, Property: string, Message: string): Contract {
		if (Value) {
			const result = new RegExp(
				'^(https?:\\/\\/)?' +
					'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
					'((\\d{1,3}\\.){3}\\d{1,3}))' +
					'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
					'(\\?[;&a-z\\d%_.~+=-]*)?' +
					'(\\#[-a-z\\d_]*)?$',
				'i'
			).test(Value);
			if (!result) {
				this.Result(Property, Message);
			}
		}
		return this;
	}

	public IsNotUrl(Value: any, Property: string, Message: string): Contract {
		if (Value) {
			const result = new RegExp(
				'^(https?:\\/\\/)?' +
					'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
					'((\\d{1,3}\\.){3}\\d{1,3}))' +
					'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
					'(\\?[;&a-z\\d%_.~+=-]*)?' +
					'(\\#[-a-z\\d_]*)?$',
				'i'
			).test(Value);
			if (result) {
				this.Result(Property, Message);
			}
		}
		return this;
	}

	public IsAlphanumeric(Value: any, Property: string, Message: string): Contract {
		if (Value) {
			const result = new RegExp('/^[a-z0-9]+$/i').test(Value);
			if (result) {
				this.Result(Property, Message);
			}
		}
		return this;
	}

	public IsNumber(Value: any, Property: string, Message: string): Contract {
		if (Value) {
			const result = isNaN(Value);
			if (!result) {
				this.Result(Property, Message);
			}
		}
		return this;
	}

	protected Result(Property: string, Message: string): void {
		this.AddNotification(Property, Message);
		this.Valid = false;
	}
}
