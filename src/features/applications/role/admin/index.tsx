import React, { useState } from 'react';
import { CardWithText, NewCheckboxTable, Tabs } from 'components/custom';
import { Collapse, Grid, Stack } from 'components/system';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import {
  DAdminApplicationsHead,
  DApplicationsFilters,
} from 'features/applications/data';
import {
  MarketPageFilter,
  MarketPageFilterActions,
  ProjectsMain,
} from 'features/opportunities/styles';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { SlidersHorizontalIcon, VerticalDotsIcon } from 'components/svg';

const AdminApplicationsPage = () => {
  const [filter, setFilter] = useState<any>(DApplicationsFilters());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DApplicationsFilters());
  };

  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'name') {
      return 'Ivan Jurisic';
    }
    if (headItem.reference === 'location') {
      return 'English';
    }
    if (headItem.reference === 'nationality') {
      return 'British';
    }
    if (headItem.reference === 'age') {
      return '25';
    }
    if (headItem.reference === 'applications') {
      return '12';
    }
    if (headItem.reference === 'invested') {
      return '€25';
    }
    if (headItem.reference === 'actions') {
      return <VerticalDotsIcon />;
    }

    return '';
  };

  return (
    <ProjectsMain>
      <CardWithText
        title="Applications"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <Stack>
              <Tabs
                tabs={['Info', 'Work Experience', 'Education', 'House']}
                value={tabs}
                onValue={setTabs}
              />
              <MarketPageFilter>
                <Grid columns={4}>
                  <Input
                    type="text"
                    label="Search"
                    placeholder="Please Enter"
                    value={filter.search}
                    onValue={(search) => setFilter({ ...filter, search })}
                  />
                  <Input
                    type="select"
                    label="Application Type"
                    placeholder="Please Select"
                    value={filter.applicationType}
                    onValue={(applicationType) =>
                      setFilter({ ...filter, applicationType })
                    }
                  />
                  <Input
                    type="select"
                    label="Nationality"
                    placeholder="Please Select"
                    value={filter.nationality}
                    onValue={(nationality) =>
                      setFilter({ ...filter, nationality })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Age"
                    value={filter.age}
                    onValue={(age) => setFilter({ ...filter, age })}
                  />
                  <Input
                    type="select"
                    label="Language"
                    placeholder="Please Select"
                    value={filter.language}
                    onValue={(language) => setFilter({ ...filter, language })}
                  />
                  <Input
                    type="select"
                    label="Location"
                    placeholder="Please Select"
                    value={filter.location}
                    onValue={(location) => setFilter({ ...filter, location })}
                  />
                  <Input
                    type="min-max"
                    label="Invested"
                    value={filter.invested}
                    onValue={(invested) => setFilter({ ...filter, invested })}
                  />
                  <Input
                    type="select"
                    label="Social Media"
                    placeholder="Please Select"
                    value={filter.socialMedia}
                    onValue={(socialMedia) =>
                      setFilter({ ...filter, socialMedia })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Applications"
                    value={filter.applications}
                    onValue={(applications) =>
                      setFilter({ ...filter, applications })
                    }
                  />
                  <Input
                    type="select"
                    label="Status"
                    placeholder="Please Select"
                    value={filter.status}
                    onValue={(status) => setFilter({ ...filter, status })}
                  />
                  <InputGroup
                    label="Date Range"
                    inputRatio="1fr 1fr"
                    elements={[
                      {
                        value: filter.dateFrom,
                        onValue: (dateFrom) =>
                          setFilter({ ...filter, dateFrom }),
                        type: 'date',
                        placeholder: 'From',
                      },
                      {
                        value: filter.dateTo,
                        onValue: (dateTo) => setFilter({ ...filter, dateTo }),
                        type: 'date',
                        placeholder: 'To',
                      },
                    ]}
                  />
                </Grid>
                <MarketPageFilterActions direction="horizontal">
                  <Button color="primary" variant="contained">
                    Filter
                  </Button>
                  <Button
                    color="default"
                    variant="contained"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </MarketPageFilterActions>
              </MarketPageFilter>
            </Stack>
          </Collapse>
          <NewCheckboxTable
            head={DAdminApplicationsHead}
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
        </Stack>
      </CardWithText>
    </ProjectsMain>
  );
};

export default AdminApplicationsPage;
