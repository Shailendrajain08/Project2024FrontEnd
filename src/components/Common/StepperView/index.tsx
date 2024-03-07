import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import './index.css';
interface IStepperView {
  steps: any;
  activeStep: string;
  callBackFnc?: any;
  orientation?: any;
}

const StepperView = ({ steps, activeStep, callBackFnc, orientation }: IStepperView) => {
  const currentStep: any = steps.filter((step: any) => step.value === activeStep)?.[0];
  const stepperCount: number =
    steps?.length === currentStep?.step ? currentStep?.step : currentStep?.step - 1;

  const handleStep = (step: any) => {
    if (callBackFnc) callBackFnc(step.value);
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 13
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#14a800'
      }
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#14a800'
      }
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 2,
      border: 0,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1
    }
  }));

  return (
    <Stack className="stepper-container" spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={stepperCount}
        className="stepper-wrapper"
        connector={<ColorlibConnector />}>
        {steps.map((step: any) => (
          <Step
            key={step.step}
            // If case we want stepper change from no. uncomment onClick function.
            onClick={() => handleStep(step)}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default StepperView;
