export const filterProposalData = (filterObj: any, data: any) => {
  const { coderType, expertiseLevel, hourlyFilter, starRating } = filterObj;
  let propsalData = JSON.parse(JSON.stringify(data));
  propsalData = propsalData.filter((val: any) => {
    const isHourly = verifyHourlyRate(hourlyFilter, val.hourlyRate);
    if (
      (val.coderType === coderType || coderType === 'any') &&
      (val.expertiseLevel === expertiseLevel || expertiseLevel === 'any') &&
      isHourly &&
      val.rating >= starRating
    ) {
      return true;
    }
    return false;
  });
  return propsalData;
};

const verifyHourlyRate = (hourlyFilter: string, value: string) => {
  const numbreArray = hourlyFilter.split('-');
  const lowerBound = Number(numbreArray[0]);
  const upperBound = Number(numbreArray[1]);
  if (upperBound) {
    return Number(value) >= lowerBound && Number(value) <= upperBound;
  } else {
    return true;
  }
};

export const searchFilterData = (query: string, data: any) => {
  const filtered = data.filter((item: any) => {
    return (
      item.coderType.toLowerCase().includes(query.toLowerCase()) ||
      item.expertiseLevel.toLowerCase().includes(query.toLowerCase()) ||
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  });
  return filtered;
};

export const sortByHighHourlyRate = (data: any) => {
  const sortData = data.sort((a: any, b: any) => {
    const hourlyRateA = parseFloat(a.hourlyRate);
    const hourlyRateB = parseFloat(b.hourlyRate);
    return hourlyRateB - hourlyRateA;
  });
  return sortData;
};

export const sortByLowHourlyRate = (data: any) => {
  const sortData = data.sort((a: any, b: any) => {
    const hourlyRateA = parseFloat(a.hourlyRate);
    const hourlyRateB = parseFloat(b.hourlyRate);
    return hourlyRateA - hourlyRateB;
  });
  return sortData;
};

export const getTotalMilestoneAmount = (milestones: any) => {
  const totalAmount = milestones.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.amount;
  }, 0);
  return totalAmount;
};

export function calculateTotalAmountEarned(completedJobs: any) {
  let totalAmountEarned = 0;
  for (let i = 0; i < completedJobs.length; i++) {
    totalAmountEarned += completedJobs[i].total_amount_earned || 0;
  }
  return totalAmountEarned;
}

export function sillName(skills: any, skillId: string) {
  const skill = skills.find((skill: any) => skill.id === skillId);
  return skill ? skill.name : '';
}
