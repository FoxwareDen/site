import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DirectionProvider } from "@/components/ui/direction";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

/* -------------------------------------------------------------------------- */
/*  Shared types                                                              */
/* -------------------------------------------------------------------------- */

type Node = React.ReactNode;
type Children = { children?: Node };

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

type AccordionItemData = {
  value: string;
  triggerLabel: Node;
  content: Node;
};

export type AccordionProps =
  | { type: "single"; defaultValue?: string; collapsible?: boolean; data: AccordionItemData[] }
  | { type: "multiple"; defaultValue?: string[]; data: AccordionItemData[] };

export type AlertProps = {
  variant?: "default" | "destructive";
  icon?: Node;
  title?: Node;
  description?: Node;
};

export type AlertDialogProps = {
  trigger: Node;
  title: Node;
  description?: Node;
  cancelLabel?: string;
  actionLabel?: string;
  onAction?: () => void;
  onCancel?: () => void;
};

export type AspectRatioProps = { ratio?: number } & Children;

export type AvatarProps = { src?: string; alt?: string; fallback?: Node };

export type BadgeProps = {
  variant?: "default" | "secondary" | "destructive" | "outline";
} & Children;

// Not a stock shadcn component: treated as a chat message bubble.
export type BubbleProps = {
  role?: "user" | "assistant";
  className?: string;
} & Children;

// Not a stock shadcn component: treated as a file chip.
export type AttachmentProps = {
  name: string;
  size?: string;
  href?: string;
  icon?: Node;
};

export type BreadcrumbProps = {
  items: { label: Node; href?: string }[]; // last item (or any without href) renders as the current page
  separator?: Node;
};

export type ButtonProps = React.ComponentProps<typeof Button>;
export type ButtonGroupProps = React.ComponentProps<typeof ButtonGroup>;
export type CalendarProps = React.ComponentProps<typeof Calendar>;

export type CardProps = {
  title?: Node;
  description?: Node;
  footer?: Node;
  className?: string;
} & Children;

export type CarouselProps = {
  items: Node[];
  orientation?: "horizontal" | "vertical";
  showControls?: boolean;
  className?: string;
};

export type ChartProps = {
  config: ChartConfig;
  className?: string;
  children: React.ComponentProps<typeof ChartContainer>["children"];
};

