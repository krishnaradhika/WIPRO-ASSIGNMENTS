package wipro.radhi.java8features;
interface MessagePrinter {
 void print(String message);
}

public class GreetingsPrinter{
 public static void greet(String name, MessagePrinter printer) {
     String message = "Hello, " + name + "!";
     printer.print(message);
 }

 public static void main(String[] args) {
     greet("Radhika", msg -> System.out.println(msg));
 }
}