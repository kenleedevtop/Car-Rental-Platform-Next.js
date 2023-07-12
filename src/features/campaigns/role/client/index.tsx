import React, { useEffect, useState } from 'react';
import {
  CampaignsPageMain,
  CampaignsPageFilterContainer,
  CampaignsPageFilter,
  CampaignsPageFilterActions,
  CampaignModalLink,
} from 'features/campaigns/styles';
import {
  DCampaignsClientHead,
  DGenerateCampaignsClientFilter,
} from 'features/campaigns/data';
import {
  CardWithChart,
  CardWithText,
  CheckboxTable,
  Menu,
  Tabs,
} from 'components/custom';
import {
  ContactIcon,
  FinishedIcon,
  InfoIcon,
  InpreparationIcon,
  ManageIcon,
  OngoingIcon,
  ReportIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useMenu, useModal, usePagination } from 'hooks';
import {
  AddCampaignModal,
  ExportCampaignsModal,
  CreatedCampaignModal,
  InPreparationActions,
} from 'features/campaigns/role/client/elements';
import { useRouter } from 'next/router';
import {
  CampaignAPI,
  DiseaseAreaAPI,
  EnumsApi,
  LocationAPI,
  ProductApi,
} from 'api';

const CampaignsPage = () => {
  const [acModal, openAcModal, closeAcModal] = useModal(false);
  const [ecModal, openEcModal, closeEcModal] = useModal(false);
  const [ccModal, openCcModal, closeCcModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateCampaignsClientFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const [filterTabs, setFilterTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateCampaignsClientFilter());
  };

  const [menuIp, openIp, setOpenIp] = useMenu(false);
  const [menuF, openF, setOpenF] = useMenu(false);

  const handleMenuIp = () => {
    setOpenIp(!openIp);
  };
  const handleMenuF = () => {
    setOpenF(!openF);
  };

  const [current, setCurrent] = useState(-1);
  const [filterParams, setFilterParams] = useState({});
  const [campaigns, setCampaigns] = useState([]);

  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: 10,
      page: 1,
      onChange: async (params, setPage) => {
        const { result, meta } = await CampaignAPI.getCampaigns({
          limit: params.limit,
          skip: params.skip,
          ...filterParams,
        });
        setCampaigns(result);
        setTotalResults(meta.countFiltered);
      },
    });

  const renderItem = ({
    headItem,
    row,
    table,
    cell,
  }: TTableRenderItemObject) => {
    if (headItem.reference === 'campaignName') {
      return (
        <CampaignModalLink
          onClick={() => {
            setCurrent(row.data.id);
            openCcModal();
          }}
        >
          {row.data.name}
        </CampaignModalLink>
      );
    }

    if (headItem.reference === 'budget') {
      if (row.data.platformProductOrder.budget) {
        return `${row.data.platformProductOrder.budget} CHF`;
      }
    }

    if (headItem.reference === 'diseaseArea') {
      if (row.data.platformProductOrder.platformProductOrderDiseaseAreas) {
        const diseases =
          row.data.platformProductOrder.platformProductOrderDiseaseAreas.map(
            (item: any) => item.diseaseArea.name
          );

        return diseases.join(', ');
      }
    }

    if (headItem.reference === 'location') {
      if (row.data.platformProductOrder.platformProductOrderLocations) {
        const locations =
          row.data.platformProductOrder.platformProductOrderLocations.map(
            (item: any) => {
              if (item.location.country && item.location.country.name) {
                return `${item.location.name} (${item.location.country.name})`;
              }
              return item.location.name;
            }
          );

        return locations.join(', ');
      }
    }

    if (headItem.reference === 'influencers') {
      return row.data.influencersCount;
    }

    if (headItem.reference === 'report') {
      if (row.data.report) {
        return row.data.report.name;
      }
    }

    if (headItem.reference === 'actions') {
      return <InPreparationActions data={row.data.id} reload={reload} />;
    }

    return '';
  };

  const router = useRouter();

  /* Filters */
  const [loading, setLoading] = useState(false);
  const [filtersProducts, setFilterProducts] = useState<any>([]);
  const [filterInfluencerSize, setFilterInfluencerSize] = useState<any>([]);
  const [filterReports, setFilterReport] = useState<any>([]);
  const [filterDiseaseAreas, setFilterDiseaseAreas] = useState<any>([]);
  const [filterStruggles, setFilterStruggles] = useState<any>([]);
  const [filterLocations, setFilterLocations] = useState<any>([]);
  const [filterEthnicitys, setFilterEthnicity] = useState<any>([]);
  const [filterInterests, setFilterInterests] = useState<any>([]);
  const [filterGenders, setFilterGenders] = useState<any>([]);
  const [filterLanguages, setFilterLanguages] = useState<any>([]);

  const getProducts = async (s: string = '') => {
    const { result } = await ProductApi.getProducts(s);

    setFilterProducts(
      result.map((data: any) => ({
        value: data.id,
        label: data.name,
      }))
    );
  };

  const getReportTypes = async () => {
    const result = await EnumsApi.getReportTypes();

    setFilterReport(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getDiseaseAreas = async (s: string = '') => {
    setLoading(true);
    const { result } = await DiseaseAreaAPI.getAll(s);

    setFilterDiseaseAreas(
      result.map((item: any) => ({
        value: item.id,
        label: item.name,
      }))
    );
    setLoading(false);
  };

  const getLocations = async (s: string = '') => {
    setLoading(true);
    const { result } = await LocationAPI.getAll(s);
    setFilterLocations(
      result.map((data: any) => ({
        value: data.id,
        label: data.country ? `${data.name}, ${data.country.name}` : data.name,
      }))
    );
    setLoading(false);
  };

  const getGenders = async () => {
    const result = await EnumsApi.getGenders();

    setFilterGenders(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getEthnicities = async () => {
    const result = await EnumsApi.getEthnicities();

    setFilterEthnicity(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const getStruggles = async () => {
    const result = await EnumsApi.getStruggles();

    setFilterStruggles(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };
  const getInterests = async () => {
    const result = await EnumsApi.getInterests();

    setFilterInterests(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const getInfluencerSizes = async () => {
    const { result } = await EnumsApi.getInfluencerSize();

    setFilterInfluencerSize(
      result.map((x: any) => ({
        value: x.id,
        label: `${x.name}: ${x.from} - ${x.to}`,
      }))
    );
  };

  const getLanguages = async () => {
    const result = await EnumsApi.getLanguages();

    setFilterLanguages(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  useEffect(() => {
    getLanguages();
    getProducts();
    getReportTypes();
    getDiseaseAreas();
    getLocations();
    getGenders();
    getEthnicities();
    getStruggles();
    getInterests();
    getInfluencerSizes();
  }, []);

  const handleNewProductTag = (v: any) => {
    setFilter({ ...filter, product: [...filter.product, v] });
  };

  const debounce = (func: any, wait: any) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return (
    <CampaignsPageMain>
      <CampaignsPageFilterContainer>
        <CardWithChart
          title="In Preparation"
          icon={<InpreparationIcon />}
          percent={0}
          count={0}
          chartData={{
            values: [0, 0, 0],
            labels: ['', '', ''],
          }}
        />
        <CardWithChart
          title="Ongoing"
          icon={<OngoingIcon />}
          percent={0}
          count={0}
          chartData={{
            values: [0, 0, 0],
            labels: ['', '', ''],
          }}
        />
        <CardWithChart
          title="Finished"
          icon={<FinishedIcon />}
          percent={0}
          count={0}
          chartData={{
            values: [0, 0, 0],
            labels: ['', '', ''],
          }}
        />
        <CardWithChart
          title="Influencers"
          icon={<TotalIcon />}
          percent={0}
          count={0}
          chartData={{
            values: [0, 0, 0],
            labels: ['', '', ''],
          }}
        />
      </CampaignsPageFilterContainer>
      <CardWithText
        title="Campaigns"
        description=""
        style={
          window.innerWidth < 600
            ? { padding: '1.25rem', boxShadow: 'unset' }
            : { padding: '1.25rem', boxShadow: '0px 2px 5px #00000010' }
        }
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          // <Button color="default" variant="contained" onClick={openEcModal}>
          //   Export
          // </Button>,
          <Button color="primary" variant="contained" onClick={openAcModal}>
            Create Campaign
          </Button>,
        ]}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <CampaignsPageFilter>
              <Tabs
                tabs={['Campaign', 'Target']}
                value={filterTabs}
                onValue={setFilterTabs}
              />
              {filterTabs === 0 && (
                <CampaignsPageFilterContainer>
                  <Input
                    type="text"
                    label="Search"
                    placeholder="Please Enter"
                    value={filter.company}
                    onValue={(company) => setFilter({ ...filter, company })}
                  />
                  <Input
                    type="multiselect"
                    label="Products"
                    placeholder="Please Select"
                    value={filter.product}
                    onValue={(product) => setFilter({ ...filter, product })}
                    options={filtersProducts}
                    onSearch={debounce(getProducts, 250)}
                    onNewTag={handleNewProductTag}
                    loading={loading}
                  />
                  <Input
                    type="min-max"
                    label="Budget"
                    placeholder="Please Select"
                    value={filter.budget}
                    onValue={(budget) => setFilter({ ...filter, budget })}
                  />
                  <InputGroup
                    label="Start Date"
                    inputRatio="1fr 1fr"
                    elements={[
                      {
                        value: filter.startDateStart,
                        onValue: (startDateStart) =>
                          setFilter({ ...filter, startDateStart }),
                        type: 'date',
                        placeholder: 'From',
                      },
                      {
                        value: filter.startDateEnd,
                        onValue: (startDateEnd) =>
                          setFilter({ ...filter, startDateEnd }),
                        type: 'date',
                        placeholder: 'To',
                      },
                    ]}
                  />
                  <InputGroup
                    label="End Date"
                    inputRatio="1fr 1fr"
                    elements={[
                      {
                        value: filter.endDateStart,
                        onValue: (endDateStart) =>
                          setFilter({ ...filter, endDateStart }),
                        type: 'date',
                        placeholder: 'From',
                      },
                      {
                        value: filter.endDateEnd,
                        onValue: (endDateEnd) =>
                          setFilter({ ...filter, endDateEnd }),
                        type: 'date',
                        placeholder: 'To',
                      },
                    ]}
                  />
                  <Input
                    type="min-max"
                    label="Number of Influencers"
                    value={filter.influencers}
                    onValue={(influencers) =>
                      setFilter({ ...filter, influencers })
                    }
                  />
                  <Input
                    type="multiselect"
                    label="Influencer Sizes"
                    placeholder="Please Select"
                    value={filter.influencerSize}
                    onValue={(influencerSize) =>
                      setFilter({ ...filter, influencerSize })
                    }
                    options={filterInfluencerSize}
                  />
                  <Input
                    type="multiselect"
                    label="Social Media Platforms"
                    placeholder="Please Select"
                    value={filter.socialMediaPlatform}
                    onValue={(socialMediaPlatform) =>
                      setFilter({ ...filter, socialMediaPlatform })
                    }
                    options={[
                      {
                        value: 0,
                        label: 'Instagram',
                      },
                    ]}
                  />
                  <Input
                    type="multiselect"
                    label="Post Types"
                    placeholder="Please Select"
                    value={filter.postType}
                    onValue={(postType) => setFilter({ ...filter, postType })}
                    options={[
                      {
                        value: 0,
                        label: 'Story',
                      },
                      {
                        value: 1,
                        label: 'Post',
                      },
                      {
                        value: 2,
                        label: 'Reel',
                      },
                    ]}
                  />
                  <Input
                    type="multiselect"
                    label="Reports"
                    placeholder="Please Select"
                    value={filter.report}
                    onValue={(report) => setFilter({ ...filter, report })}
                    options={filterReports}
                  />
                </CampaignsPageFilterContainer>
              )}
              {filterTabs === 1 && (
                <CampaignsPageFilterContainer>
                  <Input
                    type="multiselect"
                    label="Disease Areas"
                    placeholder="Please Select"
                    value={filter.diseaseArea}
                    onValue={(diseaseArea) =>
                      setFilter({ ...filter, diseaseArea })
                    }
                    options={filterDiseaseAreas}
                    onSearch={debounce(getDiseaseAreas, 250)}
                    loading={loading}
                  />
                  <Input
                    type="multiselect"
                    label="Struggles"
                    placeholder="Please Select"
                    value={filter.struggles}
                    onValue={(struggles) => setFilter({ ...filter, struggles })}
                    options={filterStruggles}
                  />
                  <Input
                    type="multiselect"
                    label="Locations"
                    placeholder="Please Select"
                    value={filter.location}
                    onValue={(location) => setFilter({ ...filter, location })}
                    options={filterLocations}
                    onSearch={debounce(getLocations, 250)}
                    loading={loading}
                  />
                  <Input
                    type="multiselect"
                    label="Ethnicities"
                    placeholder="Please Select"
                    value={filter.ethnicity}
                    onValue={(ethnicity) => setFilter({ ...filter, ethnicity })}
                    options={filterEthnicitys}
                  />
                  <Input
                    type="multiselect"
                    label="Interests"
                    placeholder="Please Select"
                    value={filter.interests}
                    onValue={(interests) => setFilter({ ...filter, interests })}
                    options={filterInterests}
                  />
                  <Input
                    type="min-max"
                    label="Age"
                    placeholder="Please Select"
                    value={filter.age}
                    onValue={(age) => setFilter({ ...filter, age })}
                  />

                  <Input
                    type="multiselect"
                    label="Genders"
                    placeholder="Please Select"
                    value={filter.gender}
                    onValue={(gender) => setFilter({ ...filter, gender })}
                    options={filterGenders}
                  />
                  <Input
                    type="multiselect"
                    label="Languages"
                    placeholder="Please Select"
                    value={filter.language}
                    onValue={(language) => setFilter({ ...filter, language })}
                    options={filterLanguages}
                  />
                </CampaignsPageFilterContainer>
              )}
              <CampaignsPageFilterActions direction="horizontal">
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
              </CampaignsPageFilterActions>
            </CampaignsPageFilter>
          </Collapse>
          <Tabs
            value={tabs}
            onValue={setTabs}
            tabs={['In Preparation', 'Ongoing', 'Finished', 'Report Received']}
          />
          {tabs === 0 && (
            <>
              <CheckboxTable
                head={DCampaignsClientHead}
                items={campaigns}
                renderItem={renderItem}
              />
              <Pagination
                onChange={(_e, x) => handlePageChange(x)}
                page={page}
                count={pagesCount}
              />
            </>
          )}
          {tabs === 1 && (
            <>
              <CheckboxTable
                head={DCampaignsClientHead}
                items={[]}
                renderItem={() => {}}
              />
              <Pagination count={0} />
            </>
          )}
          {tabs === 2 && (
            <>
              <CheckboxTable
                head={DCampaignsClientHead}
                items={[]}
                renderItem={() => {}}
              />
              <Pagination count={0} />
            </>
          )}
          {tabs === 3 && (
            <>
              <CheckboxTable
                head={DCampaignsClientHead}
                items={[]}
                renderItem={() => {}}
              />
              <Pagination count={0} />
            </>
          )}
        </Stack>
        {/* <Stack direction="horizontal">
          <Button color="primary" variant="contained" onClick={openCcModal}>
            {' '}
            Created Campaign
          </Button>
          <Button color="primary" variant="contained" onClick={handleMenuIp}>
            {' '}
            In Preparation Action
          </Button>
          <Button color="primary" variant="contained" onClick={handleMenuF}>
            {' '}
            Finished Action
          </Button>
        </Stack> */}
        {openIp && (
          <Menu
            items={[
              {
                icon: <InfoIcon />,
                label: 'Info',
                action: () => {},
              },
              {
                icon: <ManageIcon />,
                label: 'Manage',
                action: () => router.push('/campaigns/manage'),
              },
              {
                icon: <ContactIcon />,
                label: 'Contact',
                action: () => {},
              },
              {
                icon: <ScheduleIcon />,
                label: 'Schedule',
                action: () => {},
              },
            ]}
            ref={menuIp}
          />
        )}
        {openF && (
          <Menu
            items={[
              {
                icon: <ReportIcon />,
                label: 'Report',
                action: () => {},
              },
              {
                icon: <InfoIcon />,
                label: 'Info',
                action: () => {},
              },
              {
                icon: <ManageIcon />,
                label: 'Manage',
                action: () => router.push('/campaigns/manage'),
              },
              {
                icon: <ContactIcon />,
                label: 'Contact',
                action: () => {},
              },
              {
                icon: <ScheduleIcon />,
                label: 'Schedule',
                action: () => {},
              },
            ]}
            ref={menuF}
          />
        )}
      </CardWithText>
      {acModal && (
        <AddCampaignModal
          refresh={reload}
          onClose={async () => {
            reload();
            closeAcModal();
          }}
        />
      )}
      {ecModal && <ExportCampaignsModal onClose={closeEcModal} />}
      {ccModal && (
        <CreatedCampaignModal
          id={current.toString()}
          onClose={closeCcModal}
          reload={reload}
        />
      )}
    </CampaignsPageMain>
  );
};

export default CampaignsPage;
