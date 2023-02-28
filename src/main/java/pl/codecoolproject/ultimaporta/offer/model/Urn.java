package pl.codecoolproject.ultimaporta.offer.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "urns")
@NoArgsConstructor
public class Urn implements Product{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "type")
    private String type;

    @Column(name = "colour")
    private String colour;

    @Column(name = "material")
    private String material;

    public Urn(String name, BigDecimal price, String type, String colour, String material) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.colour = colour;
        this.material = material;
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
    public String getColour() {
        return colour;
    }
    public String getMaterial() {
        return material;
    }
}
