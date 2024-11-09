// src/components/GoogleTrendsChart.jsx
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '~/components/ui/card';
import { TrendingUp } from 'lucide-react';

const chartData = [
  { month: '2014-10', value: 7 },
  { month: '2014-11', value: 7 },
  { month: '2014-12', value: 7 },
  { month: '2015-01', value: 8 },
  { month: '2015-02', value: 7 },
  { month: '2015-03', value: 7 },
  { month: '2015-04', value: 7 },
  { month: '2015-05', value: 8 },
  { month: '2015-06', value: 7 },
  { month: '2015-07', value: 7 },
  { month: '2015-08', value: 7 },
  { month: '2015-09', value: 7 },
  { month: '2015-10', value: 7 },
  { month: '2015-11', value: 7 },
  { month: '2015-12', value: 7 },
  { month: '2016-01', value: 7 },
  { month: '2016-02', value: 7 },
  { month: '2016-03', value: 8 },
  { month: '2016-04', value: 7 },
  { month: '2016-05', value: 7 },
  { month: '2016-06', value: 7 },
  { month: '2016-07', value: 7 },
  { month: '2016-08', value: 7 },
  { month: '2016-09', value: 8 },
  { month: '2016-10', value: 8 },
  { month: '2016-11', value: 3 },
  { month: '2016-12', value: 3 },
  { month: '2017-01', value: 3 },
  { month: '2017-02', value: 3 },
  { month: '2017-03', value: 3 },
  { month: '2017-04', value: 3 },
  { month: '2017-05', value: 3 },
  { month: '2017-06', value: 3 },
  { month: '2017-07', value: 3 },
  { month: '2017-08', value: 4 },
  { month: '2017-09', value: 4 },
  { month: '2017-10', value: 4 },
  { month: '2017-11', value: 5 },
  { month: '2017-12', value: 4 },
  { month: '2018-01', value: 5 },
  { month: '2018-02', value: 5 },
  { month: '2018-03', value: 7 },
  { month: '2018-04', value: 6 },
  { month: '2018-05', value: 7 },
  { month: '2018-06', value: 6 },
  { month: '2018-07', value: 6 },
  { month: '2018-08', value: 6 },
  { month: '2018-09', value: 7 },
  { month: '2018-10', value: 7 },
  { month: '2018-11', value: 8 },
  { month: '2018-12', value: 8 },
  { month: '2019-01', value: 8 },
  { month: '2019-02', value: 8 },
  { month: '2019-03', value: 8 },
  { month: '2019-04', value: 8 },
  { month: '2019-05', value: 8 },
  { month: '2019-06', value: 9 },
  { month: '2019-07', value: 9 },
  { month: '2019-08', value: 8 },
  { month: '2019-09', value: 7 },
  { month: '2019-10', value: 8 },
  { month: '2019-11', value: 8 },
  { month: '2019-12', value: 7 },
  { month: '2020-01', value: 7 },
  { month: '2020-02', value: 8 },
  { month: '2020-03', value: 8 },
  { month: '2020-04', value: 8 },
  { month: '2020-05', value: 8 },
  { month: '2020-06', value: 8 },
  { month: '2020-07', value: 7 },
  { month: '2020-08', value: 7 },
  { month: '2020-09', value: 7 },
  { month: '2020-10', value: 7 },
  { month: '2020-11', value: 7 },
  { month: '2020-12', value: 8 },
  { month: '2021-01', value: 7 },
  { month: '2021-02', value: 8 },
  { month: '2021-03', value: 8 },
  { month: '2021-04', value: 8 },
  { month: '2021-05', value: 8 },
  { month: '2021-06', value: 8 },
  { month: '2021-07', value: 8 },
  { month: '2021-08', value: 8 },
  { month: '2021-09', value: 8 },
  { month: '2021-10', value: 9 },
  { month: '2021-11', value: 10 },
  { month: '2021-12', value: 10 },
  { month: '2022-01', value: 10 },
  { month: '2022-02', value: 11 },
  { month: '2022-03', value: 12 },
  { month: '2022-04', value: 11 },
  { month: '2022-05', value: 12 },
  { month: '2022-06', value: 13 },
  { month: '2022-07', value: 12 },
  { month: '2022-08', value: 14 },
  { month: '2022-09', value: 15 },
  { month: '2022-10', value: 16 },
  { month: '2022-11', value: 16 },
  { month: '2022-12', value: 27 },
  { month: '2023-01', value: 27 },
  { month: '2023-02', value: 33 },
  { month: '2023-03', value: 38 },
  { month: '2023-04', value: 49 },
  { month: '2023-05', value: 57 },
  { month: '2023-06', value: 59 },
  { month: '2023-07', value: 58 },
  { month: '2023-08', value: 54 },
  { month: '2023-09', value: 53 },
  { month: '2023-10', value: 64 },
  { month: '2023-11', value: 67 },
  { month: '2023-12', value: 65 },
  { month: '2024-01', value: 70 },
  { month: '2024-02', value: 72 },
  { month: '2024-03', value: 75 },
  { month: '2024-04', value: 76 },
  { month: '2024-05', value: 77 },
  { month: '2024-06', value: 75 },
  { month: '2024-07', value: 70 },
  { month: '2024-08', value: 78 },
  { month: '2024-09', value: 88 },
  { month: '2024-10', value: 98 },
  { month: '2024-11', value: 100 },
];

const GoogleTrendsChart = () => {
  return (
    <Card className="[--chart-1:var(--primary)]">
      <CardHeader>
        <CardTitle>Google Trends - Interest Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                interval={12}
                tickFormatter={(value) => value.slice(0, 4)}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                }}
                labelStyle={{
                  color: 'hsl(var(--foreground))',
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="currentColor"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up over time <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing interest in "Artificial Intelligence" from Google Trends.
        </div>
      </CardFooter>
    </Card>
  );
};
export default GoogleTrendsChart;
