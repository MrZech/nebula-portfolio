import * as React from "react"

type Variant = "default" | "secondary"
type Size = "sm" | "md"

type Props = React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean
  href?: string
  variant?: Variant
  size?: Size
}

export function Button({
  asChild,
  href,
  variant = "default",
  size = "sm",
  className = "",
  children,
  ...props
}: Props) {
  const Comp: any = asChild ? "a" : "button"
  const extra = asChild ? { href, target: (props as any).target, rel: (props as any).rel } : {}

  const base =
    // layout + type
    "inline-flex items-center gap-2 rounded-2xl transition border text-sm font-medium leading-6 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 " +
    // 🔧 normalize ANY direct svg child: exact size + vertical align middle
    // use inline-block so vertical-align works; slight nudge for optical centering
    "[&>svg]:inline-block [&>svg]:align-middle [&>svg]:w-4 [&>svg]:h-4 [&>svg]:-translate-y-[1px]"

  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
  }

  const variants: Record<Variant, string> = {
    default:  "bg-purple-600/90 text-white border-white/10 hover:bg-purple-500/90",
    secondary:"bg-[#151821] text-[#c5c6c7] border-white/10 hover:border-purple-500/40 hover:text-white",
  }

  return (
    <Comp
      {...extra}
      {...(!asChild ? props : {})}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Comp>
  )
}
