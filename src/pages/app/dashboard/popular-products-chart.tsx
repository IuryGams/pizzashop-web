import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import colors from "tailwindcss/colors"

import { ResponsiveContainer, PieChart, Pie, Cell, } from "recharts"
import { BarChart } from "lucide-react";

const data = [
    { product: "Pepperoni", amount: 10 },
    { product: "Calabresa", amount: 20 },
    { product: "Carne de Sol", amount: 5 },
    { product: "Portuguesa", amount: 12 },
    { product: "Mussarela", amount: 2 },
]

const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
]

interface LabelFunctionProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    value: number;
    index: number;
}

const labelFunction = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }: LabelFunctionProps) => {
    const RADIAN = Math.PI / 180;
    const radius = 12 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            className="fill-muted-foreground text-xs"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {data[index].product.length > 12
                ? data[index].product.substring(0, 12).concat("...")
                : data[index].product}{' '}
            ({value})
        </text>
    )
}

export function PopularProductsChart() {
    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart style={{ fontSize: 12 }}>
                        <Pie
                            data={data}
                            dataKey="amount"
                            nameKey="product"
                            cx="50%"
                            cy="50%"
                            outerRadius={86}
                            innerRadius={64}
                            strokeWidth={8}
                            labelLine={false}
                            label={labelFunction}
                        >
                            {data.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} className="stroke-background hover:opacity-80" />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}