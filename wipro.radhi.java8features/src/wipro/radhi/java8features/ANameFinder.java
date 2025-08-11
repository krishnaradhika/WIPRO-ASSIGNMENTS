package wipro.radhi.java8features;
import java.util.*;
import java.util.stream.*;

public class ANameFinder {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Anita", "Ravi", "Radhi", "Geethi", "Asha", "Amma");
        List<String> aNames = names.stream()
                                   .filter(name -> name.startsWith("A"))
                                   .collect(Collectors.toList());

        // Print result
        System.out.println("Names starting with 'A':");
        aNames.forEach(System.out::println);
    }
}