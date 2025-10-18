"use client"

import clsx from "clsx"
import { Home, MenuIcon, PlusSquare, X } from "lucide-react"
import { useState } from "react"
import LinkButton from "../LinkButton"
import { TMenuItem } from "../Menu/types"
import { SideMenu } from "./SideMenu"

export default function DashboardSideMenu() {
  const menuItems: TMenuItem[] = [
    {
      Icon: Home,
      title: "Início",
      path: "/",
    },
  ]
  const [isActived, setIsActived] = useState(false)

  const toggleMenu = () => {
    setIsActived(!isActived)
  }

  return (
    <SideMenu.Root className="h-full">
      <SideMenu.ToggleButton onClick={toggleMenu}>
        <MenuIcon size={16} />
      </SideMenu.ToggleButton>

      <SideMenu.Container
        className={clsx(
          "absolute bg-dark-gray h-full w-full z-2 top-0 left-0 p-8 pt-0 flex flex-col gap-6 transition-all",
          {
            "translate-x-[-100%]": !isActived,
          }
        )}
      >
        <button
          className="flex-center gap-8 font-mono tracking-[15px] w-full border-b border-white/10 h-16 !rounded-none"
          onClick={toggleMenu}
        >
          <X size={16} />
          FECHAR
        </button>

        <div className="grid grid-cols-3 gap-2 p-4 bg-light-gray/20 rounded-lg">
          <LinkButton href="/debts/new" className="after:bg-emerald-500">
            <PlusSquare size={18} /> Dívida
          </LinkButton>

          <LinkButton href="/tasks/new" actived className="after:bg-yellow-500">
            <PlusSquare size={18} /> Tarefa
          </LinkButton>

          <LinkButton href="/events/new" inversed className="after:bg-blue-500">
            <PlusSquare size={18} /> Evento
          </LinkButton>
        </div>

        <SideMenu.Options className="flex gap-6 flex-col">
          {menuItems.map((item) => (
            <SideMenu.Item
              actived={item.title == "Início"}
              key={item.title}
              onClick={toggleMenu}
              href={item.path}
              text={item.title}
              Icon={item.Icon}
            />
          ))}
        </SideMenu.Options>
      </SideMenu.Container>
    </SideMenu.Root>
  )
}
