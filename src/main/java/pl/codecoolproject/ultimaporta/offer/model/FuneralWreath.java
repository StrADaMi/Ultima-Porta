package pl.codecoolproject.ultimaporta.offer.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "FuneralWreath")
@NoArgsConstructor
public class FuneralWreath implements Product{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private BigDecimal price;
    @Column(name = "size")
    private String size;
    @Column(name = "flowers")
    private String flowers;

    public FuneralWreath(String name, BigDecimal price, String size, String flowers) {
        this.name = name;
        this.price = price;
        this.size = size;
        this.flowers = flowers;
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
    public String getSize() {
        return size;
    }
    public String getFlowers() {
        return flowers;
    }
}
