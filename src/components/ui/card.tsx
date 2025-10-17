import * as React from "react"

export function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={"rounded-2xl border border-white/10 bg-[#111318] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] " + className}>
      {children}
    </div>
  )
}
export function CardHeader({ children }: React.PropsWithChildren) {
  return <div className="px-4 pt-4">{children}</div>
}
export function CardTitle({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={"text-lg font-semibold text-white " + className}>{children}</div>
}
export function CardContent({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={"px-4 pb-4 text-sm text-[#a2a4a6] " + className}>{children}</div>
}
