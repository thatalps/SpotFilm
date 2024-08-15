'use client'

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts'

import { Card, CardContent } from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { useEffect, useState } from 'react'

const chartConfig = {
  bad: {
    label: 'bad',
    color: 'hsl(var(--chart-1))',
  },
  median: {
    label: 'bad',
    color: 'hsl(var(--chart-4))',
  },
  good: {
    label: 'bad',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function RadialChart({ rating }: { rating: number }) {
  const [percentage, setPercentage] = useState(360)
  const [color, setColor] = useState('')

  useEffect(() => {
    setPercentage(36 * rating)
    console.log(rating > 0)

    if (rating < 5) {
      setColor('var(--color-bad)')
    } else if (rating < 7) {
      setColor('var(--color-median)')
    } else {
      setColor('var(--color-good)')
    }
  }, [rating])

  const chartData = [{ visitors: rating, fill: color }]
  return (
    <Card className="flex flex-col bg-transparent border-0">
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="h-[100px] w-[100px]">
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={percentage}
            innerRadius={40}
            outerRadius={70}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[46, 34]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className={'text-sm'}
                        >
                          Nota
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
