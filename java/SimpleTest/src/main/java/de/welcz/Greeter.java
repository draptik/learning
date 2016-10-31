package de.welcz;

public class Greeter {
    public String sayHello() {
        return sayHelloTo("World");
    }

    public String sayHelloTo(String name) {
        Guard.stringIsNotNullOrEmpty(name, "name");
        return String.format("Hello, %s!", name);
    }
}
