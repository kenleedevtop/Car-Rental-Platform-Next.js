import React, { useState } from 'react';
import {
  SmlPageMain,
  SmlPageFilter,
  SmlPageFilterActions,
} from 'features/sml-reports/styles';
import { CardWithText, Tabs } from 'components/custom';
import { SlidersHorizontalIcon } from 'components/svg';
import { Button, Input } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateSmlFilter } from 'features/sml-reports/data';
import { TTableRenderItemObject } from 'components/custom/table/types';

const SMLReportPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateSmlFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateSmlFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const [mainTabs, setMainTabs] = useState(0);

  return (
    <SmlPageMain>
      <Tabs
        value={mainTabs}
        onValue={setMainTabs}
        tabs={[
          'Brand Affinity',
          'Symptoms',
          'Hashtags',
          'Demographics',
          'MIP',
          'Suggestion',
        ]}
      />
      {mainTabs === 0 && (
        <CardWithText
          title="Brand Affinity"
          description="More than 30.7k posts"
          actions={[
            <Button
              color={filterOpen ? 'secondary' : 'default'}
              variant="contained"
              onClick={toggleFilter}
              startIcon={<SlidersHorizontalIcon width="18" height="18" />}
            >
              Filters
            </Button>,
            <Button color="default" variant="contained" onClick={() => {}}>
              Export
            </Button>,
            <Button color="primary" variant="contained" onClick={() => {}}>
              Create SML
            </Button>,
          ]}
        >
          <Stack>
            <Collapse in={filterOpen}>
              <SmlPageFilter>
                <Tabs
                  value={tabs}
                  onValue={setTabs}
                  tabs={[
                    'Reports',
                    'Competitive Analysis',
                    'Demographics',
                    'Insights',
                  ]}
                />
                {tabs === 0 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Disease Area"
                      placeholder="Please Select"
                      value={filter.diseaseArea}
                      onValue={(diseaseArea) =>
                        setFilter({ ...filter, diseaseArea })
                      }
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
                      label="Platform"
                      placeholder="Please Select"
                      value={filter.platform}
                      onValue={(platform) => setFilter({ ...filter, platform })}
                    />
                  </Grid>
                )}
                {tabs === 1 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Company"
                      placeholder="Please Select"
                      value={filter.company}
                      onValue={(company) => setFilter({ ...filter, company })}
                    />
                    <Input
                      type="select"
                      label="Product"
                      placeholder="Please Select"
                      value={filter.product}
                      onValue={(product) => setFilter({ ...filter, product })}
                    />
                  </Grid>
                )}
                {tabs === 2 && (
                  <Grid columns={4}>
                    <Input
                      type="min-max"
                      label="Age"
                      placeholder="Please Select"
                      value={filter.age}
                      onValue={(age) => setFilter({ ...filter, age })}
                    />
                    <Input
                      type="select"
                      label="Gender"
                      placeholder="Please Select"
                      value={filter.gender}
                      onValue={(gender) => setFilter({ ...filter, gender })}
                    />
                    <Input
                      type="select"
                      label="Ethnicity"
                      placeholder="Please Select"
                      value={filter.ethnicity}
                      onValue={(ethnicity) =>
                        setFilter({ ...filter, ethnicity })
                      }
                    />
                    <Input
                      type="select"
                      label="Location"
                      placeholder="Please Select"
                      value={filter.location}
                      onValue={(location) => setFilter({ ...filter, location })}
                    />
                    <Input
                      type="select"
                      label="Stakeholder"
                      placeholder="Please Select"
                      value={filter.stakeholder}
                      onValue={(stakeholder) =>
                        setFilter({ ...filter, stakeholder })
                      }
                    />
                  </Grid>
                )}
                {tabs === 3 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="hashtag"
                      placeholder="Please Select"
                      value={filter.hashtag}
                      onValue={(hashtag) => setFilter({ ...filter, hashtag })}
                    />
                    <Input
                      type="select"
                      label="Keyword"
                      placeholder="Please Select"
                      value={filter.keyword}
                      onValue={(keyword) => setFilter({ ...filter, keyword })}
                    />
                    <Input
                      type="select"
                      label="Sentiment"
                      placeholder="Please Select"
                      value={filter.sentiment}
                      onValue={(sentiment) =>
                        setFilter({ ...filter, sentiment })
                      }
                    />
                    <Input
                      type="select"
                      label="Symptom"
                      placeholder="Please Select"
                      value={filter.symptom}
                      onValue={(symptom) => setFilter({ ...filter, symptom })}
                    />
                    <Input
                      type="select"
                      label="Mention"
                      placeholder="Please Select"
                      value={filter.mention}
                      onValue={(mention) => setFilter({ ...filter, mention })}
                    />
                    <Input
                      type="min-max"
                      label="Volume"
                      placeholder="Please Select"
                      value={filter.volume}
                      onValue={(volume) => setFilter({ ...filter, volume })}
                    />
                  </Grid>
                )}
                <SmlPageFilterActions direction="horizontal">
                  <Button color="primary" variant="contained">
                    Filter
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </SmlPageFilterActions>
              </SmlPageFilter>
            </Collapse>
          </Stack>
        </CardWithText>
      )}
      {mainTabs === 1 && (
        <CardWithText
          title="Symptoms"
          description="More than 30.7k posts"
          actions={[
            <Button
              color={filterOpen ? 'secondary' : 'default'}
              variant="contained"
              onClick={toggleFilter}
              startIcon={<SlidersHorizontalIcon width="18" height="18" />}
            >
              Filters
            </Button>,
            <Button color="default" variant="contained" onClick={() => {}}>
              Export
            </Button>,
            <Button color="primary" variant="contained" onClick={() => {}}>
              Create SML
            </Button>,
          ]}
        >
          <Stack>
            <Collapse in={filterOpen}>
              <SmlPageFilter>
                <Tabs
                  value={tabs}
                  onValue={setTabs}
                  tabs={[
                    'Reports',
                    'Competitive Analysis',
                    'Demographics',
                    'Insights',
                  ]}
                />
                {tabs === 0 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Disease Area"
                      placeholder="Please Select"
                      value={filter.diseaseArea}
                      onValue={(diseaseArea) =>
                        setFilter({ ...filter, diseaseArea })
                      }
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
                      label="Platform"
                      placeholder="Please Select"
                      value={filter.platform}
                      onValue={(platform) => setFilter({ ...filter, platform })}
                    />
                  </Grid>
                )}
                {tabs === 1 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Company"
                      placeholder="Please Select"
                      value={filter.company}
                      onValue={(company) => setFilter({ ...filter, company })}
                    />
                    <Input
                      type="select"
                      label="Product"
                      placeholder="Please Select"
                      value={filter.product}
                      onValue={(product) => setFilter({ ...filter, product })}
                    />
                  </Grid>
                )}
                {tabs === 2 && (
                  <Grid columns={4}>
                    <Input
                      type="min-max"
                      label="Age"
                      placeholder="Please Select"
                      value={filter.age}
                      onValue={(age) => setFilter({ ...filter, age })}
                    />
                    <Input
                      type="select"
                      label="Gender"
                      placeholder="Please Select"
                      value={filter.gender}
                      onValue={(gender) => setFilter({ ...filter, gender })}
                    />
                    <Input
                      type="select"
                      label="Ethnicity"
                      placeholder="Please Select"
                      value={filter.ethnicity}
                      onValue={(ethnicity) =>
                        setFilter({ ...filter, ethnicity })
                      }
                    />
                    <Input
                      type="select"
                      label="Location"
                      placeholder="Please Select"
                      value={filter.location}
                      onValue={(location) => setFilter({ ...filter, location })}
                    />
                    <Input
                      type="select"
                      label="Stakeholder"
                      placeholder="Please Select"
                      value={filter.stakeholder}
                      onValue={(stakeholder) =>
                        setFilter({ ...filter, stakeholder })
                      }
                    />
                  </Grid>
                )}
                {tabs === 3 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="hashtag"
                      placeholder="Please Select"
                      value={filter.hashtag}
                      onValue={(hashtag) => setFilter({ ...filter, hashtag })}
                    />
                    <Input
                      type="select"
                      label="Keyword"
                      placeholder="Please Select"
                      value={filter.keyword}
                      onValue={(keyword) => setFilter({ ...filter, keyword })}
                    />
                    <Input
                      type="select"
                      label="Sentiment"
                      placeholder="Please Select"
                      value={filter.sentiment}
                      onValue={(sentiment) =>
                        setFilter({ ...filter, sentiment })
                      }
                    />
                    <Input
                      type="select"
                      label="Symptom"
                      placeholder="Please Select"
                      value={filter.symptom}
                      onValue={(symptom) => setFilter({ ...filter, symptom })}
                    />
                    <Input
                      type="select"
                      label="Mention"
                      placeholder="Please Select"
                      value={filter.mention}
                      onValue={(mention) => setFilter({ ...filter, mention })}
                    />
                    <Input
                      type="min-max"
                      label="Volume"
                      placeholder="Please Select"
                      value={filter.volume}
                      onValue={(volume) => setFilter({ ...filter, volume })}
                    />
                  </Grid>
                )}
                <SmlPageFilterActions direction="horizontal">
                  <Button color="primary" variant="contained">
                    Filter
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </SmlPageFilterActions>
              </SmlPageFilter>
            </Collapse>
          </Stack>
        </CardWithText>
      )}
      {mainTabs === 2 && (
        <CardWithText
          title="Hashtags"
          description="More than 30.7k posts"
          actions={[
            <Button
              color={filterOpen ? 'secondary' : 'default'}
              variant="contained"
              onClick={toggleFilter}
              startIcon={<SlidersHorizontalIcon width="18" height="18" />}
            >
              Filters
            </Button>,
            <Button color="default" variant="contained" onClick={() => {}}>
              Export
            </Button>,
            <Button color="primary" variant="contained" onClick={() => {}}>
              Create SML
            </Button>,
          ]}
        >
          <Stack>
            <Collapse in={filterOpen}>
              <SmlPageFilter>
                <Tabs
                  value={tabs}
                  onValue={setTabs}
                  tabs={[
                    'Reports',
                    'Competitive Analysis',
                    'Demographics',
                    'Insights',
                  ]}
                />
                {tabs === 0 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Disease Area"
                      placeholder="Please Select"
                      value={filter.diseaseArea}
                      onValue={(diseaseArea) =>
                        setFilter({ ...filter, diseaseArea })
                      }
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
                      label="Platform"
                      placeholder="Please Select"
                      value={filter.platform}
                      onValue={(platform) => setFilter({ ...filter, platform })}
                    />
                  </Grid>
                )}
                {tabs === 1 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Company"
                      placeholder="Please Select"
                      value={filter.company}
                      onValue={(company) => setFilter({ ...filter, company })}
                    />
                    <Input
                      type="select"
                      label="Product"
                      placeholder="Please Select"
                      value={filter.product}
                      onValue={(product) => setFilter({ ...filter, product })}
                    />
                  </Grid>
                )}
                {tabs === 2 && (
                  <Grid columns={4}>
                    <Input
                      type="min-max"
                      label="Age"
                      placeholder="Please Select"
                      value={filter.age}
                      onValue={(age) => setFilter({ ...filter, age })}
                    />
                    <Input
                      type="select"
                      label="Gender"
                      placeholder="Please Select"
                      value={filter.gender}
                      onValue={(gender) => setFilter({ ...filter, gender })}
                    />
                    <Input
                      type="select"
                      label="Ethnicity"
                      placeholder="Please Select"
                      value={filter.ethnicity}
                      onValue={(ethnicity) =>
                        setFilter({ ...filter, ethnicity })
                      }
                    />
                    <Input
                      type="select"
                      label="Location"
                      placeholder="Please Select"
                      value={filter.location}
                      onValue={(location) => setFilter({ ...filter, location })}
                    />
                    <Input
                      type="select"
                      label="Stakeholder"
                      placeholder="Please Select"
                      value={filter.stakeholder}
                      onValue={(stakeholder) =>
                        setFilter({ ...filter, stakeholder })
                      }
                    />
                  </Grid>
                )}
                {tabs === 3 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="hashtag"
                      placeholder="Please Select"
                      value={filter.hashtag}
                      onValue={(hashtag) => setFilter({ ...filter, hashtag })}
                    />
                    <Input
                      type="select"
                      label="Keyword"
                      placeholder="Please Select"
                      value={filter.keyword}
                      onValue={(keyword) => setFilter({ ...filter, keyword })}
                    />
                    <Input
                      type="select"
                      label="Sentiment"
                      placeholder="Please Select"
                      value={filter.sentiment}
                      onValue={(sentiment) =>
                        setFilter({ ...filter, sentiment })
                      }
                    />
                    <Input
                      type="select"
                      label="Symptom"
                      placeholder="Please Select"
                      value={filter.symptom}
                      onValue={(symptom) => setFilter({ ...filter, symptom })}
                    />
                    <Input
                      type="select"
                      label="Mention"
                      placeholder="Please Select"
                      value={filter.mention}
                      onValue={(mention) => setFilter({ ...filter, mention })}
                    />
                    <Input
                      type="min-max"
                      label="Volume"
                      placeholder="Please Select"
                      value={filter.volume}
                      onValue={(volume) => setFilter({ ...filter, volume })}
                    />
                  </Grid>
                )}
                <SmlPageFilterActions direction="horizontal">
                  <Button color="primary" variant="contained">
                    Filter
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </SmlPageFilterActions>
              </SmlPageFilter>
            </Collapse>
          </Stack>
        </CardWithText>
      )}
      {mainTabs === 3 && (
        <CardWithText
          title="Demographics"
          description="More than 30.7k posts"
          actions={[
            <Button
              color={filterOpen ? 'secondary' : 'default'}
              variant="contained"
              onClick={toggleFilter}
              startIcon={<SlidersHorizontalIcon width="18" height="18" />}
            >
              Filters
            </Button>,
            <Button color="default" variant="contained" onClick={() => {}}>
              Export
            </Button>,
            <Button color="primary" variant="contained" onClick={() => {}}>
              Create SML
            </Button>,
          ]}
        >
          <Stack>
            <Collapse in={filterOpen}>
              <SmlPageFilter>
                <Tabs
                  value={tabs}
                  onValue={setTabs}
                  tabs={[
                    'Reports',
                    'Competitive Analysis',
                    'Demographics',
                    'Insights',
                  ]}
                />
                {tabs === 0 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Disease Area"
                      placeholder="Please Select"
                      value={filter.diseaseArea}
                      onValue={(diseaseArea) =>
                        setFilter({ ...filter, diseaseArea })
                      }
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
                      label="Platform"
                      placeholder="Please Select"
                      value={filter.platform}
                      onValue={(platform) => setFilter({ ...filter, platform })}
                    />
                  </Grid>
                )}
                {tabs === 1 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Company"
                      placeholder="Please Select"
                      value={filter.company}
                      onValue={(company) => setFilter({ ...filter, company })}
                    />
                    <Input
                      type="select"
                      label="Product"
                      placeholder="Please Select"
                      value={filter.product}
                      onValue={(product) => setFilter({ ...filter, product })}
                    />
                  </Grid>
                )}
                {tabs === 2 && (
                  <Grid columns={4}>
                    <Input
                      type="min-max"
                      label="Age"
                      placeholder="Please Select"
                      value={filter.age}
                      onValue={(age) => setFilter({ ...filter, age })}
                    />
                    <Input
                      type="select"
                      label="Gender"
                      placeholder="Please Select"
                      value={filter.gender}
                      onValue={(gender) => setFilter({ ...filter, gender })}
                    />
                    <Input
                      type="select"
                      label="Ethnicity"
                      placeholder="Please Select"
                      value={filter.ethnicity}
                      onValue={(ethnicity) =>
                        setFilter({ ...filter, ethnicity })
                      }
                    />
                    <Input
                      type="select"
                      label="Location"
                      placeholder="Please Select"
                      value={filter.location}
                      onValue={(location) => setFilter({ ...filter, location })}
                    />
                    <Input
                      type="select"
                      label="Stakeholder"
                      placeholder="Please Select"
                      value={filter.stakeholder}
                      onValue={(stakeholder) =>
                        setFilter({ ...filter, stakeholder })
                      }
                    />
                  </Grid>
                )}
                {tabs === 3 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="hashtag"
                      placeholder="Please Select"
                      value={filter.hashtag}
                      onValue={(hashtag) => setFilter({ ...filter, hashtag })}
                    />
                    <Input
                      type="select"
                      label="Keyword"
                      placeholder="Please Select"
                      value={filter.keyword}
                      onValue={(keyword) => setFilter({ ...filter, keyword })}
                    />
                    <Input
                      type="select"
                      label="Sentiment"
                      placeholder="Please Select"
                      value={filter.sentiment}
                      onValue={(sentiment) =>
                        setFilter({ ...filter, sentiment })
                      }
                    />
                    <Input
                      type="select"
                      label="Symptom"
                      placeholder="Please Select"
                      value={filter.symptom}
                      onValue={(symptom) => setFilter({ ...filter, symptom })}
                    />
                    <Input
                      type="select"
                      label="Mention"
                      placeholder="Please Select"
                      value={filter.mention}
                      onValue={(mention) => setFilter({ ...filter, mention })}
                    />
                    <Input
                      type="min-max"
                      label="Volume"
                      placeholder="Please Select"
                      value={filter.volume}
                      onValue={(volume) => setFilter({ ...filter, volume })}
                    />
                  </Grid>
                )}
                <SmlPageFilterActions direction="horizontal">
                  <Button color="primary" variant="contained">
                    Filter
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </SmlPageFilterActions>
              </SmlPageFilter>
            </Collapse>
          </Stack>
        </CardWithText>
      )}
      {mainTabs === 4 && (
        <CardWithText
          title="MIP"
          description="More than 30.7k posts"
          actions={[
            <Button
              color={filterOpen ? 'secondary' : 'default'}
              variant="contained"
              onClick={toggleFilter}
              startIcon={<SlidersHorizontalIcon width="18" height="18" />}
            >
              Filters
            </Button>,
            <Button color="default" variant="contained" onClick={() => {}}>
              Export
            </Button>,
            <Button color="primary" variant="contained" onClick={() => {}}>
              Create SML
            </Button>,
          ]}
        >
          <Stack>
            <Collapse in={filterOpen}>
              <SmlPageFilter>
                <Tabs
                  value={tabs}
                  onValue={setTabs}
                  tabs={[
                    'Reports',
                    'Competitive Analysis',
                    'Demographics',
                    'Insights',
                  ]}
                />
                {tabs === 0 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Disease Area"
                      placeholder="Please Select"
                      value={filter.diseaseArea}
                      onValue={(diseaseArea) =>
                        setFilter({ ...filter, diseaseArea })
                      }
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
                      label="Platform"
                      placeholder="Please Select"
                      value={filter.platform}
                      onValue={(platform) => setFilter({ ...filter, platform })}
                    />
                  </Grid>
                )}
                {tabs === 1 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Company"
                      placeholder="Please Select"
                      value={filter.company}
                      onValue={(company) => setFilter({ ...filter, company })}
                    />
                    <Input
                      type="select"
                      label="Product"
                      placeholder="Please Select"
                      value={filter.product}
                      onValue={(product) => setFilter({ ...filter, product })}
                    />
                  </Grid>
                )}
                {tabs === 2 && (
                  <Grid columns={4}>
                    <Input
                      type="min-max"
                      label="Age"
                      placeholder="Please Select"
                      value={filter.age}
                      onValue={(age) => setFilter({ ...filter, age })}
                    />
                    <Input
                      type="select"
                      label="Gender"
                      placeholder="Please Select"
                      value={filter.gender}
                      onValue={(gender) => setFilter({ ...filter, gender })}
                    />
                    <Input
                      type="select"
                      label="Ethnicity"
                      placeholder="Please Select"
                      value={filter.ethnicity}
                      onValue={(ethnicity) =>
                        setFilter({ ...filter, ethnicity })
                      }
                    />
                    <Input
                      type="select"
                      label="Location"
                      placeholder="Please Select"
                      value={filter.location}
                      onValue={(location) => setFilter({ ...filter, location })}
                    />
                    <Input
                      type="select"
                      label="Stakeholder"
                      placeholder="Please Select"
                      value={filter.stakeholder}
                      onValue={(stakeholder) =>
                        setFilter({ ...filter, stakeholder })
                      }
                    />
                  </Grid>
                )}
                {tabs === 3 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="hashtag"
                      placeholder="Please Select"
                      value={filter.hashtag}
                      onValue={(hashtag) => setFilter({ ...filter, hashtag })}
                    />
                    <Input
                      type="select"
                      label="Keyword"
                      placeholder="Please Select"
                      value={filter.keyword}
                      onValue={(keyword) => setFilter({ ...filter, keyword })}
                    />
                    <Input
                      type="select"
                      label="Sentiment"
                      placeholder="Please Select"
                      value={filter.sentiment}
                      onValue={(sentiment) =>
                        setFilter({ ...filter, sentiment })
                      }
                    />
                    <Input
                      type="select"
                      label="Symptom"
                      placeholder="Please Select"
                      value={filter.symptom}
                      onValue={(symptom) => setFilter({ ...filter, symptom })}
                    />
                    <Input
                      type="select"
                      label="Mention"
                      placeholder="Please Select"
                      value={filter.mention}
                      onValue={(mention) => setFilter({ ...filter, mention })}
                    />
                    <Input
                      type="min-max"
                      label="Volume"
                      placeholder="Please Select"
                      value={filter.volume}
                      onValue={(volume) => setFilter({ ...filter, volume })}
                    />
                  </Grid>
                )}
                <SmlPageFilterActions direction="horizontal">
                  <Button color="primary" variant="contained">
                    Filter
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </SmlPageFilterActions>
              </SmlPageFilter>
            </Collapse>
          </Stack>
        </CardWithText>
      )}
      {mainTabs === 5 && (
        <CardWithText
          title="Suggestion"
          description="More than 30.7k posts"
          actions={[
            <Button
              color={filterOpen ? 'secondary' : 'default'}
              variant="contained"
              onClick={toggleFilter}
              startIcon={<SlidersHorizontalIcon width="18" height="18" />}
            >
              Filters
            </Button>,
            <Button color="default" variant="contained" onClick={() => {}}>
              Export
            </Button>,
            <Button color="primary" variant="contained" onClick={() => {}}>
              Create SML
            </Button>,
          ]}
        >
          <Stack>
            <Collapse in={filterOpen}>
              <SmlPageFilter>
                <Tabs
                  value={tabs}
                  onValue={setTabs}
                  tabs={[
                    'Reports',
                    'Competitive Analysis',
                    'Demographics',
                    'Insights',
                  ]}
                />
                {tabs === 0 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Disease Area"
                      placeholder="Please Select"
                      value={filter.diseaseArea}
                      onValue={(diseaseArea) =>
                        setFilter({ ...filter, diseaseArea })
                      }
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
                      label="Platform"
                      placeholder="Please Select"
                      value={filter.platform}
                      onValue={(platform) => setFilter({ ...filter, platform })}
                    />
                  </Grid>
                )}
                {tabs === 1 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Company"
                      placeholder="Please Select"
                      value={filter.company}
                      onValue={(company) => setFilter({ ...filter, company })}
                    />
                    <Input
                      type="select"
                      label="Product"
                      placeholder="Please Select"
                      value={filter.product}
                      onValue={(product) => setFilter({ ...filter, product })}
                    />
                  </Grid>
                )}
                {tabs === 2 && (
                  <Grid columns={4}>
                    <Input
                      type="min-max"
                      label="Age"
                      placeholder="Please Select"
                      value={filter.age}
                      onValue={(age) => setFilter({ ...filter, age })}
                    />
                    <Input
                      type="select"
                      label="Gender"
                      placeholder="Please Select"
                      value={filter.gender}
                      onValue={(gender) => setFilter({ ...filter, gender })}
                    />
                    <Input
                      type="select"
                      label="Ethnicity"
                      placeholder="Please Select"
                      value={filter.ethnicity}
                      onValue={(ethnicity) =>
                        setFilter({ ...filter, ethnicity })
                      }
                    />
                    <Input
                      type="select"
                      label="Location"
                      placeholder="Please Select"
                      value={filter.location}
                      onValue={(location) => setFilter({ ...filter, location })}
                    />
                    <Input
                      type="select"
                      label="Stakeholder"
                      placeholder="Please Select"
                      value={filter.stakeholder}
                      onValue={(stakeholder) =>
                        setFilter({ ...filter, stakeholder })
                      }
                    />
                  </Grid>
                )}
                {tabs === 3 && (
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="hashtag"
                      placeholder="Please Select"
                      value={filter.hashtag}
                      onValue={(hashtag) => setFilter({ ...filter, hashtag })}
                    />
                    <Input
                      type="select"
                      label="Keyword"
                      placeholder="Please Select"
                      value={filter.keyword}
                      onValue={(keyword) => setFilter({ ...filter, keyword })}
                    />
                    <Input
                      type="select"
                      label="Sentiment"
                      placeholder="Please Select"
                      value={filter.sentiment}
                      onValue={(sentiment) =>
                        setFilter({ ...filter, sentiment })
                      }
                    />
                    <Input
                      type="select"
                      label="Symptom"
                      placeholder="Please Select"
                      value={filter.symptom}
                      onValue={(symptom) => setFilter({ ...filter, symptom })}
                    />
                    <Input
                      type="select"
                      label="Mention"
                      placeholder="Please Select"
                      value={filter.mention}
                      onValue={(mention) => setFilter({ ...filter, mention })}
                    />
                    <Input
                      type="min-max"
                      label="Volume"
                      placeholder="Please Select"
                      value={filter.volume}
                      onValue={(volume) => setFilter({ ...filter, volume })}
                    />
                  </Grid>
                )}
                <SmlPageFilterActions direction="horizontal">
                  <Button color="primary" variant="contained">
                    Filter
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={clearFilters}
                  >
                    Clear filter
                  </Button>
                </SmlPageFilterActions>
              </SmlPageFilter>
            </Collapse>
          </Stack>
        </CardWithText>
      )}
    </SmlPageMain>
  );
};

export default SMLReportPage;
