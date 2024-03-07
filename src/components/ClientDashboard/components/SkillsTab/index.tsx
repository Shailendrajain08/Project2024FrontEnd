import React from 'react';
import { Box, Chip } from '@mui/material';
import { QuestionMarkSvg } from '../../../../assets/svg';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { setTechnologyAction } from '../../../../store/actions/technology';
import { useDispatch } from 'react-redux';

const SkillsTab: React.FC<any> = ({ skillsTab = [] }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChipClick = (value: string) => {
    dispatch(setTechnologyAction(value));
    navigate('/filtercoder');
  };
  return (
    <Box display="flex" columnGap={1} alignItems="center" width={1}>
      <Box className="client-dashboard--skills-tab--box">
        <Box textAlign="start">
          {skillsTab.map((skill: any) => (
            <Chip
              className="chip-container"
              key={skill.id}
              label={skill.name}
              onClick={() => handleChipClick(skill.name)}
            />
          ))}
        </Box>
      </Box>
      <Box className="client-dashboard--skills-tab--svg-box">
        <QuestionMarkSvg />
      </Box>
    </Box>
  );
};

export default SkillsTab;
