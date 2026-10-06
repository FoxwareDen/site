import type * as React from "react";

import {
  AccordionBlock,
  AlertBlock,
  AlertDialogBlock,
  AspectRatioBlock,
  AttachmentBlock,
  AvatarBlock,
  BadgeBlock,
  BreadcrumbBlock,
  BubbleBlock,
  ButtonBlock,
  ButtonGroupBlock,
  CalendarBlock,
  CardBlock,
  CarouselBlock,
  ChartBlock,
  CheckboxBlock,
  CollapsibleBlock,
  ComboboxBlock,
  CommandBlock,
  ContextMenuBlock,
  DialogBlock,
  DirectionBlock,
  DrawerBlock,
  DropdownMenuBlock,
  InputBlock,
  InputGroupBlock,
  SeparatorBlock,
  TextareaBlock,
} from "./components";
import type {
  AccordionProps,
  AlertProps,
  AlertDialogProps,
  AspectRatioProps,
  AvatarProps,
  BadgeProps,
  BubbleProps,
  AttachmentProps,
  BreadcrumbProps,
  ButtonProps,
  ButtonGroupProps,
  CalendarProps,
  CardProps,
  CarouselProps,
  ChartProps,
  CheckboxProps,
  CollapsibleProps,
  ComboboxProps,
  CommandProps,
  ContextMenuProps,
  DialogProps,
  DirectionProps,
  DrawerProps,
  DropdownMenuProps,
  InputProps,
  InputGroupProps,
  SeparatorProps,
  TextareaProps,
} from "./components";

/* -------------------------------------------------------------------------- */
/*  Props map: the single source of truth for component names                 */
/* -------------------------------------------------------------------------- */

export type ComponentProps = {
  accordion: AccordionProps;
  alert: AlertProps;
  "alert-dialog": AlertDialogProps;
  "aspect-ratio": AspectRatioProps;
  attachment: AttachmentProps;
  avatar: AvatarProps;
  badge: BadgeProps;
  breadcrumb: BreadcrumbProps;
  bubble: BubbleProps;
  button: ButtonProps;
  "button-group": ButtonGroupProps;
  calendar: CalendarProps;
  card: CardProps;
  carousel: CarouselProps;
  chart: ChartProps;
  checkbox: CheckboxProps;
  collapsible: CollapsibleProps;
  combobox: ComboboxProps;
  command: CommandProps;
  "context-menu": ContextMenuProps;
  dialog: DialogProps;
  direction: DirectionProps;
  drawer: DrawerProps;
  "dropdown-menu": DropdownMenuProps;
  input: InputProps;
  "input-group": InputGroupProps;
  separator: SeparatorProps;
  textarea: TextareaProps;
};

export type Components = keyof ComponentProps;

/* -------------------------------------------------------------------------- */
/*  Registry                                                                  */
/* -------------------------------------------------------------------------- */

export const ComponentRecord: {
  [K in Components]: (props: ComponentProps[K]) => React.JSX.Element;
} = {
  accordion: AccordionBlock,
  alert: AlertBlock,
  "alert-dialog": AlertDialogBlock,
  "aspect-ratio": AspectRatioBlock,
  attachment: AttachmentBlock,
  avatar: AvatarBlock,
  badge: BadgeBlock,
  breadcrumb: BreadcrumbBlock,
  bubble: BubbleBlock,
  button: ButtonBlock,
  "button-group": ButtonGroupBlock,
  calendar: CalendarBlock,
  card: CardBlock,
  carousel: CarouselBlock,
  chart: ChartBlock,
  checkbox: CheckboxBlock,
  collapsible: CollapsibleBlock,
  combobox: ComboboxBlock,
  command: CommandBlock,
  "context-menu": ContextMenuBlock,
  dialog: DialogBlock,
  direction: DirectionBlock,
  drawer: DrawerBlock,
  "dropdown-menu": DropdownMenuBlock,
  input: InputBlock,
  "input-group": InputGroupBlock,
  separator: SeparatorBlock,
  textarea: TextareaBlock,
};