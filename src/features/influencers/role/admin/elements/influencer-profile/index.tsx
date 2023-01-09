import React, { useState } from 'react';
import { Modal, ProgressDisplay, Tabs, Title } from 'components/custom';
import { TInfluencerProfileModalProps } from 'features/influencers/role/admin/elements/influencer-profile/types';
import {
  InfluencerProfileModalMain,
  InfluencerProfileChartContainer,
} from 'features/influencers/role/admin/elements/influencer-profile/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';

const InfluencerProfile = ({
  onClose,
  ...props
}: TInfluencerProfileModalProps) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    platform: '',
    username: '',
    diseaseArea: '',
    location: '',
    averageLikes: '',
    averageComments: '',
    engagement: '',
    followersScore: '',

    project: null,
    dateRange: null,

    projectsP: null,
    submission: [],

    comments: [],
    labels: [],
    meetings: [],
    reminders: [],
    tasks: [],
    verifiedSince: null,
  });

  const [tab, setTab] = useState(0);

  // const handleFile = async () => {};

  return (
    <Modal
      size="medium"
      title="First Name Last Name"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Create
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <Tabs
          tabs={['Info', 'Audience', 'Performance', 'Projects', 'Management']}
          value={tab}
          onValue={setTab}
        />
        {tab === 0 && (
          <InfluencerProfileModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Name"
                placeholder="Please Enter"
                value={state.name}
                onValue={(name) => setState({ ...state, name })}
              />
              <Input
                type="text"
                label="Email"
                placeholder="Please Enter"
                value={state.email}
                onValue={(email) => setState({ ...state, email })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Platform"
                placeholder="Please Enter"
                value={state.platform}
                onValue={(platform) => setState({ ...state, platform })}
              />
              <Input
                type="text"
                label="Username"
                placeholder="Please Enter"
                value={state.username}
                onValue={(username) => setState({ ...state, username })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Disease Area"
                placeholder="Please Enter"
                value={state.diseaseArea}
                onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
              />
              <Input
                type="text"
                label="Location"
                placeholder="Please Enter"
                value={state.location}
                onValue={(location) => setState({ ...state, location })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Average Likes"
                placeholder="Please Enter"
                value={state.averageLikes}
                onValue={(averageLikes) => setState({ ...state, averageLikes })}
              />
              <Input
                type="text"
                label="Average Comments"
                placeholder="Please Enter"
                value={state.averageComments}
                onValue={(averageComments) =>
                  setState({ ...state, averageComments })
                }
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="Engagement"
                placeholder="Please Enter"
                value={state.engagement}
                onValue={(engagement) => setState({ ...state, engagement })}
              />
              <Input
                type="text"
                label="Followers Score"
                placeholder="Please Enter"
                value={state.followersScore}
                onValue={(followersScore) =>
                  setState({ ...state, followersScore })
                }
              />
            </Stack>
          </InfluencerProfileModalMain>
        )}

        {tab === 1 && <InfluencerProfileModalMain columns={1} />}
        {tab === 2 && (
          <InfluencerProfileModalMain columns={1}>
            <Stack
              style={{
                height: '500px',
                overflowY: 'scroll',
                paddingRight: '20px',
              }}
            >
              <Stack direction="horizontal">
                <Input
                  type="select"
                  label="Project"
                  placeholder="Please Select"
                  value={state.project}
                  onValue={(project) => setState({ ...state, project })}
                />
                <Input
                  type="date"
                  label="Date Range"
                  placeholder="Please Select"
                  value={state.dateRange}
                  onValue={(dateRange) => setState({ ...state, dateRange })}
                />
              </Stack>
              <Stack>
                <Stack direction="horizontal">
                  <Stack>
                    <Title title="Total Project" style={{ color: 'unset' }} />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                  <Stack>
                    <Title
                      title="Projects in Last 30 Days"
                      style={{ color: 'unset' }}
                    />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                </Stack>
                <Stack direction="horizontal">
                  <Stack>
                    <Title title="Total Earnings" style={{ color: 'unset' }} />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                  <Stack>
                    <Title
                      title="Earnings in Last 30 Days"
                      style={{ color: 'unset' }}
                    />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                </Stack>
                <Stack direction="horizontal">
                  <Stack>
                    <Title
                      title="Desired Amount per Instagram Post"
                      style={{ color: 'unset' }}
                    />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                  <Stack>
                    <Title title="Cost per Target" style={{ color: 'unset' }} />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                </Stack>
                <Stack direction="horizontal">
                  <Stack>
                    <Title title="Reach" style={{ color: 'unset' }} />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                  <Stack>
                    <Title title="Cost per Click" style={{ color: 'unset' }} />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                </Stack>
                <Stack direction="horizontal">
                  <Stack>
                    <Title title="Engagement" style={{ color: 'unset' }} />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                  <Stack>
                    <Title title="Likes" style={{ color: 'unset' }} />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                </Stack>
                <Stack direction="horizontal">
                  <Stack>
                    <Title title="Comments" style={{ color: 'unset' }} />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                  <Stack>
                    <Title title="Website Clicks" style={{ color: 'unset' }} />
                    <InfluencerProfileChartContainer>
                      <ProgressDisplay
                        label="Patient community"
                        percent={100}
                      />
                      <ProgressDisplay label="Patient community" percent={70} />
                    </InfluencerProfileChartContainer>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </InfluencerProfileModalMain>
        )}
        {tab === 3 && (
          <InfluencerProfileModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                type="select"
                label="Project"
                placeholder="Please Select"
                value={state.projectsP}
                onValue={(projectsP) => setState({ ...state, projectsP })}
              />
              <Input
                type="multiselect"
                label="Submission"
                placeholder="Please Select"
                value={state.submission}
                onValue={(submission) => setState({ ...state, submission })}
              />
            </Stack>
          </InfluencerProfileModalMain>
        )}

        {tab === 4 && (
          <InfluencerProfileModalMain columns={1}>
            <Stack direction="horizontal" style={{}}>
              <Input
                type="multiselect"
                label="Comments"
                placeholder="Please Enter"
                value={state.comments}
                onValue={(comments) => setState({ ...state, comments })}
              />
              <Input
                type="multiselect"
                label="Labels"
                placeholder="Please Enter"
                value={state.labels}
                onValue={(labels) => setState({ ...state, labels })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="multiselect"
                label="Meetings"
                placeholder="Please Enter"
                value={state.meetings}
                onValue={(meetings) => setState({ ...state, meetings })}
              />
              <Input
                type="multiselect"
                label="Reminders"
                placeholder="Please Enter"
                value={state.reminders}
                onValue={(reminders) => setState({ ...state, reminders })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                type="multiselect"
                label="Tasks"
                placeholder="Please Enter"
                value={state.tasks}
                onValue={(tasks) => setState({ ...state, tasks })}
              />
              <Input
                type="date"
                label="Verified Since"
                placeholder="Please Enter"
                value={state.verifiedSince}
                onValue={(verifiedSince) =>
                  setState({ ...state, verifiedSince })
                }
              />
            </Stack>
          </InfluencerProfileModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default InfluencerProfile;
