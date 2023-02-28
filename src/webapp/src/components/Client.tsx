import { Button } from '@mui/material';
import View from "./View";
import '../death.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { fontSize } from '@mui/system';

const steps = [
  'Dane zmarłego',
  'Dane klienta',
  'Wybór pochówku/kremacji',
  'Wybór trumny/urny',
  'Wybór karawanu',
  'Wybór odzieży pogrzebowej',
];

export default function Client() {
  return (
    <div>
      <Box sx={{ width: '100%', marginTop: '50px'}}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
      <h1>Dane zmarłego</h1>
      <div className="form-group">
        <label>Imię zmarłego</label>
        <input
          className="form-control"
          placeholder="imię"
        />
        </div>
        <div className="form-group">
          
        <label>Nazwisko zmarłego</label>
        <input
          className="form-control"
          placeholder="nazwisko"
        />
        </div>
        <div className="form-group">
        <label>Data śmierci</label>
        <input
          className="form-control"
          placeholder="dd-mm-yyyy"
        />
        <div>
        <Button><View path={"/clientData"} name={"Dalej"} /></Button>
        </div>
        </div>
      </div>
  );
}
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Check from '@mui/icons-material/Check';
// import SettingsIcon from '@mui/icons-material/Settings';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import VideoLabelIcon from '@mui/icons-material/VideoLabel';
// import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
// import { StepIconProps } from '@mui/material/StepIcon';

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
//   ({ theme, ownerState }) => ({
//     color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
//     display: 'flex',
//     height: 22,
//     alignItems: 'center',
//     ...(ownerState.active && {
//       color: '#784af4',
//     }),
//     '& .QontoStepIcon-completedIcon': {
//       color: '#784af4',
//       zIndex: 1,
//       fontSize: 18,
//     },
//     '& .QontoStepIcon-circle': {
//       width: 8,
//       height: 8,
//       borderRadius: '50%',
//       backgroundColor: 'currentColor',
//     },
//   }),
// );

// function QontoStepIcon(props: StepIconProps) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 22,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 3,
//     border: 0,
//     backgroundColor:
//       theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderRadius: 1,
//   },
// }));

// const ColorlibStepIconRoot = styled('div')<{
//   ownerState: { completed?: boolean; active?: boolean };
// }>(({ theme, ownerState }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
//   zIndex: 1,
//   color: '#fff',
//   width: 50,
//   height: 50,
//   display: 'flex',
//   borderRadius: '50%',
//   justifyContent: 'center',
//   alignItems: 'center',
//   ...(ownerState.active && {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//   }),
//   ...(ownerState.completed && {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//   }),
// }));

// function ColorlibStepIcon(props: StepIconProps) {
//   const { active, completed, className } = props;

//   const icons: { [index: string]: React.ReactElement } = {
//     1: <SettingsIcon />,
//     2: <GroupAddIcon />,
//     3: <VideoLabelIcon />,
//   };

//   return (
//     <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// const steps = ['Select campaign settings', 'm', 'Create an ad'];

// export default function CustomizedSteppers() {
//   return (
//     <Stack sx={{ width: '100%' }} spacing={4}>
//       {/* <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper> */}
//       <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Stack>
//   );
// }
