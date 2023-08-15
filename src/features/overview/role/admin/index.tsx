import React, { useState } from 'react';

import {
  OverviewMain,
  OverviewText,
  OverviewTextContainer,
  OverviewTextHeadline,
  OverviewTextContent,
  OverviewPILeftContent,
  OverviewPILeftHeadline,
  OverviewPILeftText,
  OverviewPILeftItem,
  OverviewPILeftLabel,
  OverviewPILeftValue,
  OverviewPiLeftImage,
  OverviewBackButton,
  OverviewGridThree,
  OverviewGridFirst,
  OverviewGridSecond,
  OverviewGridThird,
  CardProgress,
  CardProgressBar,
  CardProgressBarPopup,
  CardProgressBarItem,
  CardProgressBarPopupLabel,
  CardProgressBarPopupVaue,
  OverviewGridTwo,
  SimpleItemContainer,
  SimpleItem,
  SimpleItemValue,
  OverviewTextSubHeadline,
  HeadlineContainer,
  TextList,
  TextItem,
  AdvantagesContainer,
  AdvantagesItem,
  AdvantagesLabel,
  AdvantagesValue,
  CardProgressContainer,
  CardProgressItem,
  CardProgressValue,
  CardProgressAvailable,
} from 'features/overview/styles';
import { Gallery, Table, Tabs } from 'components/custom';
import { Button, Card, Input, Pagination } from 'components/ui';
import { DMarketHead, DOverviewHead } from 'features/overview/data';
import { Stack } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { formatNumber } from 'utilities/extended-proto';
import { LineChart } from 'components/csr';
import { CardProgressAvailableValue } from 'components/custom/card-property/styles';

