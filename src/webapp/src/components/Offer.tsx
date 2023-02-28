import { useState } from "react";
import coffinImage from "./images/coffin.png";
import urnImage from "./images/urn.png";
import carImage from "./images/car.png";
import wreathImage from "./images/wreath.png";
import clothesImage from "./images/clothes.png";

import "../background.css";

import { Button } from "@mui/material";
import View from "./View";


export default function Offer() {
  const [burialVisible, setBurialVisible] = useState(false);
  const [cremationVisible, setCremationVisible] = useState(false);
  const [coffinsVisible, setCoffinsVisible] = useState(false);
  const [urnsVisible, setUrnsVisible] = useState(false);
  const [carsVisible, setCarsVisible] = useState(false);
  const [flowersVisible, setFlowersVisible] = useState(false);
  const [clothesVisible, setClothesVisible] = useState(false);

  // async function handleClick() {
  //   console.log("Clicked!");
  //   try {
  //     const response = await axios.get('/coffins');
  //     console.log(response.data);
  //     window.location.href = '/coffins';
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const handleClick = () => {
  //   axios.get('/coffins')
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //   fetch("/coffins")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };
  // const [coffins, setCoffins] = useState([]);

  // useEffect(() => {
  //   const fetchCoffins = async () => {
  //     const data = await getCoffins();
  //     setCoffins(data);
  //   };
  //   fetchCoffins();
  // }, []);

  function handleBurialClick() {
    setBurialVisible((prevState) => !prevState);
    setCremationVisible(false);
  }
  function handleCremationClick() {
    setCremationVisible((prevState) => !prevState);
    setBurialVisible(false);
  }
  //products visible for each categories
  function handleCoffinClick() {
    setCoffinsVisible((prevState) => !prevState);
    setUrnsVisible(false);
    setCarsVisible(false);
    setFlowersVisible(false);
    setClothesVisible(false);
  }
  function handleUrnsClick() {
    setUrnsVisible((prevState) => !prevState);
    setCoffinsVisible(false);
    setCarsVisible(false);
    setFlowersVisible(false);
    setClothesVisible(false);
  }
  function handleCarsClick() {
    setCarsVisible((prevState) => !prevState);
    setCoffinsVisible(false);
    setUrnsVisible(false);
    setFlowersVisible(false);
    setClothesVisible(false);
  }
  function handleFlowersClick() {
    setFlowersVisible((prevState) => !prevState);
    setCoffinsVisible(false);
    setCarsVisible(false);
    setUrnsVisible(false);
    setClothesVisible(false);
  }
  function handleClothesClick() {
    setClothesVisible((prevState) => !prevState);
    setCoffinsVisible(false);
    setCarsVisible(false);
    setUrnsVisible(false);
    setFlowersVisible(false);
  }

  return (
    <div>
    <div id="offer-container">
      <div
        id="offer-text"
        style={{
          textAlign: "center",
          fontFamily: "Gloock, sans-serif",
          fontSize: "46px",
          marginTop: "50px",
        }}
      >
        <span className="logo-text">
          <u>
            <b>Nasza Oferta</b>{" "}
          </u>
        </span>
      </div>
      <div id="offer-subtext">
        <div>
          <button onClick={handleBurialClick}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "25px",
              }}
            >
              <u>
                <b>Organizacja Pogrzebu</b>
              </u>
            </div>
          </button>
          <div className={burialVisible ? "visible" : ""}>
            <div
              id="offer-text"
              style={{
                marginTop: "20px",
                fontFamily: "Gloock, sans-serif",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              Naszym zadaniem jest maksymalne odciążenie Państwa w tym trudnym
              okresie, zapawniając profesjonalną i kompeksową obsługę pogrzebową
              przez odpowiednio wyszkoloną kadrę pracowniczą. Przebieg ceremonii
              pogrzebowej ustalamy wspólnie z naszymi klientami, tak aby spełnić
              ich wszystkie wymagania. Organizując pogrzeb, pamiętamy o
              wszelkich polskich tradycjach, które towarzyszą podczas ceremonii
              pochówku. Naszym głównym celem jest zorganizowanie uroczystości,
              która zapewni pełne szacunku, godne pożegnanie ze zmarłą osobą. Do
              standardów oferowanych przez Ultima Porta należą między innymi:
              przygotowanie profesjonalnego i eleganckiego miejsca grobu,
              ustawienie nowoczesnej windy oraz namiotu, ustawienie krzeseł na
              uczestników pogrzebu, ustawienie nagłośnienia.
            </div>
          </div>
        </div>
        <div>
          <button onClick={handleCremationClick}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "25px",
              }}
            >
              <u>
                <b>Organizacja Kremacji</b>
              </u>
            </div>
          </button>
          <div className={cremationVisible ? "visible" : ""}>
            <div
              id="offer-text"
              style={{
                marginTop: "20px",
                fontFamily: "Gloock, sans-serif",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              Świadczymy profesjonalne usługi związane z kremacją. Jest ona
              alternatywą do tradycyjnej ceremonii pogrzebowej. Cały proces
              polega na spopieleniu ciała zmarłej osoby. Jest to tradycja mająca
              swoje korzenie w wielu religiach I jest znana również pod nazwą
              ciałopalenie. W Polsce z roku na rok można zaobserwować coraz
              większe zainteresowanie tym rodzajem pochówku. Rodzina po śmierci
              chcąc spełnić życzenie zmarłego o skremowaniu zwłok szuka
              odpowiedniego zakładu pogrzebowego a następnie spopielone ciało
              składane jest do urny. Aby spełnić wszystkie niezbędne procedury,
              kremacja jest przeprowadzana w specjalistycznym piecu, powstałym
              na potrzeby spopielenia zwłok. Działanie pieca polega na
              odpowiednim rozprowadzeniu ciepła w środku, tak by zwłoki mógłby
              zostać w pełni automatycznie spopielone z zachowaniem należytego
              szacunku dla osoby zmarłej.
              <p>
                Warto wspomnieć, że w ramach kremacji palenie ciała to nie
                jedyna czynność. Prochy, które zostają złożone w urnie muszą być
                odpowiednio rozdrobnione do czego wykorzystujemy specjalne
                urządzenie do tego przeznaczone. Planując spopielenie zwłok
                bliskiej osoby warto znać obowiązujące prawo w naszym kraju.
                Urny nie można przechowywać w innym miejscu niż na cmentarzu.
                Tak samo wygląda kwestia rozrzucania prochów – jest to w Polsce
                karane.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>

        <div style={{ marginRight: "50px", marginTop: "100px" }}>
          <div onClick={handleCoffinClick}>
            <img
              src={coffinImage}
              alt="Coffin"
              style={{ width: "200px", height: "200px", cursor: "pointer" }}

              // onClick={() => window.location.href = '/coffins'}
              //() => window.location.href = '/coffins'
              //handleClick
            />

            <div
              id="offer-text"
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontFamily: "Gloock, sans-serif",
                fontSize: "23px",
              }}
            >
              Trumny
            </div>
          </div>
          <div className={coffinsVisible ? "" : "invisible"}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "20px",
              }}
            >
              Dysponujemy bogatą ofertą trumien o różnorodnym wzornictwie i
              kolorystyce. Trumny oferowane przez nasz zakład wyrabiane są
              wyłącznie z wysokogatunkowego drewna, które cechuje wysoka jakość
              wykonania i dbałość o szczegóły dzięki czemu możemy sprostać
              oczekiwaniom naszych klientów. W celu poznania całej oferty
              zapraszamy do kontaktu. Nasi pracownicy chętnie odpowiedzą na
              wszystkie pytania.
            </div>
          </div>
        </div>

        <div
          style={{ marginRight: "50px", marginTop: "100px", cursor: "pointer" }}
        >

          <img
            src={urnImage}
            alt="Urns"
            style={{ width: "200px", height: "200px" }}
            onClick={handleUrnsClick}
          />
          <div
            id="offer-text"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Gloock, sans-serif",
              fontSize: "23px",
            }}
          >
            Urny
          </div>
          <div className={urnsVisible ? "" : "invisible"}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "20px",
              }}
            >
              Wybór odpowiedniej urny, czyli wazy do przechowywania prochów
              zmarłych to wyzwanie, które stai przed osobami, które straciły
              bliską osobę i zdecydowały się na pochówek kremacyjny. Urna,
              podobnie jak trumna, powinna być wykonana z wysokiej jakości
              materiałów. Nie oznacza to jednakże, że elegancka i ponadczasowa
              stylistyka, która odda charakter zmarłej osoby nie mają znaczenia.
              Urny wykonane mogą być z różnych materiałów – od klasycznego
              drewna, przez nowoczesną stal, po elegancki i ponadczasowy kamień.
              Tworzywo, z którego wykonana jest urna, powinno pełnić równie
              ważną rolę, co zwieńczające je detale. Ostatnie pożegnanie bowiem
              powinno być przede wszystkim uroczystością upamiętniającą zmarłą
              osobę. Wybór odpowiedniej urny może być doskonałym oddaniem ukłonu
              jej charakterowi lub stylu życia. Od klasycznych, po przyciągające
              wzrok nietuzinkową stylistyką, dzięki szerokiemu wyborowi urn,
              wybór właściwej nie powinien stanowić wyzwania.
            </div>
          </div>
        </div>

        <div
          style={{ marginRight: "50px", marginTop: "100px", cursor: "pointer" }}
        >
          <img
            src={carImage}
            alt="Cars"
            style={{ width: "200px", height: "200px" }}
            onClick={handleCarsClick}
          />
          <div
            id="offer-text"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Gloock, sans-serif",
              fontSize: "23px",
            }}
          >
            Samochody
          </div>
          <div className={carsVisible ? "" : "invisible"}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "20px",
              }}
            >
              Karawan, czyli pojazd używany w czasie pogrzebu, to często element
              niezbędny w trakcie uroczystości. Jego wybór to jedna z decyzji,
              która spada na barki osoby organizującej uroczystość pogrzebową.
              Dzięki możliwości wyboru pojazdu, przebieg pogrzebu staje się
              sprawny i mniej stresujący. Należy zaznaczyć, że karawan
              pogrzebowy służy tylko i wyłącznie do transportu zwłok. Ważne są
              zatem nie tylko obowiązujące przepisy ale również szacunek do
              zmarłej osoby. Karawan obecny jest przede wszystkim podczas
              pochówku klasycznego. Osoby decydujące się na spopielenie, a tym
              samym urnę, zamiast trumny, nie muszą organizować specjalnego
              środka transportu. Wybór odpowiedniego karawanu powinien zatem
              uwzględniać wielkość trumny oraz charakter ostatniego pożegnania.
              Do wyboru są karawany w najbardziej popularnych kolorach: czarnym
              oraz białym.
            </div>
          </div>
        </div>

        <div style={{ marginRight: "50px", marginTop: "100px", cursor: "pointer"}}>

          <img
            src={wreathImage}
            alt="Funeral Wreaths"
            style={{ width: "200px", height: "200px" }}
            onClick={handleFlowersClick}
          />
          <div
            id="offer-text"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Gloock, sans-serif",
              fontSize: "23px",
            }}
          >
            Wieńce
          </div>
          <div className={flowersVisible ? "" : "invisible"}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "20px",
              }}
            >
              Wszelkie kwiaty na pogrzeb przygotowujemy zgodnie z wytycznymi
              wskazanymi przez rodzinę zmarłego. W naszej ofercie proponujemy
              duży wybór sprawdzonych, eleganckich wieńców, które znalazły
              uznanie naszych dotychczasowych Klientów. Gotowe wzory pomogą
              Państwu szybko wybrać kompozycję, która najbardziej pasować będzie
              do Waszych oczekiwań. Zachęcamy do zapoznania się z opublikowanymi
              na naszej stronie szerokim wyborem popularnych modeli kwiatów na
              pogrzeb. Jednocześnie jesteśmy otwarci na wszelkie propozycje i
              indywidualne oczekiwania w zakresie wieńców. Nasi Klienci mogą z
              powodzeniem zaprojektować własny wieniec w zakresie zastosowanego
              rodzaju kwiatów, ich koloru, kształtu konstrukcji czy jej
              rozmiaru.
            </div>
          </div>
        </div>
        <div>
          <img
            src={clothesImage}
            alt="Funeral Clothes"
            style={{
              width: "200px",
              height: "200px",
              marginTop: "100px",
              cursor: "pointer",
            }}
            onClick={handleClothesClick}
          />
          <div
            id="offer-text"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Gloock, sans-serif",
              fontSize: "23px",
            }}
          >
            Odzież pogrzebowa
          </div>
          <div className={clothesVisible ? "" : "invisible"}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "20px",
              }}
            >
              Ubranie ciała bliskiej osoby jest jedną z najważniejszych
              czynności, wykonywanych przed ceremonią pogrzebową, w celu godnego
              zaprezentowania zmarłego w dniu ostatniego pożegnania. Odzież
              pogrzebowa może być dostarczona do naszego biura przez rodziny
              osoby zmarłej, aby mieć pewność, że zostaną wybrane ubrania, które
              najlepiej oddadzą gust oraz styl zmarłego. Jeśli jednak odzież
              pogrzebowa nie została przygotowana na tę okoliczność, istnieje
              możliwość zaopatrzenia się w nią w naszej firmie. posiada w swoim
              asortymencie odzież żałobną przeznaczoną zarówno dla kobiet, jak i
              dla mężczyzn, w różnych rozmiarach, wzorach i kolorach. Jeśli
              chodzi o kolory ubrań dla zmarłych, to zwyczajowo osoby starsze
              noszą ciemne, najlepiej eleganckie i dopasowane ubrania. Jeśli
              natomiast drogi zmarły był młody, lepiej uszanować jego zwyczaje i
              styl, nawiązując do odzieży, którą preferował na co dzień. Rodzina
              może wybrać to ubranie, które będzie najlepiej pasować osobie
              zmarłej – zarówno korzystając z własnych zasobów, jak i z odzieży
              żałobnej z oferty naszej firmy.
            </div>
          </div>
        </div>
      </div>
    </div>
     <div
     style={{
       marginTop: "20px",
     }}>
     <Button>Powrót na stronę główną<View path={"/"} name={"Home"} /></Button>
     </div>
     </div>

  )
  ;
  
}
