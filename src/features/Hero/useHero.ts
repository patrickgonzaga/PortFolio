import { cvData } from '../../data/cvData';
import type { PersonalInfo } from './Hero.types';

export const useHero = () => {
  const personal: PersonalInfo = {
    name: cvData.personal.name,
    title: cvData.personal.title,
    overview: cvData.personal.overview,
  };

  // Split name for high impact typography (e.g. bold name, highlighted last name)
  const nameParts = personal.name.split(' ');
  const firstName = nameParts[0];
  // Retrieve the actual last name
  const lastName = nameParts[nameParts.length - 1];

  // Role keyword extracted or custom defined
  const roleKeyword = "AI Automation & Backend";

  return {
    personal,
    firstName,
    lastName,
    roleKeyword,
  };
};
