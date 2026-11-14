import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-4!",
  {
    variants: {
      variant: {
        basic: "bg-custom-primary/15 text-custom-primary",
        new: "bg-custom-secondary/15 text-custom-secondary-hover",
        neutral: "bg-slate-100 text-slate-700",
        reserved: "bg-rose-100 text-rose-700",
        nearby: "bg-sky-100 text-sky-800",
        verified: "bg-custom-primary text-white",
        "hero-badge": "bg-[#FEF8E7] border border-[#FAE2A5] text-[#A06200]",
      },
    },
    defaultVariants: {
      variant: "basic",
    },
  },
);

function Badge({
  className,
  variant = "basic",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };
