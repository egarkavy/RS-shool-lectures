export class Observable<T> {
    private subscribers: ((next: T) => void)[] = [];
    private operationResult: T;

    constructor(initialValue: T) {
        this.operationResult = initialValue;
    }

    public subscribe(subscribeCb: (next: T) => void): void {
        this.subscribers.push(subscribeCb);

        this.notify([subscribeCb]);
    }

    public next(value: T): void {
        this.operationResult = value;
        
        this.notify();
    }

    private notify(subscribers = this.subscribers): void {
        subscribers.forEach(subscriber => {
            subscriber(this.operationResult)
        })
    }
}