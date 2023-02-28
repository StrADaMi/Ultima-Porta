package pl.codecoolproject.ultimaporta.offer.services;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;
@Service
public class CoffinPriceCalculator {


    //custom coffin price creator?
    public BigDecimal calculateCoffinPrice(String woodType, String size, String type) {
        BigDecimal basePrice = BigDecimal.ZERO;
        switch (woodType) {
            case "pine":
                basePrice = new BigDecimal(1000);
                break;
            case "oak":
                basePrice = new BigDecimal(1500);
                break;
            case "mahogany":
                basePrice = new BigDecimal(2000);
                break;
        }
        switch (size) {
            case "small":
                basePrice = basePrice.add(new BigDecimal(500));
                break;
            case "medium":
                basePrice = basePrice.add(new BigDecimal(1000));
                break;
            case "large":
                basePrice = basePrice.add(new BigDecimal(1500));
                break;
        }
        switch (type) {
            case "papal":
                basePrice = basePrice.add(new BigDecimal(500));
                break;
            case "standard":
                basePrice = basePrice.add(new BigDecimal(300));
                break;
        }
        return basePrice;
    }
}
