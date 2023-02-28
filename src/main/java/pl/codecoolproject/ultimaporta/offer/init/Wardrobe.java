package pl.codecoolproject.ultimaporta.offer.init;

import pl.codecoolproject.ultimaporta.offer.model.Clothes;

import java.math.BigDecimal;

public class Wardrobe extends Clothes{

    Clothes Man1 = new Clothes("Suit", BigDecimal.valueOf(200.00), "Standard","male");
    Clothes Man2 = new Clothes("Tail-coat", BigDecimal.valueOf(250.00), "Medium","male");
    Clothes Woman1 = new Clothes("Suit", BigDecimal.valueOf(200.00), "Standard","female");
    Clothes Woman2 = new Clothes("Dress", BigDecimal.valueOf(250.00), "Medium","female");
    Clothes Man3 = new Clothes("Tuxedo", BigDecimal.valueOf(350.00), "Exclusive","male");
    Clothes Woman3 = new Clothes("Night Dress", BigDecimal.valueOf(350.00), "Exclusive","female");
}
