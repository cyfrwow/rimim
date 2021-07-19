import React from "react";
import ToolbarImage from "../toolbar-custom/ToolbarImage";
import { BsImage as ImageIcon } from 'react-icons/bs';

export const ToolbarImageElement = () => {
  return <ToolbarImage icon={<ImageIcon />} tooltip={{
    content: 'Add image',
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: true,
    offset: [0, 17],
    placement: 'bottom',
  }} />;
};