const OverviewPage = () => {
  const [tab, setTab] = useState(0);
  const [auction, setAuction] = useState(false);

  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'name') {
      return 'Detailed planning of the project';
    }
    if (headItem.reference === 'published') {
      return '01.05.2023';
    }
    if (headItem.reference === 'action') {
      return (
        <Button variant="contained" color="default">
          Download
        </Button>
      );
    }

    return '';
  };

  const renderItemUpdates = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'update') {
      return 'Change of Status from In Preparation to Active';
    }
    if (headItem.reference === 'plannedDate') {
      return '01.05.2023';
    }
    if (headItem.reference === 'actualDate') {
      return '01.05.2023';
    }

    return '';
  };

  return (
    <OverviewMain>
      <Stack
        style={{ width: '100%', justifyContent: 'space-between' }}
        direction="horizontal"
      >
        <Tabs
          value={tab}
          onValue={setTab}
          tabs={[
            'Property Overview',
            'Investment Case',
            'Documents',
            'Property Updates',
          ]}
        />
        <OverviewBackButton href="/">Back</OverviewBackButton>
      </Stack>

      <Gallery
        images={[
          'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg',
          'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          'https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg',
          'https://images.pexels.com/photos/783745/pexels-photo-783745.jpeg?cs=srgb&dl=pexels-foteros-783745.jpg&fm=jpg',
          'https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg',
        ]}
      />

      {tab === 0 && (
        <>
          <OverviewGridThree>
            <OverviewGridFirst>
              <OverviewPILeftContent>
                <OverviewPILeftHeadline>Property Info</OverviewPILeftHeadline>
                <OverviewPILeftText>
                  <OverviewPILeftItem>
                    <OverviewPILeftLabel>Type</OverviewPILeftLabel>
                    <OverviewPILeftValue>Build to Rent</OverviewPILeftValue>
                  </OverviewPILeftItem>
                  <OverviewPILeftItem>
                    <OverviewPILeftLabel>Country</OverviewPILeftLabel>
                    <OverviewPILeftValue>Croatia</OverviewPILeftValue>
                  </OverviewPILeftItem>
                  <OverviewPILeftItem>
                    <OverviewPILeftLabel>Info</OverviewPILeftLabel>
                    <OverviewPILeftValue>Info</OverviewPILeftValue>
                  </OverviewPILeftItem>
                  <OverviewPILeftItem>
                    <OverviewPILeftLabel>Address</OverviewPILeftLabel>
                    <OverviewPILeftValue>Jarunska ulica 23</OverviewPILeftValue>
                  </OverviewPILeftItem>
                  <OverviewPILeftItem>
                    <OverviewPILeftLabel>Property</OverviewPILeftLabel>
                    <OverviewPILeftValue>Residential House</OverviewPILeftValue>
                  </OverviewPILeftItem>
                  <OverviewPILeftItem>
                    <OverviewPILeftLabel>Size</OverviewPILeftLabel>
                    <OverviewPILeftValue>180 sqm</OverviewPILeftValue>
                  </OverviewPILeftItem>
                </OverviewPILeftText>
              </OverviewPILeftContent>
              <iframe
                title="hu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898178.1556096235!2d15.542221069335943!3d44.816428435076865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6563e32aa64f%3A0xd8e5a5cce6dd39a3!2sProperty%20Broker!5e0!3m2!1sen!2srs!4v1691963970743!5m2!1sen!2srs"
                width="100%"
                height="250px"
                style={{ border: '0' }}
                loading="lazy"
              />{' '}
            </OverviewGridFirst>
            {auction && (
              <OverviewGridSecond>
                <OverviewPILeftHeadline>Auction</OverviewPILeftHeadline>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>
                    Starting Price pre Sqm
                  </OverviewPILeftLabel>
                  <OverviewPILeftValue>€7,552.8</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>Duration</OverviewPILeftLabel>
                  <OverviewPILeftValue>3 Months</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>Estimated Cap Rate</OverviewPILeftLabel>
                  <OverviewPILeftValue>6%</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>
                    Estimated Capital Gain
                  </OverviewPILeftLabel>
                  <OverviewPILeftValue>6.5%</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>
                    Property Management Fee
                  </OverviewPILeftLabel>
                  <OverviewPILeftValue>0.6%</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>Minimal Investment</OverviewPILeftLabel>
                  <OverviewPILeftValue>€100.00</OverviewPILeftValue>
                </OverviewPILeftItem>
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
                  <CardProgressContainer>
                    <CardProgressItem>
                      <CardProgressValue>61%</CardProgressValue>
                      funded
                    </CardProgressItem>
                    <CardProgressAvailable>
                      available
                      <CardProgressAvailableValue>
                        ${formatNumber(51223)}
                      </CardProgressAvailableValue>
                    </CardProgressAvailable>
                  </CardProgressContainer>
                </CardProgress>
                <OverviewGridTwo>
                  <Input
                    type="text"
                    placeholder="Max Price per Sqm"
                    options={[]}
                    value={null}
                    onValue={() => {}}
                  />
                  <Input
                    type="text"
                    placeholder="Total Investment"
                    value={null}
                    onValue={() => {}}
                  />
                </OverviewGridTwo>
                <Button variant="contained" color="primary">
                  Invest
                </Button>
              </OverviewGridSecond>
            )}
            {!auction && (
              <OverviewGridSecond>
                <OverviewPILeftHeadline>Primary Market</OverviewPILeftHeadline>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>Purchase Price</OverviewPILeftLabel>
                  <OverviewPILeftValue>€7,552.8</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>Duration</OverviewPILeftLabel>
                  <OverviewPILeftValue>3 Months</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>Estimated Cap Rate</OverviewPILeftLabel>
                  <OverviewPILeftValue>6%</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>
                    Estimated Capital Gain
                  </OverviewPILeftLabel>
                  <OverviewPILeftValue>6.5%</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>
                    Property Management Fee
                  </OverviewPILeftLabel>
                  <OverviewPILeftValue>0.6%</OverviewPILeftValue>
                </OverviewPILeftItem>
                <OverviewPILeftItem>
                  <OverviewPILeftLabel>Minimal Investment</OverviewPILeftLabel>
                  <OverviewPILeftValue>€100.00</OverviewPILeftValue>
                </OverviewPILeftItem>
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
                  <CardProgressContainer>
                    <CardProgressItem>
                      <CardProgressValue>61%</CardProgressValue>
                      funded
                    </CardProgressItem>
                    <CardProgressAvailable>
                      available
                      <CardProgressAvailableValue>
                        ${formatNumber(51223)}
                      </CardProgressAvailableValue>
                    </CardProgressAvailable>
                  </CardProgressContainer>
                </CardProgress>
                <Input
                  type="select"
                  placeholder="Buy Apartment?"
                  options={[]}
                  value={null}
                  onValue={() => {}}
                />
                <OverviewGridTwo>
                  <Input type="text" value={null} onValue={() => {}} />
                  <Button variant="contained" color="primary">
                    Invest
                  </Button>
                </OverviewGridTwo>
              </OverviewGridSecond>
            )}
            <OverviewGridThird>
              <OverviewPILeftHeadline>Estimated Return</OverviewPILeftHeadline>
              <LineChart
                style={{
                  height: '100px',
                  margin: '20px 0',
                  borderBottom: '1px solid #DADCE5',
                  paddingBottom: '20px',
                }}
                labels={['da', 'ne', 'da', 'ne', 'da']}
                data={[25, 50, 15, 40, 13]}
                negative={false}
              />
              <SimpleItemContainer>
                <OverviewPILeftValue>Estimated Cap Rate</OverviewPILeftValue>
                <SimpleItem>
                  <SimpleItemValue>Year 1</SimpleItemValue>
                  <SimpleItemValue>€123.22</SimpleItemValue>
                </SimpleItem>
                <SimpleItem>
                  <SimpleItemValue>Year 3</SimpleItemValue>
                  <SimpleItemValue>€123.22</SimpleItemValue>
                </SimpleItem>
                <SimpleItem>
                  <SimpleItemValue>Year 10</SimpleItemValue>
                  <SimpleItemValue>€123.22</SimpleItemValue>
                </SimpleItem>
              </SimpleItemContainer>
              <SimpleItemContainer>
                <OverviewPILeftValue>
                  Estimated Capital Gain
                </OverviewPILeftValue>
                <SimpleItem>
                  <SimpleItemValue>Year 1</SimpleItemValue>
                  <SimpleItemValue>€123.22</SimpleItemValue>
                </SimpleItem>
                <SimpleItem>
                  <SimpleItemValue>Year 3</SimpleItemValue>
                  <SimpleItemValue>€123.22</SimpleItemValue>
                </SimpleItem>
                <SimpleItem>
                  <SimpleItemValue>Year 10</SimpleItemValue>
                  <SimpleItemValue>€123.22</SimpleItemValue>
                </SimpleItem>
              </SimpleItemContainer>
              <SimpleItemContainer>
                <OverviewPILeftValue>Total</OverviewPILeftValue>
                <SimpleItem>
                  <SimpleItemValue>Year 1</SimpleItemValue>
                  <SimpleItemValue>€123.22</SimpleItemValue>
                </SimpleItem>
                <SimpleItem>
                  <SimpleItemValue>Year 3</SimpleItemValue>
                  <SimpleItemValue>€123.22</SimpleItemValue>
                </SimpleItem>
                <SimpleItem>
                  <SimpleItemValue>Year 10</SimpleItemValue>
                  <SimpleItemValue>€123.22</SimpleItemValue>
                </SimpleItem>
              </SimpleItemContainer>
            </OverviewGridThird>
          </OverviewGridThree>
          <OverviewText>
            <OverviewTextContainer>
              <OverviewTextHeadline>The Area</OverviewTextHeadline>
              <OverviewTextContent>
                Jarun Lake Residential House is situated in a serene natural
                setting, next to the picturesque Jarun Lake in Zagreb. The
                development offers a tranquil lifestyle just a stone&apos;s
                throw away from the hustle and bustle of the city center. With
                its convenient location, the residential house is easily
                accessible via the nearby highways, making it an ideal location
                for those who value connectivity.
              </OverviewTextContent>
              <OverviewTextContent>
                The beautiful Jarun Lake is a mere 100m away from the
                residential premises, and the lake&apos;s sandy beach with
                volleyball courts is just a 10-15min walk away. The municipality
                is also planning to create a hiking trail around the lake,
                offering residents an opportunity to explore the stunning
                natural surroundings.
              </OverviewTextContent>
              <OverviewTextContent>
                The location of Jarun Lake Residential House provides easy
                access to all essential amenities, with the city center just a
                short drive away or a 10-minute ride on public transportation.
                This makes it an excellent location for families who value
                privacy and nature while still being close to the city&apos;s
                conveniences.
              </OverviewTextContent>
            </OverviewTextContainer>
            <OverviewTextContainer>
              <OverviewTextHeadline>The Property</OverviewTextHeadline>
              <OverviewTextContent>
                The upcoming Jarun Lake Residential House project will be built
                on a plot of land with a cadaster number of 44605:001:1020. The
                total area of the land is 10 hectares, out of which 8.2 hectares
                have been approved for detailed planning as living area. The
                project will include 30 single houses and 4 terraced houses, and
                the land has already been pre-divided into separate plots. The
                development of this massive project will be carried out in 4
                separate stages.
              </OverviewTextContent>
              <OverviewTextContent>
                The first stage of the project involves the construction of 7
                single houses. Each house will be built on a separate plot of
                land measuring approximately 1600 m2. The houses will have a
                total area ranging from 150 to 200 m2. Currently, a high-voltage
                line runs along the edge of the land, but it will be moved
                within the next 6-8 months according to a signed agreement with
                the electricity network.
              </OverviewTextContent>
            </OverviewTextContainer>
          </OverviewText>
        </>
      )}
      {tab === 1 && (
        <OverviewText>
          <OverviewTextContainer>
            <HeadlineContainer>
              <OverviewTextHeadline>Investment Case</OverviewTextHeadline>
              <OverviewTextSubHeadline>
                Project’s Main Advantages
              </OverviewTextSubHeadline>
            </HeadlineContainer>
            <TextList>
              <TextItem>
                Detailed planning approved, construction permits in progress;
              </TextItem>
              <TextItem>
                Extraordinary performance, with monthly interest payment:
              </TextItem>
              <TextItem>
                Reinvest24 has control over the development process;
              </TextItem>
              <TextItem>
                The current actual LTV for this stage is around 15%.
              </TextItem>
            </TextList>
            <OverviewTextContent>
              With this stage we are financing the first construction stage of
              Lepiku Lake Residence, which includes 7 single houses with
              necessary infrastructure. The detailed planning has been approved
              and the developer is currently obtaining construction permits.
              This project will be implemented by SPV, where Reinvest24 has
              control over the whole process. The ownership of the land will be
              transferred to this SPV, through notarial debt agreement.
            </OverviewTextContent>
            <OverviewTextContent>
              The whole land, 30 plots for single houses and 4 plots for
              terraced houses, is the collateral for our investors. The current
              conservative market value of the land plot is 2.4m EUR.
            </OverviewTextContent>
            Currently, the land plots with detailed planning for single houses
            are sold for ~100 000 EUR. The plots with the lake view are even
            more expensive. The actual LTV for the first stage is around 15%. It
            will increase up to 75% from the current value of the collateral.
            However, as the raised funds will be used to develop this land plot,
            the value of it will grow and we estimate that the actual LTV should
            stay around 50% for the whole duration of this project. The loan
            will be repaid by selling the planned houses or refinancing it
            through a financial institution. It is possible that bank financing
            will be used at the last stage of this project in order to refinance
            early stages of existing loans and to finance ongoing construction.
            <OverviewTextContent>
              The total costs of infrastructure and utility connections for the
              whole project is around 800 000 EUR. Construction costs for the
              first 7 single houses are 1 470 000 EUR, that includes a small
              buffer for construction materials price increase.
            </OverviewTextContent>
          </OverviewTextContainer>
          <OverviewTextContainer>
            <OverviewTextHeadline>
              The Main Project Numbers
            </OverviewTextHeadline>
            <AdvantagesContainer>
              <AdvantagesItem>
                <AdvantagesLabel>Architecture and planning</AdvantagesLabel>
                <AdvantagesValue>€100.00</AdvantagesValue>
              </AdvantagesItem>
              <AdvantagesItem>
                <AdvantagesLabel>Infrastructure</AdvantagesLabel>
                <AdvantagesValue>€100.00</AdvantagesValue>
              </AdvantagesItem>
              <AdvantagesItem>
                <AdvantagesLabel>Construction costs</AdvantagesLabel>
                <AdvantagesValue>€100.00</AdvantagesValue>
              </AdvantagesItem>
              <AdvantagesItem>
                <AdvantagesLabel>Other costs</AdvantagesLabel>
                <AdvantagesValue>€100.00</AdvantagesValue>
              </AdvantagesItem>
              <AdvantagesItem>
                <AdvantagesLabel>Renovation</AdvantagesLabel>
                <AdvantagesValue>€100.00</AdvantagesValue>
              </AdvantagesItem>
              <AdvantagesItem>
                <AdvantagesLabel>Profit</AdvantagesLabel>
                <AdvantagesValue>€100.00</AdvantagesValue>
              </AdvantagesItem>
            </AdvantagesContainer>
          </OverviewTextContainer>
        </OverviewText>
      )}
      {tab === 2 && (
        <Card>
          <OverviewTextHeadline style={{ marginBottom: '15px' }}>
            Documents
          </OverviewTextHeadline>
          <Table
            head={DOverviewHead}
            items={[
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
              {
                name: 'Detailed planning of the project',
                published: '01.05.2023',
                action: 'a',
              },
            ]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
        </Card>
      )}
      {tab === 3 && (
        <Card>
          <OverviewTextHeadline style={{ marginBottom: '15px' }}>
            Updates
          </OverviewTextHeadline>
          <Table
            head={DMarketHead}
            items={[
              {
                update: 'Change of Status from In Preparation to Active',
                plannedDate: '01.05.2023',
                actualDate: 'a',
              },
              {
                update: 'Change of Status from In Preparation to Active',
                plannedDate: '01.05.2023',
                actualDate: 'a',
              },
              {
                update: 'Change of Status from In Preparation to Active',
                plannedDate: '01.05.2023',
                actualDate: 'a',
              },
              {
                update: 'Change of Status from In Preparation to Active',
                plannedDate: '01.05.2023',
                actualDate: 'a',
              },
              {
                update: 'Change of Status from In Preparation to Active',
                plannedDate: '01.05.2023',
                actualDate: 'a',
              },
              {
                update: 'Change of Status from In Preparation to Active',
                plannedDate: '01.05.2023',
                actualDate: 'a',
              },
            ]}
            renderItem={renderItemUpdates}
          />
          <Pagination count={32} />
        </Card>
      )}
    </OverviewMain>
  );
};

export default OverviewPage;
