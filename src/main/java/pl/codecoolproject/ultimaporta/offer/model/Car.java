package pl.codecoolproject.ultimaporta.offer.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "car")
@NoArgsConstructor
public class Car implements Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private BigDecimal price;
    @Column(name = "type")
    private String type;

    public Car(String name, BigDecimal price, String type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public BigDecimal getPrice() {
        return price;
    }

    @Override
    public void setPrice(BigDecimal price) {

    }
    public String getType() {
        return type;
    }
}
