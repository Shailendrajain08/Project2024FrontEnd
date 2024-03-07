const capitalizeFirstLetter = (word: string) => {
  if (word) {
    if (word.length === 0) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return '';
};

const projectDuration: any = {
  SHORT_TERM: '1 to 3 months',
  MEDIUM_TERM: '3 to 6 months',
  LONG_TERM: 'More than 6 months'
};

const getTimeUnitsFromDate = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const days = Math.floor(date.getTime() / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const now = new Date();
  const months = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
  const years = now.getFullYear() - date.getFullYear();
  return {
    hours,
    days,
    weeks,
    months,
    years
  };
};

const getPostTime = (dateString: string) => {
  let postTime = '';
  const { hours, days, weeks, months, years } = getTimeUnitsFromDate(dateString);
  if (hours < 24) postTime = `${hours} hours`;
  else if (weeks < 7) postTime = `${weeks} weeks`;
  else if (days < 30) postTime = `${days} days`;
  else if (months < 12) postTime = `${months} months`;
  else postTime = `${years} years`;

  return postTime;
};

const getFixedFormValue = (data: any) => {
  let tempTimeValue = 0;
  let tempBudgetValue = 0;
  Object.keys(data).map((key: string) => {
    if (key.includes('time')) {
      tempTimeValue += Number(data[key]);
    } else if (key.includes('fundsReleased')) {
      tempBudgetValue += Number(data[key]);
    }
  });
  return { totalTime: tempTimeValue, totalBudget: tempBudgetValue };
};

const fixedProposalForm = ['milestone', 'description', 'time', 'fundsReleased'];

const mapFixedPropsalData = (data: any) => {
  const mapData = Object.keys(data).reduce((acc: any, key: string) => {
    if (key.startsWith('milestone')) {
      const index = key.substring(9);
      acc.push({
        milestone: data[key],
        description: data['description' + index],
        time: data['time' + index],
        fundsReleased: data['fundsReleased' + index]
      });
    }
    return acc;
  }, []);
  return mapData;
};

export {
  capitalizeFirstLetter,
  projectDuration,
  getPostTime,
  getFixedFormValue,
  fixedProposalForm,
  mapFixedPropsalData
};
