package pl.codecoolproject.ultimaporta.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.annotation.Generated;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class RepresentOfTheDeath {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    private String lastName;



}
