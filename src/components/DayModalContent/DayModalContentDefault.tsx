import { TDayData } from "@/service/types"
import { MONTHS } from "@/utils/Config"
import { BanknoteArrowDown } from "lucide-react"
import { DayModalContent } from "."

type TDayModalContentDefaultProps = {
  data: TDayData
  monthSelected: number
}

export default function DayModalContentDefault({
  data,
  monthSelected,
}: TDayModalContentDefaultProps) {
  const currentDate = new Date(data.date)

  return (
    <DayModalContent.Root>
      <DayModalContent.Content>
        <div>
          <DayModalContent.Title>
            {currentDate.getDate()} {MONTHS[currentDate.getMonth()].nome}{" "}
            {currentDate.getFullYear()}
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
                monthSelected={monthSelected}
                debtId={item.id}
                value={item.value}
                paid={item.paid}
                key={item.id}
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
