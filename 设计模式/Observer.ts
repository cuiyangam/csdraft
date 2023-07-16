export {}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  public state:number=0;
  private observers: Observer[] = [];
  public attach(observer: Observer): void {
    if(!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }
  public detach(observer: Observer): void {
    if(this.observers.includes(observer)) {
      this.observers.splice(this.observers.indexOf(observer), 1);
    }
  }
  public notify(): void {
    this.observers.forEach(observer => observer.update(this));
  }
  public someBusinessLogic(): void {
    this.state = Math.floor(Math.random() * 10);
    this.notify();
  }
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
  public update(subject: ConcreteSubject): void {
    console.log(`ConcreteObserverA: ${subject.state}`);
  }
}

class ConcreteObserverB implements Observer {
  public update(subject: ConcreteSubject): void {
    console.log(`ConcreteObserverB: ${subject.state}`);
  }
}

const subject = new ConcreteSubject();
const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();
subject.attach(observerA);
subject.attach(observerB);
subject.someBusinessLogic();
subject.detach(observerA);
subject.someBusinessLogic();
