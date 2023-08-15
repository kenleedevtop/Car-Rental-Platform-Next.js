import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { ProjectsPage } from 'features';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Projects = () => {
  const { role, setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Projects');
  }, []);

  return (
    <>
      <Title>Projects</Title>
      {role === 'DEVELOPER' && <ProjectsPage />}
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['help', 'common'])),
    },
  };
}

export default Projects;
