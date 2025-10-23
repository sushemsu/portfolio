/*"use client";

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
} from "recharts"

const Demo = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}




// playing around with custom card defs
import { Card, Separator } from "@chakra-ui/react"
import { ReactNode } from 'react';

// 
interface CardTextProps {
	children: ReactNode;
}
interface CardTitleProps {
	children: ReactNode;
}
interface CardRootProps {
  children: ReactNode;
  //className?: string;
  width?: string;
}

const CardText = ({ children }: CardTextProps) => {
  return (
    <Card.Description >
      <Separator mb="2"/>
      { children }
    </Card.Description>
)
};

const CardTitle = ({ children }: CardTitleProps) => {
  return (
         <Card.Title mt="2">{children}</Card.Title>
	)
};

const ElementCardRoot = ({ children, className }: CardRootProps) => {
  return (
    <Card.Root size="lg">
      <Card.Body gap="4" color="fg.muted">
		{children}
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
      </Card.Footer>
    </Card.Root>
  )
}

export const ElementCard = Object.assign(ElementCardRoot, {
  CardTitle: CardTitle,
  CardText: CardText,
});
*/