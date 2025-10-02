import { TDayData } from "@/service/types"
import { MONTHS } from "@/utils/Config"
import clsx from "clsx"
import { BanknoteArrowDown } from "lucide-react"
import { DayModalContent } from "."

type TDayModalContentDefaultProps = {
  data: TDayData
}

export default function DayModalContentDefault({
  data,
}: TDayModalContentDefaultProps) {
  return (
    <DayModalContent.Root>
      <DayModalContent.Content>
        <div>
          <DayModalContent.Title>
            {data.date.getDate()} {MONTHS[data.date.getMonth()].nome}{" "}
            {data.date.getFullYear()}
          </DayModalContent.Title>
          <DayModalContent.Description>
            Veja suas pendências do dia!
          </DayModalContent.Description>
        </div>

        <div className="flex flex-col gap-2">
          <DayModalContent.Subtitle>
            <DayModalContent.SubtitleIcon
              className="bg-red-600"
              Icon={BanknoteArrowDown}
            />
            Débitos
          </DayModalContent.Subtitle>

          <DayModalContent.Items>
            {data.debts.map((item) => (
              <DayModalContent.Item
                value={item.value}
                paid={item.paid}
                key={item.id}
                className={clsx({
                  "bg-amber-800": !item.paid,
                  "bg-emerald-500": item.paid,
                })}
              >
                <DayModalContent.ItemTitle>
                  {item.title}
                </DayModalContent.ItemTitle>

                <DayModalContent.ItemValue value={item.value} />
              </DayModalContent.Item>
            ))}
          </DayModalContent.Items>
        </div>
      </DayModalContent.Content>
    </DayModalContent.Root>
  )
}
