export const getAge = (dateString: string) => {
  if (dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age > 0 ? age : 0;
  }
  return '';
};

export const convertAgeToDate = (minAge?: number, maxAge?: number) => {
  const currentDate = new Date();
  const maxDOB =
    minAge &&
    new Date(currentDate.setFullYear(currentDate.getFullYear() - minAge));
  const minDOB =
    maxAge &&
    new Date(currentDate.setFullYear(currentDate.getFullYear() - maxAge));

  return { minDOB, maxDOB };
};
