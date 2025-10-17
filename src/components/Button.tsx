import clsx from "clsx"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TButton = ComponentProps<"button"> & {
  actived?: boolean
  inversed?: boolean
}

export default function Button({
  className,
  actived,
  inversed,
  children,
  ...props
}: TButton) {
  return (
    <button
      {...props}
      className={twMerge(
        clsx(
          "font-mono rounded-[8px] h-8 border-2 border-white flex-center p-4 cursor-pointer uppercase relative after:content-[''] z-0 after:absolute overflow-hidden after:top-0 after:left-0 after:w-0 after:h-full after:z-1 after:transition-all after:duration-500 hover:after:w-full after:bg-gradient-to-r after:from-primary after:to-secondary disabled:bg-zinc-800 disabled:hover:after:w-0 disabled:opacity-50",
          {
            "after:w-full": actived,
            "after:rotate-180": inversed,
          }
        ),
        className
      )}
    >
      <span className="z-2 gap-2 flex-center">{children}</span>
    </button>
  )
}
