package pl.codecoolproject.ultimaporta.offer.init;

import pl.codecoolproject.ultimaporta.offer.model.FuneralWreath;

import java.math.BigDecimal;

public class FuneralWreaths extends FuneralWreath {

    FuneralWreath funeralWreath1 = new FuneralWreath(
            "Funeral Wreath Basic One",
            BigDecimal.valueOf(150.00),
            "Standard",
            "Roses");
    FuneralWreath funeralWreath2 = new FuneralWreath(
            "Funeral Wreath Basic Two",
            BigDecimal.valueOf(150.00),
            "Standard",
            "Roses & Tulips");
    FuneralWreath funeralWreath3 = new FuneralWreath(
            "Funeral Wreath Medium One",
            BigDecimal.valueOf(250.00),
            "Medium",
            "Roses, Tulips & Asters");
    FuneralWreath funeralWreath4 = new FuneralWreath(
            "Funeral Wreath Medium Two",
            BigDecimal.valueOf(250.00),
            "Medium",
            "Asters & Roses");

    FuneralWreath funeralWreath5 = new FuneralWreath(
            "Funeral Wreath Exclusive One",
            BigDecimal.valueOf(350.00),
            "Exclusive",
            "Lilies & Roses");
    FuneralWreath funeralWreath6 = new FuneralWreath(
            "Funeral Wreath Exclusive Two",
            BigDecimal.valueOf(350.00),
            "Exclusive",
            "Orchids, Lilies & Roses"
    );
}