export type CheckboxProps = {
  id: string;
  label?: Node;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export type CollapsibleProps = {
  trigger: Node;
  defaultOpen?: boolean;
} & Children;

export type ComboboxProps = {
  options: { value: string; label: string }[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
};

export type CommandProps = {
  groups: { heading?: string; items: { value: string; label: Node; onSelect?: () => void }[] }[];
  placeholder?: string;
  emptyText?: string;
};

export type ContextMenuProps = {
  trigger: Node;
  items: ({ label: Node; onSelect?: () => void; disabled?: boolean } | "separator")[];
};

export type DialogProps = {
  trigger: Node;
  title: Node;
  description?: Node;
  footer?: Node;
} & Children;

export type DirectionProps = { dir: "ltr" | "rtl" } & Children;

export type DrawerProps = {
  trigger: Node;
  title: Node;
  description?: Node;
  footer?: Node;
  closeLabel?: string;
} & Children;

export type DropdownMenuProps = {
  trigger: Node;
  label?: Node;
  items: ({ label: Node; onSelect?: () => void; disabled?: boolean } | "separator")[];
};

export type InputProps = React.ComponentProps<typeof Input>;

export type InputGroupProps = {
  leading?: Node;
  trailing?: Node;
} & React.ComponentProps<typeof InputGroupInput>;

export type SeparatorProps = React.ComponentProps<typeof Separator>;
export type TextareaProps = React.ComponentProps<typeof Textarea>;

/* -------------------------------------------------------------------------- */
/*  Wrappers                                                                  */
/* -------------------------------------------------------------------------- */

export function AccordionBlock(props: AccordionProps) {
  const items = props.data.map((item) => (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionTrigger>{item.triggerLabel}</AccordionTrigger>
      <AccordionContent>{item.content}</AccordionContent>
    </AccordionItem>
  ));

  return props.type === "single" ? (
    <Accordion
      type="single"
      collapsible={props.collapsible}
      defaultValue={props.defaultValue}
    >
      {items}
    </Accordion>
  ) : (
    <Accordion type="multiple" defaultValue={props.defaultValue}>
      {items}
    </Accordion>
  );
}

export function AlertBlock({ variant, icon, title, description }: AlertProps) {
  return (
    <Alert variant={variant}>
      {icon}
      {title && <AlertTitle>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
    </Alert>
  );
}

export function AlertDialogBlock({
  trigger,
  title,
  description,
  cancelLabel = "Cancel",
  actionLabel = "Continue",
  onAction,
  onCancel,
}: AlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>{actionLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function AspectRatioBlock({ ratio = 16 / 9, children }: AspectRatioProps) {
  return <AspectRatio ratio={ratio}>{children}</AspectRatio>;
}

export function AttachmentBlock({ name, size, href, icon }: AttachmentProps) {
  const body = (
    <>
      {icon}
      <span className="truncate font-medium">{name}</span>
      {size && <span className="text-muted-foreground text-xs">{size}</span>}
    </>
  );
  const cls = "inline-flex max-w-full items-center gap-2 rounded-md border px-3 py-2 text-sm";
  return href ? (
    <a href={href} className={cls} download>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

export function AvatarBlock({ src, alt, fallback }: AvatarProps) {
  return (
    <Avatar>
      {src && <AvatarImage src={src} alt={alt} />}
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}

export function BadgeBlock({ variant, children }: BadgeProps) {
  return <Badge variant={variant}>{children}</Badge>;
}

export function BreadcrumbBlock({ items, separator }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {i < items.length - 1 && (
              <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export function BubbleBlock({ role = "assistant", className, children }: BubbleProps) {
  const side =
    role === "user"
      ? "ml-auto bg-primary text-primary-foreground"
      : "mr-auto bg-muted";
  return (
    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${side} ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function ButtonBlock(props: ButtonProps) {
  return <Button {...props} />;
}

export function ButtonGroupBlock(props: ButtonGroupProps) {
  return <ButtonGroup {...props} />;
}

export function CalendarBlock(props: CalendarProps) {
  return <Calendar {...props} />;
}

export function CardBlock({ title, description, footer, className, children }: CardProps) {
  return (
    <Card className={className}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}

export function CarouselBlock({
  items,
  orientation = "horizontal",
  showControls = true,
  className,
}: CarouselProps) {
  return (
    <Carousel orientation={orientation} className={className}>
      <CarouselContent>
        {items.map((item, i) => (
          <CarouselItem key={i}>{item}</CarouselItem>
        ))}
      </CarouselContent>
      {showControls && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}

export function ChartBlock({ config, className, children }: ChartProps) {
  return (
    <ChartContainer config={config} className={className}>
      {children}
    </ChartContainer>
  );
}

export function CheckboxBlock({ id, label, ...rest }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} {...rest} />
      {label && <Label htmlFor={id}>{label}</Label>}
    </div>
  );
}

export function CollapsibleBlock({ trigger, defaultOpen, children }: CollapsibleProps) {
  return (
    <Collapsible defaultOpen={defaultOpen}>
      <CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
}

export function ComboboxBlock({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(value ?? "");
  const current = value ?? internal;
  const selected = options.find((o) => o.value === current);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open}>
          {selected ? selected.label : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((o) => (
                <CommandItem
                  key={o.value}
                  value={o.value}
                  onSelect={(v) => {
                    const next = v === current ? "" : v;
                    setInternal(next);
                    onValueChange?.(next);
                    setOpen(false);
                  }}
                >
                  {o.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function CommandBlock({
  groups,
  placeholder = "Type a command or search...",
  emptyText = "No results found.",
}: CommandProps) {
  return (
    <Command>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>{emptyText}</CommandEmpty>
        {groups.map((g, i) => (
          <CommandGroup key={g.heading ?? i} heading={g.heading}>
            {g.items.map((item) => (
              <CommandItem key={item.value} value={item.value} onSelect={item.onSelect}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
}

export function ContextMenuBlock({ trigger, items }: ContextMenuProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{trigger}</ContextMenuTrigger>
      <ContextMenuContent>
        {items.map((item, i) =>
          item === "separator" ? (
            <ContextMenuSeparator key={i} />
          ) : (
            <ContextMenuItem key={i} disabled={item.disabled} onSelect={item.onSelect}>
              {item.label}
            </ContextMenuItem>
          ),
        )}
      </ContextMenuContent>
    </ContextMenu>
  );
}

export function DialogBlock({ trigger, title, description, footer, children }: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}

export function DirectionBlock({ dir, children }: DirectionProps) {
  return <DirectionProvider dir={dir}>{children}</DirectionProvider>;
}

export function DrawerBlock({
  trigger,
  title,
  description,
  footer,
  closeLabel,
  children,
}: DrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        {children}
        {(footer || closeLabel) && (
          <DrawerFooter>
            {footer}
            {closeLabel && (
              <DrawerClose asChild>
                <Button variant="outline">{closeLabel}</Button>
              </DrawerClose>
            )}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export function DropdownMenuBlock({ trigger, label, items }: DropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {label && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {items.map((item, i) =>
          item === "separator" ? (
            <DropdownMenuSeparator key={i} />
          ) : (
            <DropdownMenuItem key={i} disabled={item.disabled} onSelect={item.onSelect}>
              {item.label}
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function InputBlock(props: InputProps) {
  return <Input {...props} />;
}

export function InputGroupBlock({ leading, trailing, ...inputProps }: InputGroupProps) {
  return (
    <InputGroup>
      {leading && <InputGroupAddon>{leading}</InputGroupAddon>}
      <InputGroupInput {...inputProps} />
      {trailing && <InputGroupAddon align="inline-end">{trailing}</InputGroupAddon>}
    </InputGroup>
  );
}

export function SeparatorBlock(props: SeparatorProps) {
  return <Separator {...props} />;
}

export function TextareaBlock(props: TextareaProps) {
  return <Textarea {...props} />;
}