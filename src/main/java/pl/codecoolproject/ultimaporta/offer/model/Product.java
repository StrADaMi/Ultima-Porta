package pl.codecoolproject.ultimaporta.offer.model;

import java.math.BigDecimal;

public interface Product {
    String getName();
    BigDecimal getPrice();
    void setPrice(BigDecimal price);
}
