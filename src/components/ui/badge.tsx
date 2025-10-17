import * as React from "react"
export function Badge({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span className={"inline-flex items-center px-2 py-1 text-xs rounded-lg border border-white/10 bg-[#1a1c22] text-[#c5c6c7] " + className}>
      {children}
    </span>
  )
}
