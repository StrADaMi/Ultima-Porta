import { Button } from '@mui/material';
import View from "./View";
import '../death.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { fontSize } from '@mui/system';
import { Navigate } from "react-router-dom";
import './Client';

const steps = [
    'Dane zmarłego',
    'Dane klienta',
    'Wybór pochówku/kremacji',
    'Wybór trumny/urny',
    'Wybór karawanu',
    'Wybór odzieży pogrzebowej',
  ];

export default function ClientData() {
  return (
    <div>
      <Box sx={{ width: '100%', marginTop: '50px'}}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
      <h1>Dane zmarłego</h1>
      <div className="form-group">
        <label>Imię klienta</label>
        <input
          className="form-control"
          placeholder="imię"
        />
        </div>
        <div className="form-group">
          
        <label>Nazwisko klienta</label>
        <input
          className="form-control"
          placeholder="nazwisko"
        />
        </div>
       
        <div>
        <Button><View path={"/coffins"} name={"Dalej"} /></Button>
        </div>
        </div>
  );
}