import * as React from 'react';
import { StepperFieldProps } from '../types/stepperField';
export declare const useStepper: ({ defaultValue, value, step, max, min, isDisabled, isReadOnly, onDecrease, onIncrease, onStepChange, }: StepperFieldProps) => {
    step: number;
    value: number;
    inputValue: string | number;
    handleDecrease: React.MouseEventHandler<HTMLButtonElement>;
    handleIncrease: React.MouseEventHandler<HTMLButtonElement>;
    handleOnBlur: React.FocusEventHandler<HTMLInputElement>;
    handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
    handleOnWheel: React.WheelEventHandler<HTMLInputElement>;
    setInputValue: React.Dispatch<React.SetStateAction<string | number>>;
    shouldDisableDecreaseButton: boolean;
    shouldDisableIncreaseButton: boolean;
};
