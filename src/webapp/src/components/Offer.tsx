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
              Naszym zadaniem jest maksymalne odci????enie Pa??stwa w tym trudnym
              okresie, zapawniaj??c profesjonaln?? i kompeksow?? obs??ug?? pogrzebow??
              przez odpowiednio wyszkolon?? kadr?? pracownicz??. Przebieg ceremonii
              pogrzebowej ustalamy wsp??lnie z naszymi klientami, tak aby spe??ni??
              ich wszystkie wymagania. Organizuj??c pogrzeb, pami??tamy o
              wszelkich polskich tradycjach, kt??re towarzysz?? podczas ceremonii
              poch??wku. Naszym g????wnym celem jest zorganizowanie uroczysto??ci,
              kt??ra zapewni pe??ne szacunku, godne po??egnanie ze zmar???? osob??. Do
              standard??w oferowanych przez Ultima Porta nale???? mi??dzy innymi:
              przygotowanie profesjonalnego i eleganckiego miejsca grobu,
              ustawienie nowoczesnej windy oraz namiotu, ustawienie krzese?? na
              uczestnik??w pogrzebu, ustawienie nag??o??nienia.
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
              ??wiadczymy profesjonalne us??ugi zwi??zane z kremacj??. Jest ona
              alternatyw?? do tradycyjnej ceremonii pogrzebowej. Ca??y proces
              polega na spopieleniu cia??a zmar??ej osoby. Jest to tradycja maj??ca
              swoje korzenie w wielu religiach I jest znana r??wnie?? pod nazw??
              cia??opalenie. W Polsce z roku na rok mo??na zaobserwowa?? coraz
              wi??ksze zainteresowanie tym rodzajem poch??wku. Rodzina po ??mierci
              chc??c spe??ni?? ??yczenie zmar??ego o skremowaniu zw??ok szuka
              odpowiedniego zak??adu pogrzebowego a nast??pnie spopielone cia??o
              sk??adane jest do urny. Aby spe??ni?? wszystkie niezb??dne procedury,
              kremacja jest przeprowadzana w specjalistycznym piecu, powsta??ym
              na potrzeby spopielenia zw??ok. Dzia??anie pieca polega na
              odpowiednim rozprowadzeniu ciep??a w ??rodku, tak by zw??oki m??g??by
              zosta?? w pe??ni automatycznie spopielone z zachowaniem nale??ytego
              szacunku dla osoby zmar??ej.
              <p>
                Warto wspomnie??, ??e w ramach kremacji palenie cia??a to nie
                jedyna czynno????. Prochy, kt??re zostaj?? z??o??one w urnie musz?? by??
                odpowiednio rozdrobnione do czego wykorzystujemy specjalne
                urz??dzenie do tego przeznaczone. Planuj??c spopielenie zw??ok
                bliskiej osoby warto zna?? obowi??zuj??ce prawo w naszym kraju.
                Urny nie mo??na przechowywa?? w innym miejscu ni?? na cmentarzu.
                Tak samo wygl??da kwestia rozrzucania proch??w ??? jest to w Polsce
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
              Dysponujemy bogat?? ofert?? trumien o r????norodnym wzornictwie i
              kolorystyce. Trumny oferowane przez nasz zak??ad wyrabiane s??
              wy????cznie z wysokogatunkowego drewna, kt??re cechuje wysoka jako????
              wykonania i dba??o???? o szczeg????y dzi??ki czemu mo??emy sprosta??
              oczekiwaniom naszych klient??w. W celu poznania ca??ej oferty
              zapraszamy do kontaktu. Nasi pracownicy ch??tnie odpowiedz?? na
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
              Wyb??r odpowiedniej urny, czyli wazy do przechowywania proch??w
              zmar??ych to wyzwanie, kt??re stai przed osobami, kt??re straci??y
              blisk?? osob?? i zdecydowa??y si?? na poch??wek kremacyjny. Urna,
              podobnie jak trumna, powinna by?? wykonana z wysokiej jako??ci
              materia????w. Nie oznacza to jednak??e, ??e elegancka i ponadczasowa
              stylistyka, kt??ra odda charakter zmar??ej osoby nie maj?? znaczenia.
              Urny wykonane mog?? by?? z r????nych materia????w ??? od klasycznego
              drewna, przez nowoczesn?? stal, po elegancki i ponadczasowy kamie??.
              Tworzywo, z kt??rego wykonana jest urna, powinno pe??ni?? r??wnie
              wa??n?? rol??, co zwie??czaj??ce je detale. Ostatnie po??egnanie bowiem
              powinno by?? przede wszystkim uroczysto??ci?? upami??tniaj??c?? zmar????
              osob??. Wyb??r odpowiedniej urny mo??e by?? doskona??ym oddaniem uk??onu
              jej charakterowi lub stylu ??ycia. Od klasycznych, po przyci??gaj??ce
              wzrok nietuzinkow?? stylistyk??, dzi??ki szerokiemu wyborowi urn,
              wyb??r w??a??ciwej nie powinien stanowi?? wyzwania.
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
              Karawan, czyli pojazd u??ywany w czasie pogrzebu, to cz??sto element
              niezb??dny w trakcie uroczysto??ci. Jego wyb??r to jedna z decyzji,
              kt??ra spada na barki osoby organizuj??cej uroczysto???? pogrzebow??.
              Dzi??ki mo??liwo??ci wyboru pojazdu, przebieg pogrzebu staje si??
              sprawny i mniej stresuj??cy. Nale??y zaznaczy??, ??e karawan
              pogrzebowy s??u??y tylko i wy????cznie do transportu zw??ok. Wa??ne s??
              zatem nie tylko obowi??zuj??ce przepisy ale r??wnie?? szacunek do
              zmar??ej osoby. Karawan obecny jest przede wszystkim podczas
              poch??wku klasycznego. Osoby decyduj??ce si?? na spopielenie, a tym
              samym urn??, zamiast trumny, nie musz?? organizowa?? specjalnego
              ??rodka transportu. Wyb??r odpowiedniego karawanu powinien zatem
              uwzgl??dnia?? wielko???? trumny oraz charakter ostatniego po??egnania.
              Do wyboru s?? karawany w najbardziej popularnych kolorach: czarnym
              oraz bia??ym.
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
            Wie??ce
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
              wskazanymi przez rodzin?? zmar??ego. W naszej ofercie proponujemy
              du??y wyb??r sprawdzonych, eleganckich wie??c??w, kt??re znalaz??y
              uznanie naszych dotychczasowych Klient??w. Gotowe wzory pomog??
              Pa??stwu szybko wybra?? kompozycj??, kt??ra najbardziej pasowa?? b??dzie
              do Waszych oczekiwa??. Zach??camy do zapoznania si?? z opublikowanymi
              na naszej stronie szerokim wyborem popularnych modeli kwiat??w na
              pogrzeb. Jednocze??nie jeste??my otwarci na wszelkie propozycje i
              indywidualne oczekiwania w zakresie wie??c??w. Nasi Klienci mog?? z
              powodzeniem zaprojektowa?? w??asny wieniec w zakresie zastosowanego
              rodzaju kwiat??w, ich koloru, kszta??tu konstrukcji czy jej
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
            Odzie?? pogrzebowa
          </div>
          <div className={clothesVisible ? "" : "invisible"}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "20px",
              }}
            >
              Ubranie cia??a bliskiej osoby jest jedn?? z najwa??niejszych
              czynno??ci, wykonywanych przed ceremoni?? pogrzebow??, w celu godnego
              zaprezentowania zmar??ego w dniu ostatniego po??egnania. Odzie??
              pogrzebowa mo??e by?? dostarczona do naszego biura przez rodziny
              osoby zmar??ej, aby mie?? pewno????, ??e zostan?? wybrane ubrania, kt??re
              najlepiej oddadz?? gust oraz styl zmar??ego. Je??li jednak odzie??
              pogrzebowa nie zosta??a przygotowana na t?? okoliczno????, istnieje
              mo??liwo???? zaopatrzenia si?? w ni?? w naszej firmie. posiada w swoim
              asortymencie odzie?? ??a??obn?? przeznaczon?? zar??wno dla kobiet, jak i
              dla m????czyzn, w r????nych rozmiarach, wzorach i kolorach. Je??li
              chodzi o kolory ubra?? dla zmar??ych, to zwyczajowo osoby starsze
              nosz?? ciemne, najlepiej eleganckie i dopasowane ubrania. Je??li
              natomiast drogi zmar??y by?? m??ody, lepiej uszanowa?? jego zwyczaje i
              styl, nawi??zuj??c do odzie??y, kt??r?? preferowa?? na co dzie??. Rodzina
              mo??e wybra?? to ubranie, kt??re b??dzie najlepiej pasowa?? osobie
              zmar??ej ??? zar??wno korzystaj??c z w??asnych zasob??w, jak i z odzie??y
              ??a??obnej z oferty naszej firmy.
            </div>
          </div>
        </div>
      </div>
    </div>
     <div
     style={{
       marginTop: "20px",
     }}>
     <Button>Powr??t na stron?? g????wn??<View path={"/"} name={"Home"} /></Button>
     </div>
     </div>

  )
  ;
  
}
