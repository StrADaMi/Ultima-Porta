package pl.codecoolproject.ultimaporta.offer.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "clothes")
@NoArgsConstructor
public class Clothes implements Product{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "price")
    private BigDecimal price;
    @Column(name = "type")
    private String type;
    @Column(name = "gender")
    private String gender;

    public Clothes(String name, BigDecimal price, String type, String gender) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.gender = gender;
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
    public String getGender() {
        return gender;
    }
}
