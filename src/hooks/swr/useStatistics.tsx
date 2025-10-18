"use client"

import { StatisticsService } from "@/service/Statistics"
import { TStatisticsResponse } from "@/service/types"
import { CONFIG } from "@/utils/Config"
import useSWR from "swr"

type TStatisticsProps = {
  month: number
}

export default function useStatistics({ month }: TStatisticsProps) {
  const statisticsService = new StatisticsService()
  const { data, error, isLoading } = useSWR<TStatisticsResponse>(
    [CONFIG.CACHE_KEYS.STATISTICS, month],
    ([, month]) => statisticsService.find(month as number)
  )

  return {
    isLoading,
    statistics: data,
    isError: error,
  }
}
