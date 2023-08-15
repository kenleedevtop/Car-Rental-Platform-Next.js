import React from 'react';
import {
  HomePageMain,
  HomePageCharts,
  InvestorHomePageChartsGrid,
  HomePageChartsLabel,
  InvestorHomePageGrid,
  InvestorHomePageMarketGrid,
  InvestorHomePageMarketItem,
  InvestorHomePageMarketContent,
  InvestorHomePageMarketImage,
  InvestorHomePageMarketContainer,
  InvestorHomePageMarketItemHeadLine,
  InvestorHomePageMarketItemAddress,
  InvestorHomePageProgressbar,
  InvestorHomePagePrice,
  CardProgressBarPopup,
  CardProgress,
  CardProgressBar,
  CardProgressBarItem,
  CardProgressBarPopupLabel,
  CardProgressBarPopupVaue,
} from 'features/home/styles';
import { CardWithChartHomepage } from 'components/custom';
import { RevenueIcon, FinanceSmallIcon } from 'components/svg';
import { faker } from '@faker-js/faker';
import { Card, Pagination } from 'components/ui';
import { formatNumber } from 'utilities/extended-proto';
import { Stack } from 'components/system';

const HomePage = () => (
  <HomePageMain>
    <HomePageCharts>
      <InvestorHomePageChartsGrid>
        <CardWithChartHomepage
          title="Portfolio"
          icon={<RevenueIcon />}
          smallIcon={<FinanceSmallIcon />}
          percent={2}
          actions
          count={7552.8}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
          total={7552.8}
          type="PF"
          buttonLabel="Portfolio"
          values={[
            {
              label: 'Funding Stage',
              value: 123.22,
            },
            {
              label: 'Execution',
              value: 123.22,
            },
            {
              label: 'Funding Stage',
              value: 123.22,
            },
          ]}
        />
        <CardWithChartHomepage
          title="Annual Return"
          icon={<RevenueIcon />}
          smallIcon={<FinanceSmallIcon />}
          percent={2}
          actions={false}
          count={7552.8}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
          total={7552.8}
          type="AR"
          buttonLabel="Invest"
          values={[
            {
              label: 'Funding Stage',
              value: 123.22,
            },
            {
              label: 'Execution',
              value: 123.22,
            },
            {
              label: 'Funding Stage',
              value: 123.22,
            },
          ]}
        />
        <CardWithChartHomepage
          title="Account Balance"
          icon={<RevenueIcon />}
          smallIcon={<FinanceSmallIcon />}
          percent={2}
          actions={false}
          count={7552.8}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
          total={7552.8}
          type="AB"
          buttonLabel="Deposit"
          values={[
            {
              label: 'Funding Stage',
              value: 123.22,
            },
            {
              label: 'Execution',
              value: 123.22,
            },
            {
              label: 'Funding Stage',
              value: 123.22,
            },
          ]}
        />
      </InvestorHomePageChartsGrid>
    </HomePageCharts>
    <InvestorHomePageGrid>
      <Card>
        <Stack>
          <HomePageChartsLabel>Primary Market</HomePageChartsLabel>
          <InvestorHomePageMarketGrid>
            <InvestorHomePageMarketItem>
              <InvestorHomePageMarketContent>
                <InvestorHomePageMarketImage src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg" />
                <InvestorHomePageMarketContainer>
                  <InvestorHomePageMarketItemHeadLine>
                    Zagreb
                  </InvestorHomePageMarketItemHeadLine>
                  <InvestorHomePageMarketItemAddress>
                    Ulica Ivana Jurisica 23
                  </InvestorHomePageMarketItemAddress>
                </InvestorHomePageMarketContainer>
              </InvestorHomePageMarketContent>
              <InvestorHomePageProgressbar>
                <CardProgress>
                  <CardProgressBar fundPercent={64} />
                  <CardProgressBarPopup>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Founders
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Investor 1
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Investor 2
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                  </CardProgressBarPopup>
                </CardProgress>
              </InvestorHomePageProgressbar>
            </InvestorHomePageMarketItem>
            <InvestorHomePageMarketItem>
              <InvestorHomePageMarketContent>
                <InvestorHomePageMarketImage src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg" />
                <InvestorHomePageMarketContainer>
                  <InvestorHomePageMarketItemHeadLine>
                    Zagreb
                  </InvestorHomePageMarketItemHeadLine>
                  <InvestorHomePageMarketItemAddress>
                    Ulica Ivana Jurisica 23
                  </InvestorHomePageMarketItemAddress>
                </InvestorHomePageMarketContainer>
              </InvestorHomePageMarketContent>
              <InvestorHomePageProgressbar>
                <CardProgress>
                  <CardProgressBar fundPercent={64} />
                  <CardProgressBarPopup>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Founders
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Investor 1
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Investor 2
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                  </CardProgressBarPopup>
                </CardProgress>
              </InvestorHomePageProgressbar>
            </InvestorHomePageMarketItem>
            <InvestorHomePageMarketItem>
              <InvestorHomePageMarketContent>
                <InvestorHomePageMarketImage src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg" />
                <InvestorHomePageMarketContainer>
                  <InvestorHomePageMarketItemHeadLine>
                    Zagreb
                  </InvestorHomePageMarketItemHeadLine>
                  <InvestorHomePageMarketItemAddress>
                    Ulica Ivana Jurisica 23
                  </InvestorHomePageMarketItemAddress>
                </InvestorHomePageMarketContainer>
              </InvestorHomePageMarketContent>
              <InvestorHomePageProgressbar>
                <CardProgress>
                  <CardProgressBar fundPercent={64} />
                  <CardProgressBarPopup>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Founders
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Investor 1
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Investor 2
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                  </CardProgressBarPopup>
                </CardProgress>
              </InvestorHomePageProgressbar>
            </InvestorHomePageMarketItem>
            <InvestorHomePageMarketItem>
              <InvestorHomePageMarketContent>
                <InvestorHomePageMarketImage src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg" />
                <InvestorHomePageMarketContainer>
                  <InvestorHomePageMarketItemHeadLine>
                    Zagreb
                  </InvestorHomePageMarketItemHeadLine>
                  <InvestorHomePageMarketItemAddress>
                    Ulica Ivana Jurisica 23
                  </InvestorHomePageMarketItemAddress>
                </InvestorHomePageMarketContainer>
              </InvestorHomePageMarketContent>
              <InvestorHomePageProgressbar>
                <CardProgress>
                  <CardProgressBar fundPercent={64} />
                  <CardProgressBarPopup>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Founders
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Investor 1
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                    <CardProgressBarItem>
                      <CardProgressBarPopupLabel>
                        Investor 2
                      </CardProgressBarPopupLabel>
                      <CardProgressBarPopupVaue>
                        €{formatNumber(1123.22)}
                      </CardProgressBarPopupVaue>
                    </CardProgressBarItem>
                  </CardProgressBarPopup>
                </CardProgress>
              </InvestorHomePageProgressbar>
            </InvestorHomePageMarketItem>
          </InvestorHomePageMarketGrid>
          <Pagination count={32} />
        </Stack>
      </Card>
      <Card>
        <Stack>
          <HomePageChartsLabel>Secondary Market</HomePageChartsLabel>
          <InvestorHomePageMarketGrid>
            <InvestorHomePageMarketItem>
              <InvestorHomePageMarketContent>
                <InvestorHomePageMarketImage src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg" />
                <InvestorHomePageMarketContainer>
                  <InvestorHomePageMarketItemHeadLine>
                    Zagreb
                  </InvestorHomePageMarketItemHeadLine>
                  <InvestorHomePageMarketItemAddress>
                    Ulica Ivana Jurisica 23
                  </InvestorHomePageMarketItemAddress>
                </InvestorHomePageMarketContainer>
              </InvestorHomePageMarketContent>
              <InvestorHomePagePrice>€2500/sqm</InvestorHomePagePrice>
            </InvestorHomePageMarketItem>
            <InvestorHomePageMarketItem>
              <InvestorHomePageMarketContent>
                <InvestorHomePageMarketImage src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg" />
                <InvestorHomePageMarketContainer>
                  <InvestorHomePageMarketItemHeadLine>
                    Zagreb
                  </InvestorHomePageMarketItemHeadLine>
                  <InvestorHomePageMarketItemAddress>
                    Ulica Ivana Jurisica 23
                  </InvestorHomePageMarketItemAddress>
                </InvestorHomePageMarketContainer>
              </InvestorHomePageMarketContent>
              <InvestorHomePagePrice>€2500/sqm</InvestorHomePagePrice>
            </InvestorHomePageMarketItem>
            <InvestorHomePageMarketItem>
              <InvestorHomePageMarketContent>
                <InvestorHomePageMarketImage src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg" />
                <InvestorHomePageMarketContainer>
                  <InvestorHomePageMarketItemHeadLine>
                    Zagreb
                  </InvestorHomePageMarketItemHeadLine>
                  <InvestorHomePageMarketItemAddress>
                    Ulica Ivana Jurisica 23
                  </InvestorHomePageMarketItemAddress>
                </InvestorHomePageMarketContainer>
              </InvestorHomePageMarketContent>
              <InvestorHomePagePrice>€2500/sqm</InvestorHomePagePrice>
            </InvestorHomePageMarketItem>
            <InvestorHomePageMarketItem>
              <InvestorHomePageMarketContent>
                <InvestorHomePageMarketImage src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg" />
                <InvestorHomePageMarketContainer>
                  <InvestorHomePageMarketItemHeadLine>
                    Zagreb
                  </InvestorHomePageMarketItemHeadLine>
                  <InvestorHomePageMarketItemAddress>
                    Ulica Ivana Jurisica 23
                  </InvestorHomePageMarketItemAddress>
                </InvestorHomePageMarketContainer>
              </InvestorHomePageMarketContent>
              <InvestorHomePagePrice>€2500/sqm</InvestorHomePagePrice>
            </InvestorHomePageMarketItem>
          </InvestorHomePageMarketGrid>
          <Pagination count={32} />
        </Stack>
      </Card>
    </InvestorHomePageGrid>
  </HomePageMain>
);

export default HomePage;
