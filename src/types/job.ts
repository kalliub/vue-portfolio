import { ReactElement } from 'react';

export interface Job {
  icon: ReactElement;
  company: string;
  workingPeriod: string;
  description: string;
  technologies: {
    front?: string;
    back?: string;
    cloud?: string;
    auth?: string;
    lecture?: string;
  };
}
