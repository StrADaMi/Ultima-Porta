import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/system";
import GoogleMap from "./GoogleMap";

export default function Contact() {
  return (
    <div className="card">
      <span className="font-link">
        <h1>Kontakt</h1>
        <div style={{ textAlign: "center", fontSize: 23 }}>
          Zapraszamy do kontaktu z naszym biurem:
          <h1></h1>
          <center>
            <HomeWorkIcon />
            Ulica Cmentarna 66/6
          </center>
          80-441 Warszawa
        </div>
        <br />
        <div style={{ textAlign: "center", fontSize: 23 }}>
          <PhoneAndroidIcon />
          666 665 664
        </div>
        <br />
        <div style={{ textAlign: "center", fontSize: 23 }}>
          <FacebookIcon /> UltimaPorta.pl
        </div>
        <br />
        <div style={{ textAlign: "center", fontSize: 23 }}>
          <LinkedInIcon /> UltimaPorta.LinkedIn.pl
        </div>
        <br />

        <h1>Zapraszamy!</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <iframe
            src="https://storage.googleapis.com/maps-solutions-torw7a990c/locator-plus/7wrq/locator-plus.html"
            width="70%"
            height="70%"
            loading="lazy"
            style={{
              marginTop: '20px',
            }}
          ></iframe>
        </div>

        {/* <GoogleMap /> */}
      </span>
    </div>
  );
}
