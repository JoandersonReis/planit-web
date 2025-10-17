import { ImageIcon } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormUploadImage = ComponentProps<"input"> & {
  label: string
}

export default function FormUploadImage({
  className,
  label,
  ...props
}: TFormUploadImage) {
  return (
    <div className="w-full h-40 relative flex-center">
      <input
        {...props}
        type="file"
        className={twMerge(
          "w-full h-full border-2 border-white/20 rounded-lg p-4 cursor-pointer z-10",
          className
        )}
      />

      <div className="absolute text-white/20 flex flex-col gap-4 items-center justify-center">
        <ImageIcon size={44} />
        <strong>{label}</strong>
      </div>
    </div>
  )
}
