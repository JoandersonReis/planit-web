import { TSelect } from "@/utils/types"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Select } from "radix-ui"

type TCardSelect = {
  data: TSelect[]
  value: string
  onChange: (value: string) => void
}

export default function CardSelect({ data, onChange, value }: TCardSelect) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="!h-7 max-w-[100px] w-full bg-primary text-white !flex !items-center px-2 !justify-between">
        <Select.Value placeholder="Selecione" />

        <Select.Icon>
          <ChevronDown size={12} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-xs bg-dark-gray">
          <Select.ScrollUpButton className="w-full flex-center h-6 bg-light-gray">
            <ChevronUp size={16} />
          </Select.ScrollUpButton>

          <Select.Viewport>
            <Select.Group>
              {data.map((item) => (
                <Select.Item
                  key={item.value}
                  value={item.value}
                  className="cursor-pointer hover:bg-primary transition-all text-center py-1"
                >
                  <Select.ItemText className="text-center">
                    {item.text}
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton className="w-full flex-center h-6 bg-light-gray">
            <ChevronDown size={16} />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
