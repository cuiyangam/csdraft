export {}

interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  request(): void {
    console.log('RealSubject: Handling request');
  }
}

class Proxy implements Subject {
  private realSubject: RealSubject;
  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }
  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }
  private checkAccess(): boolean {
    console.log('Proxy: Checking access');
    return true;
  }
  private logAccess(): void {
    console.log('Proxy: Logging access');
  }
}

function clientCode(subject: Subject): void {
  subject.request();
}

console.log("Client: Executing client code with a real subject");
const realSubject = new RealSubject();
clientCode(realSubject);

console.log("Client: Executing client code with a proxy subject");
const proxy = new Proxy(realSubject);
clientCode(proxy);
