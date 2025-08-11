package wipro.radhi.java8features;
import java.util.*;

public class MethodReferenceSorter {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Chandu", "Akki", "Bindhu", "Radhi");

        // Sort using method reference
        Collections.sort(names, String::compareToIgnoreCase);

        // Print the sorted list
        names.forEach(System.out::println);
    }
}