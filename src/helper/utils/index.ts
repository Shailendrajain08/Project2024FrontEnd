import { array } from 'yup';

// enum for table
enum Status {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Open = 'OPEN',
  Expired = 'EXPIRED'
}

enum BudgetType {
  HOURLY = 'HOURLY',
  FIXED = 'FIXED'
}

interface BudgetParams {
  budget_type: BudgetType;
  minimum_hourly_rate: number | null;
  maximum_hourly_rate: number;
  maximum_budget: number;
}

const getPostTime = (value: string): any => {
  let time = '';
  const targetTime: any = new Date(value);
  const currentTime: any = new Date();
  const timeDifference = currentTime - targetTime;
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  if (hoursDifference <= 24) {
    time = `${Math.round(hoursDifference)} ${hoursDifference > 1 ? 'hours' : 'hour'}`;
  } else if (hoursDifference <= 24 * 7) {
    const daysDifference = Math.floor(hoursDifference / 24);
    time = `${Math.round(daysDifference)} ${daysDifference > 1 ? 'days' : 'day'}`;
  } else if (hoursDifference <= 24 * 7 * 4) {
    const weeksDifference = Math.floor(hoursDifference / (24 * 7));
    time = `${Math.round(weeksDifference)} ${weeksDifference > 1 ? 'weeks' : 'week'}`;
  } else {
    const monthsDifference = Math.floor(hoursDifference / (24 * 7 * 4));
    time = `${Math.round(monthsDifference)} ${monthsDifference > 1 ? 'months' : 'month'}`;
  }

  return time;
};

const urlToFile = async (imageUrls: any) => {
  try {
    // Download the image from the remote URL
    if (imageUrls.length > 0 && typeof imageUrls === 'string') {
      const response = await fetch(imageUrls);
      const blob = await response.blob();
      // Convert the blob to a File object
      const filename = imageUrls.substring(imageUrls.lastIndexOf('/') + 1);
      const file = new File([blob], filename, { type: blob.type });
      return file;
    } else {
      if (Array.isArray(imageUrls)) {
        const promises = imageUrls.map(async (url) => {
          const response = await fetch(url);
          const blob = await response.blob();
          // Convert the blob to a File object
          const filename = url.split('/').pop();
          return new File([blob], filename, { type: blob.type });
        });
        const newFiles: any = [];
        const files = await Promise.all(promises);
        newFiles.push(files);
        return newFiles;
      }
    }
  } catch (error) {
    console.error('Error converting URL to File:', error);
    throw error;
  }
};

const formatDate = (date: any) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const successStatusCodeList: number[] = [200, 201];

function generatePageOptions(count: number, totalPages: number) {
  const options = [];
  const itemsPerPage = Math.ceil(count / totalPages);
  for (let i = 1; i <= totalPages; i++) {
    const label = i * itemsPerPage;
    options.push({ label, value: label });
  }
  return options;
}

function getExpertiseLabel(beginner: boolean, intermediate: boolean, expert: boolean) {
  const labels = [];

  if (beginner) {
    labels.push('Beginner');
  }

  if (intermediate) {
    labels.push('Intermediate');
  }

  if (expert) {
    labels.push('Expert');
  }

  return labels.join(', ') || '';
}

const projectDuration: any = {
  SHORT_TERM: '1 to 3 months',
  MEDIUM_TERM: '3 to 6 months',
  LONG_TERM: 'More than 6 months'
};

// status function for table
const getStatusLabelAndStyle = (status: any) => {
  let label = '';
  let styleChip = '';
  switch (status) {
    case Status.Active:
      label = 'Active';
      styleChip = 'chip--active';
      break;
    case Status.Completed:
      label = 'Completed';
      styleChip = 'chip--completed';
      break;
    case Status.Open:
      label = 'Open';
      styleChip = 'chip--open';
      break;
    case Status.Expired:
      label = 'Expired';
      styleChip = 'chip--expired';
      break;
    default:
      styleChip = '';
  }
  return { label, styleChip };
};

// handle budget Utils functions for table
const formatBudget = (row: BudgetParams): string => {
  const { budget_type, minimum_hourly_rate, maximum_hourly_rate, maximum_budget } = row;

  if (budget_type === BudgetType.HOURLY) {
    if (minimum_hourly_rate !== null) {
      return `${minimum_hourly_rate} - ${maximum_hourly_rate}/hr`;
    } else {
      return `${maximum_hourly_rate}/hr`;
    }
  } else {
    return `${maximum_budget}`;
  }
};
function isObjectEmpty(obj: any) {
  return obj && obj.constructor === Object && Object.keys(obj).length === 0;
}

const handleDebounce = (callback: any, debounceTime: number) => {
  let typingTimeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      callback(...args);
    }, debounceTime);
  };
};

export {
  getPostTime,
  urlToFile,
  successStatusCodeList,
  generatePageOptions,
  getExpertiseLabel,
  projectDuration,
  formatDate,
  getStatusLabelAndStyle,
  BudgetType,
  formatBudget,
  isObjectEmpty,
  handleDebounce
};
