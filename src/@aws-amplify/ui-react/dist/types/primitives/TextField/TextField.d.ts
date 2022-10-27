import * as React from 'react';
import { PrimitiveProps, TextFieldProps } from '../types';
export declare const DEFAULT_ROW_COUNT = 3;
declare const TextFieldPrimitive: {
    <Multiline extends boolean>(props: PrimitiveProps<TextFieldProps<Multiline>, "input" | "textarea">, ref: React.ForwardedRef<HTMLTextAreaElement | HTMLInputElement>): JSX.Element;
    displayName: string;
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/textfield)
 */
export declare const TextField: <Multiline extends boolean>(props: Omit<TextFieldProps<Multiline>, "as"> & {
    as?: "input" | "textarea" | TextFieldProps<Multiline>["as"];
} & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref">, "as" | "isMultiline" | Exclude<keyof (Multiline extends true ? import("../types").TextAreaFieldMultilineProps : import("../types").TextInputFieldProps), "as">> & {
    ref?: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>;
}) => ReturnType<typeof TextFieldPrimitive>;
export {};