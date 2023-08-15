import React, { useState } from 'react';

import {
  OverviewMain,
  OverviewText,
  OverviewTextContainer,
  OverviewTextHeadline,
  OverviewTextContent,
  OverviewPIContainer,
  OverviewPILeft,
  OverviewPILeftContent,
  OverviewPILeftHeadline,
  OverviewPILeftText,
  OverviewPILeftItem,
  OverviewPILeftLabel,
  OverviewPILeftValue,
  OverviewPiLeftImage,
  OverviewPIRight,
  OverviewPIRightContent,
  OverviewPIRightItem,
  OverviewPIRightLabel,
  OverviewPIRightValue,
  OverviewPIRightButton,
  OverviewPIRightDelete,
  OverviewBackButton,
} from 'features/overview/styles';
import { Gallery, Table, Tabs } from 'components/custom';
import { Button, Card, Pagination } from 'components/ui';
import { DOverviewHead } from 'features/overview/data';
import { Stack } from 'components/system';
import { CancelIcon } from 'components/svg';
import { TTableRenderItemObject } from 'components/custom/table/types';

const OverviewPage = () => {
  const [tab, setTab] = useState(0);

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

  return (
    <OverviewMain>
      <Stack
        style={{ width: '100%', justifyContent: 'space-between' }}
        direction="horizontal"
      >
        <Tabs
          value={tab}
          onValue={setTab}
          tabs={['Property Overview', 'Documents']}
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
          <Stack direction="horizontal">
            <OverviewPIContainer>
              <OverviewPILeft>
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
                      <OverviewPILeftValue>
                        Jarunska ulica 23
                      </OverviewPILeftValue>
                    </OverviewPILeftItem>
                    <OverviewPILeftItem>
                      <OverviewPILeftLabel>Property</OverviewPILeftLabel>
                      <OverviewPILeftValue>
                        Residential House
                      </OverviewPILeftValue>
                    </OverviewPILeftItem>
                    <OverviewPILeftItem>
                      <OverviewPILeftLabel>Size</OverviewPILeftLabel>
                      <OverviewPILeftValue>180 sqm</OverviewPILeftValue>
                    </OverviewPILeftItem>
                  </OverviewPILeftText>
                </OverviewPILeftContent>
                <OverviewPiLeftImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLd9slE5LHxyNG1WFmSvuhlyEu2cxbupNO4ZOj7Ipl&s" />
              </OverviewPILeft>
              <OverviewPIRight>
                <OverviewPIRightContent>
                  <OverviewPILeftHeadline>Offers</OverviewPILeftHeadline>
                  <OverviewPIRightItem>
                    <OverviewPIRightLabel>
                      Era Estetica d.o.o.
                    </OverviewPIRightLabel>
                    <OverviewPIRightValue>
                      Offer_project1.pdf
                    </OverviewPIRightValue>
                    <OverviewPIRightDelete>
                      <CancelIcon />
                    </OverviewPIRightDelete>
                  </OverviewPIRightItem>
                  <OverviewPIRightItem>
                    <OverviewPIRightLabel>
                      Era Estetica d.o.o.
                    </OverviewPIRightLabel>
                    <OverviewPIRightValue>
                      Offer_project1.pdf
                    </OverviewPIRightValue>
                    <OverviewPIRightDelete>
                      <CancelIcon />
                    </OverviewPIRightDelete>
                  </OverviewPIRightItem>
                </OverviewPIRightContent>
                <OverviewPIRightButton>Upload</OverviewPIRightButton>
              </OverviewPIRight>
            </OverviewPIContainer>
          </Stack>
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
        <Card style={{ marginTop: '15px' }}>
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
    </OverviewMain>
  );
};

export default OverviewPage;
