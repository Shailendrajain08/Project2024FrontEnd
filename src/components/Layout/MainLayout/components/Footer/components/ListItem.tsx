import React from 'react';
import { Link, List, Typography } from '@mui/material';

interface IListItem {
  listName: string;
  path: string;
  listSubText?: string;
}

const ListItem: React.FC<IListItem> = ({ listName, path, listSubText }) => {
  return (
    <List component="li" className="p_0">
      <Link
        className="ff_Inter fs_xs leading_130 opacity_6 hover_footer_links py_4"
        fontWeight="normal"
        display="inline-block"
        color="#FFFFFF"
        href={path}>
        {listName}
        {listSubText && (
          <Typography component="span" className="opacity_6 hover_footer_links ff_Inter fs_xs">
            {listSubText}
          </Typography>
        )}
      </Link>
    </List>
  );
};

export default ListItem;
