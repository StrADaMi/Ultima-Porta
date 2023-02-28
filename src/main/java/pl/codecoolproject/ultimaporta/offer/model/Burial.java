package pl.codecoolproject.ultimaporta.offer.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.rest.webmvc.support.BackendId;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "burial")
@NoArgsConstructor
public class Burial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private BigDecimal price;

    public Burial(String name, BigDecimal price) {
        this.name = name;
        this.price = price;
    }
    public String getName() {
        return name;
    }
    public BigDecimal getPrice() {
        return price;
    }
}
