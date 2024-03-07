import React, { useCallback, useEffect } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { personalDetail } from '../constant';
import { EditI } from '../type';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoderSkillsAndExperience } from '../../../../store/actions/profile/coder.actionCreators';
import { SpinnerLoader } from '../../../Common';
import { ICoderSkills } from '../../../../types/shared.types';
import { isObjectEmpty } from '../../../../helper/utils';
import { RootState } from '../../../../store/reducers';
import { useTechnology } from '../../../../helper/customHooks/useTechnology';

interface SkillCategoriesProps {
  title: string;
  skills: ICoderSkills[];
}
interface SkillCategoryProps {
  skill: ICoderSkills;
}

interface SkillsDetailsProps {
  edit: EditI;
  handleEdit: () => void;
}

const formatSkill = (skillType: string) => {
  return skillType.toLowerCase().charAt(0).toUpperCase() + skillType.slice(1).toLowerCase();
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ skill }) => {
  const technology = useTechnology(skill.technology);

  return (
    <Box
      key={skill.id}
      className="coder--skill-wrapper"
      display="flex"
      flexDirection="column"
      alignItems="flex-start">
      <Typography variant="subtitle2" fontSize="14px" fontWeight={500}>
        {technology && technology.name}
      </Typography>
      <Typography className="Coder-skill--expertise">
        {`${formatSkill(skill.expertise_level)}  (Experience: ${skill.years_of_experience} years)`}
      </Typography>
    </Box>
  );
};

const SkillCategories: React.FC<SkillCategoriesProps> = ({ title, skills }) => {
  if (skills.length === 0) return null;

  return (
    <Box className="skill-tech-list">
      <Typography pb={'16px'} variant="subtitle1">
        {title}
      </Typography>
      {skills.map((skill, index) => (
        <SkillCategory key={index} skill={skill} />
      ))}
    </Box>
  );
};

const CoderSkills: React.FC<SkillsDetailsProps> = ({ edit, handleEdit }) => {
  const dispatch = useDispatch();
  const { skillsExperience: coderskills, loading } = useSelector(
    (state: RootState) => state.profile.coderSkillsAndExperience
  );

  useEffect(() => {
    if (isObjectEmpty(coderskills)) {
      dispatch(fetchCoderSkillsAndExperience());
    }
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box className="skills--main-container" position="relative">
        <Box textAlign="start" pb="24px">
          <Typography variant="subtitle1" fontSize="16px" mb="6px">
            Introduction
          </Typography>
          <Typography variant="body1" className="skill-coder-intro">
            {coderskills.introduction}
          </Typography>
        </Box>
        <Box mb={'24px'} className="separater-line-skill"></Box>

        <SkillCategories
          title="Primary Technology"
          skills={coderskills?.skills?.filter(
            (skill: ICoderSkills) => skill.skill_type === 'PRIMARY'
          )}
        />
        <SkillCategories
          title="Secondary Technology"
          skills={coderskills?.skills?.filter(
            (skill: ICoderSkills) => skill.skill_type === 'SECONDARY'
          )}
        />
        <SkillCategories
          title="Other Technology"
          skills={coderskills?.skills?.filter(
            (skill: ICoderSkills) => skill.skill_type === 'OTHER'
          )}
        />

        <Box display="flex" flexDirection="column" textAlign="start">
          <Typography pb={'24px'} component="div" className="coder-total--experince">
            Total Experience:{' '}
            <Typography fontSize="14px" ml="4px" fontWeight={500}>
              {coderskills.total_years_of_experience} Years
            </Typography>
          </Typography>
          <Box className="separater-line-skill"></Box>
          <Box pt="24px">
            <Typography variant="subtitle1" fontSize="16px" fontWeight={500} mb="6px">
              Brief about yourself
            </Typography>
            <Typography className="coder--brief-exp">
              {coderskills.brief_work_experience}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoderSkills;
