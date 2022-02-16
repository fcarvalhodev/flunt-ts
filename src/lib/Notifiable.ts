class Notification {
	message: string;
	property: string;

	constructor(Message: string, Property: string) {
		this.message = Message;
		this.property = Property;
	}
}

export abstract class Notifiable {
	private _notifications: Array<Notification> = new Array<Notification>();
	private _valid = true;
	private _watcher = true;

	public AddNotification(Property: string, Message: string): void {
		const newNotification = new Notification(Message, Property);
		if (!(this._notifications.filter((me) => me.message === Message).length > 0))
			this._notifications.push(newNotification);
	}

	public get Valid() {
		return this._valid;
	}

	public set Valid(valid: boolean) {
		this._watcher = this._watcher ? valid : this._watcher;
		this._valid = valid && this._watcher ? valid : this._watcher;
	}

	public get Notifications() {
		return this._notifications;
	}

	public set Notifications(notifications: Array<Notification>) {
		this._notifications = notifications;
	}
}
