import { Box, Button, Container } from "@mui/material";
import View from "./View";

export default function About() {
  return (
    <Container maxWidth={false}>
      <Box sx={{ backgroundColor: "transparent" }}>
        <div>
          <h1>O NAS</h1>
          <h3>
            <div>
              <div>
                <p>
                  {" "}
                  Dom Pogrzebowy Ultima Porta - miejsce, które
                  od lat zapewnia godne pożegnanie dla najbliższych zmarłych.
                  Nasza firma powstała z pasji i zaangażowania w troskę o
                  każdego klienta, któremu pomagamy w tak trudnym momencie.
                </p>
              </div>
              <div>
                <p>
                  Nasza oferta to kompleksowa organizacja pogrzebu, wraz z
                  obsługą formalności i wszelkimi potrzebnymi usługami.
                  Posiadamy wspaniałą ekipę doświadczonych pracowników, którzy
                  swoją pracę wykonują z pełnym zaangażowaniem i empatią dla
                  rodziny zmarłego.
                </p>
              </div>
              <div>
                <p>
                  Zawsze staramy się, aby w trudnym czasie żałoby, nasi klienci
                  mogli liczyć na nasze wsparcie i profesjonalne doradztwo.
                  Dbamy o każdy szczegół, począwszy od zapewnienia odpowiedniego
                  wyposażenia sali ceremonialnej, poprzez przygotowanie
                  konsultacji z zakresu prawa pogrzebowego, aż po przygotowanie
                  kwiatów i zorganizowanie ceremonii pożegnalnej.
                </p>
              </div>
              <div>
                <p>
                  W Domu Pogrzebowym Ultima Porta wiemy, jak trudne jest
                  pożegnanie z bliskim człowiekiem, dlatego robimy wszystko, aby
                  nasza pomoc była dla Państwa pocieszeniem w trudnych chwilach.
                  Nasze motto to: "Godnie i z szacunkiem pożegnamy Twoich
                  bliskich".
                </p>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <Button>
            Nasza Oferta
            <View path={"/offer"} name={"OFERTA"} />
          </Button>
        </div>
      </Box>
      <Button>
        Powrót na stronę główną
        <View path={"/"} name={"Home"} />
      </Button>
    </Container>
  );
}
