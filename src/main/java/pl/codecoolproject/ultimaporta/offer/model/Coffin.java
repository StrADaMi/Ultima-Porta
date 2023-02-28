package pl.codecoolproject.ultimaporta.offer.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "coffins")
@NoArgsConstructor
public class Coffin implements Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "type")
    private String type;

    @Column(name = "wood_type")
    private String woodType;

    @Column(name = "size")
    private String size;

    public Coffin(String name, BigDecimal price, String type, String woodType, String size) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.woodType = woodType;
        this.size = size;
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
        this.price = price;
    }
    public String getType() {
        return type;
    }
    public String getWoodType() {
        return woodType;
    }
    public String getSize () {
        return size;
    }
}
