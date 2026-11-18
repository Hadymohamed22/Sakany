import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "cn";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      dir="rtl"
      className={cn("flex w-full flex-col gap-4 bg-transparent", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-xl shadow-sm bg-white border border-border/40 overflow-hidden transition-shadow",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex w-full items-center justify-between gap-2 px-6 py-4 text-base font-medium text-foreground bg-white outline-none border-none rounded-xl transition hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-primary/40 aria-expanded:shadow-md aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <span className="flex-1 text-right">{children}</span>
        {/* Icon on the left (RTL) */}
        <span className="flex items-center justify-center size-6 rounded-full bg-custom-primary/10">
          <ChevronDownIcon
            data-slot="accordion-trigger-icon"
            className="pointer-events-none transition-transform duration-200 group-aria-expanded/accordion-trigger:hidden text-custom-primary/70"
            size={18}
          />
          <ChevronUpIcon
            data-slot="accordion-trigger-icon"
            className="pointer-events-none hidden group-aria-expanded/accordion-trigger:inline text-custom-primary/70"
            size={18}
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden bg-muted/30 text-base text-muted-foreground data-open:animate-accordion-down data-closed:animate-accordion-up px-6 pb-4 pt-0"
      {...props}
    >
      <div
        className={cn(
          "pt-2 pb-1 px-1 text-right [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
