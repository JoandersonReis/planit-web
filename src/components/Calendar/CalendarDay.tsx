import { TDayData } from "@/service/types"
import { TDayEnum } from "@/utils/types"
import clsx from "clsx"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { DayModalContent } from "../DayModalContent"
import Modal from "../Modal"

type TCalendarDay = ComponentProps<"button"> & {
  dayType: TDayEnum
  data?: TDayData | null
}

export default function CalendarDay({
  className,
  dayType,
  data,
  ...props
}: TCalendarDay) {
  return (
    <li>
      {data ? (
        <Modal
          TriggerCustom={
            <button
              {...props}
              className={twMerge(
                clsx(
                  "!h-10 !w-10 rounded-lg flex-center font-sans !bg-secondary",
                  {
                    "bg-primary": dayType == "MONTH",
                    "bg-black opacity-50": dayType == "NOMONT",
                  }
                ),
                className
              )}
            />
          }
        >
          <DayModalContent.Default data={data} />
        </Modal>
      ) : (
        <button
          {...props}
          className={twMerge(
            clsx(
              "!h-10 !w-10 rounded-lg flex-center font-sans before:hidden !cursor-auto",
              {
                "bg-primary": dayType == "MONTH",
                "bg-black opacity-50": dayType == "NOMONT",
              }
            ),
            className
          )}
        />
      )}
    </li>
  )
}
