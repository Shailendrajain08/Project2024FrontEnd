import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { ICoderData } from '../../type';

interface SkillCategoryProps {
  title: string;
  skills: any;
}
const formatSkill = (skillType: string) => {
  return skillType.toLowerCase().charAt(0).toUpperCase() + skillType.slice(1).toLowerCase();
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  if (skills.length === 0) return null;

  return (
    <Box className="skill-tech-list">
      <Typography variant="subtitle1" className="coder--skill-level">
        {title}
      </Typography>
      {skills.map((skill: any) => (
        <Box
          key={skill.technology.id}
          className="coder--skill-wrapper"
          display="flex"
          flexDirection="column"
          alignItems="flex-start">
          <Typography variant="subtitle2" fontSize="14px" fontWeight={500}>
            {formatSkill(skill.technology.name)}
          </Typography>
          <Typography className="Coder-skill--expertise">
            {`${formatSkill(skill.expertise_level)}  (Experience: ${
              skill.years_of_experience
            } years)`}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

interface SkillsDetailsProps {
  selectedRow: ICoderData;
}

const AdminCoderSkills = ({ selectedRow }: SkillsDetailsProps) => {
  const [data, setData] = useState<ICoderData>();

  useEffect(() => {
    setData(selectedRow);
  }, [selectedRow]);
  if (!data) return null;
  return (
    <Box display="flex" justifyContent="center">
      <Box className="admin-skills--main-container" position="relative">
        <SkillCategory
          title="Primary Technology"
          skills={data.skill?.filter((skill) => skill.skill_type === 'PRIMARY')}
        />
        <SkillCategory
          title="Secondary Technology"
          skills={data.skill.filter((skill) => skill.skill_type === 'SECONDARY')}
        />
        <SkillCategory
          title="Other Technology"
          skills={data.skill.filter((skill) => skill.skill_type === 'OTHER')}
        />
      </Box>
    </Box>
  );
};

export default AdminCoderSkills;
