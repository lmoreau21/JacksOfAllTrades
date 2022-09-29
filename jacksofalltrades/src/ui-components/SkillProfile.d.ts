/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SkillProfile } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type SkillProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    skillProfile?: SkillProfile;
    video?: (event: SyntheticEvent) => void;
    rectangle1199?: React.ReactNode;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function SkillProfile(props: SkillProfileProps): React.ReactElement;
