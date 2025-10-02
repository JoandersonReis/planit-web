import { Dialog } from "radix-ui"
import { ComponentProps, ReactNode } from "react"

type TModal = ComponentProps<"div"> & {
  TriggerCustom: ReactNode
}

export default function Modal({ children, TriggerCustom }: TModal) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{TriggerCustom}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-screen w-screen z-40 bg-black/50" />
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-background rounded-lg max-w-[400px] z-50 w-full"
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
