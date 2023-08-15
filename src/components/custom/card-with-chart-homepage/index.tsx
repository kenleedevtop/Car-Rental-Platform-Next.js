import React from 'react';
import {
  CardWithChartMain,
  CardWithChartText,
  CardWithChartIcon,
  CardWithChartTitle,
  CardWithChartValues,
  CardWithChartCount,
  CardWithChartGraph,
  CardWithChartGraphContainer,
  CardWithChartGraphItem,
  CardWithChartGraphLabel,
  CardWithChartGraphValue,
  CardWithChartHeadline,
  CardWithChartContainer,
  CardWithChartItems,
  CardWithChartHomeItem,
  CardWithChartHomeItemLabel,
  CardWithChartHomeItemValue,
  ChartActionsContainer,
} from 'components/custom/card-with-chart-homepage/styles';
import { TCardWithChartProps } from 'components/custom/card-with-chart-homepage/types';
import { PercentIndicator } from 'components/custom/card-with-chart/elements';
import { LineChart } from 'components/csr';
import { BusinessmanIcon } from 'components/svg';
import { formatNumber } from 'utilities/extended-proto';
import { Button } from 'components/ui';
import { ChartActions } from 'components/custom/card-with-chart-homepage/elements';

const CardWithChart = ({
  title,
  icon,
  smallIcon = <BusinessmanIcon />,
  count,
  percent,
  chartData,
  actions,
  type,
  values,
  buttonLabel,
  ...props
}: TCardWithChartProps) => (
  <CardWithChartMain animation="zoom-in" {...props}>
    {actions && (
      <ChartActionsContainer>
        <ChartActions />
      </ChartActionsContainer>
    )}
    <CardWithChartHeadline>
      <CardWithChartText>
        <CardWithChartIcon>{icon}</CardWithChartIcon>
        <CardWithChartTitle>{title}</CardWithChartTitle>
      </CardWithChartText>
      <PercentIndicator percent={percent} />
    </CardWithChartHeadline>
    <CardWithChartValues>
      <CardWithChartCount>
        {smallIcon}€{formatNumber(count)}
      </CardWithChartCount>
    </CardWithChartValues>
    <CardWithChartGraph>
      <LineChart
        data={chartData.values}
        labels={chartData.labels}
        negative={percent < 0}
      />
    </CardWithChartGraph>
    <CardWithChartGraphContainer>
      {type === 'PF' && (
        <CardWithChartContainer>
          <CardWithChartContainer>
            <CardWithChartGraphItem>
              <CardWithChartGraphLabel>In Preparation</CardWithChartGraphLabel>
              <CardWithChartGraphValue>
                €{formatNumber(1123.22)}
              </CardWithChartGraphValue>
            </CardWithChartGraphItem>
            <CardWithChartItems>
              {values.map((x: any) => (
                <CardWithChartHomeItem>
                  <CardWithChartHomeItemLabel>
                    {x.label}
                  </CardWithChartHomeItemLabel>
                  <CardWithChartHomeItemValue>
                    €{formatNumber(x.value)}
                  </CardWithChartHomeItemValue>
                </CardWithChartHomeItem>
              ))}
            </CardWithChartItems>
          </CardWithChartContainer>
          <CardWithChartContainer>
            <CardWithChartGraphItem>
              <CardWithChartGraphLabel>Active</CardWithChartGraphLabel>
              <CardWithChartGraphValue>
                €{formatNumber(1123.22)}
              </CardWithChartGraphValue>
            </CardWithChartGraphItem>
            <CardWithChartItems>
              {values.map((x: any) => (
                <CardWithChartHomeItem>
                  <CardWithChartHomeItemLabel>
                    {x.label}
                  </CardWithChartHomeItemLabel>
                  <CardWithChartHomeItemLabel>
                    €{formatNumber(x.value)}
                  </CardWithChartHomeItemLabel>
                </CardWithChartHomeItem>
              ))}
            </CardWithChartItems>
          </CardWithChartContainer>
          <CardWithChartGraphItem>
            <CardWithChartGraphLabel>Total</CardWithChartGraphLabel>
            <CardWithChartGraphValue>
              €{formatNumber(1123.22)}
            </CardWithChartGraphValue>
          </CardWithChartGraphItem>
        </CardWithChartContainer>
      )}
      {type === 'AR' && (
        <CardWithChartContainer>
          <CardWithChartContainer>
            <CardWithChartGraphItem>
              <CardWithChartGraphLabel>Income</CardWithChartGraphLabel>
              <CardWithChartGraphValue>
                €{formatNumber(1123.22)}
              </CardWithChartGraphValue>
            </CardWithChartGraphItem>
            <CardWithChartItems>
              {values.map((x: any) => (
                <CardWithChartHomeItem>
                  <CardWithChartHomeItemLabel>
                    {x.label}
                  </CardWithChartHomeItemLabel>
                  <CardWithChartHomeItemValue>
                    €{formatNumber(x.value)}
                  </CardWithChartHomeItemValue>
                </CardWithChartHomeItem>
              ))}
            </CardWithChartItems>
          </CardWithChartContainer>
          <CardWithChartContainer>
            <CardWithChartGraphItem>
              <CardWithChartGraphLabel>Cost</CardWithChartGraphLabel>
              <CardWithChartGraphValue>
                €{formatNumber(1123.22)}
              </CardWithChartGraphValue>
            </CardWithChartGraphItem>
            <CardWithChartItems>
              {values.map((x: any) => (
                <CardWithChartHomeItem>
                  <CardWithChartHomeItemLabel>
                    {x.label}
                  </CardWithChartHomeItemLabel>
                  <CardWithChartHomeItemValue>
                    €{formatNumber(x.value)}
                  </CardWithChartHomeItemValue>
                </CardWithChartHomeItem>
              ))}
            </CardWithChartItems>
          </CardWithChartContainer>
          <CardWithChartGraphItem>
            <CardWithChartGraphLabel>Profit</CardWithChartGraphLabel>
            <CardWithChartGraphValue>
              €{formatNumber(1123.22)}
            </CardWithChartGraphValue>
          </CardWithChartGraphItem>
        </CardWithChartContainer>
      )}
      {type === 'AB' && (
        <CardWithChartContainer>
          <CardWithChartContainer>
            <CardWithChartGraphItem>
              <CardWithChartGraphLabel>
                Total Account Value
              </CardWithChartGraphLabel>
              <CardWithChartGraphValue>
                €{formatNumber(1123.22)}
              </CardWithChartGraphValue>
            </CardWithChartGraphItem>
            <CardWithChartItems>
              {values.map((x: any) => (
                <CardWithChartHomeItem>
                  <CardWithChartHomeItemLabel>
                    {x.label}
                  </CardWithChartHomeItemLabel>
                  <CardWithChartHomeItemValue>
                    €{formatNumber(x.value)}
                  </CardWithChartHomeItemValue>
                </CardWithChartHomeItem>
              ))}
            </CardWithChartItems>
          </CardWithChartContainer>
          <CardWithChartContainer>
            <CardWithChartGraphItem>
              <CardWithChartGraphLabel>Invested</CardWithChartGraphLabel>
              <CardWithChartGraphValue>
                €{formatNumber(1123.22)}
              </CardWithChartGraphValue>
            </CardWithChartGraphItem>
            <CardWithChartItems>
              {values.map((x: any) => (
                <CardWithChartHomeItem>
                  <CardWithChartHomeItemLabel>
                    {x.label}
                  </CardWithChartHomeItemLabel>
                  <CardWithChartHomeItemValue>
                    €{formatNumber(x.value)}
                  </CardWithChartHomeItemValue>
                </CardWithChartHomeItem>
              ))}
            </CardWithChartItems>
          </CardWithChartContainer>
          <CardWithChartGraphItem>
            <CardWithChartGraphLabel>Available amount</CardWithChartGraphLabel>
            <CardWithChartGraphValue>
              €{formatNumber(1123.22)}
            </CardWithChartGraphValue>
          </CardWithChartGraphItem>
        </CardWithChartContainer>
      )}
    </CardWithChartGraphContainer>
    <Button style={{ marginTop: '30px' }} variant="contained" color="primary">
      {buttonLabel}
    </Button>
  </CardWithChartMain>
);

export default CardWithChart;
