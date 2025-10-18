import clsx from "clsx"
import { ComponentProps, ElementType } from "react"
import { twMerge } from "tailwind-merge"
import { Card } from "."

type TCardTitle = ComponentProps<"h2"> & {
  Icon?: ElementType
  badgeStyle?: React.ComponentProps<"div">["className"]
}

export default function CardTitle({
  className,
  Icon,
  children,
  badgeStyle,
  ...props
}: TCardTitle) {
  return (
    <h2
      {...props}
      className={twMerge(
        "text-sm tracking-[8px] font-thin flex gap-2 items-center",
        className
      )}
    >
      {Icon && (
        <Card.Badge className={clsx(badgeStyle && badgeStyle)}>
          <Icon size={18} />
        </Card.Badge>
      )}

      {children}
    </h2>
  )
}
