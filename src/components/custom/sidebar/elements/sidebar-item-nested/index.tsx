import React, { useState } from 'react';
import {
  SidebarItemNestedMain,
  SidebarItemNestedOuter,
  SidebarItemNestedIcon,
  SidebarItemNestedLabel,
  SidebarItemNestedDropDown,
  SidebarItemNestedDropDownSubItem,
  SidebarItemNestedDropDownSubItemLabel,
  SidebarItemNestedExpandIcon,
} from 'components/custom/sidebar/elements/sidebar-item-nested/styles';
import { useRouter } from 'next/router';
import { TSidebarItemNestedProps } from 'components/custom/sidebar/elements/sidebar-item-nested/types';
import { TSidebarSubItem } from 'components/custom/sidebar/types';
import { ArrowDownIcon } from 'components/svg';

const SidebarItemNested = ({
  icon,
  label,
  items,
  ...props
}: TSidebarItemNestedProps) => {
  const router = useRouter();

  const active = items.map((x) => x.location).includes(router.pathname);

  const [expanded, setExpanded] = useState(active);

  const handleDropdown = () => {
    setExpanded(!expanded);
  };

  return (
    <SidebarItemNestedOuter active={active} {...props}>
      <SidebarItemNestedMain onClick={handleDropdown}>
        <SidebarItemNestedIcon>{icon}</SidebarItemNestedIcon>
        <SidebarItemNestedLabel>{label}</SidebarItemNestedLabel>
        <SidebarItemNestedExpandIcon expanded={expanded}>
          <ArrowDownIcon />
        </SidebarItemNestedExpandIcon>
      </SidebarItemNestedMain>
      <SidebarItemNestedDropDown expanded={expanded}>
        {items.map((x: TSidebarSubItem) => (
          <SidebarItemNestedDropDownSubItem href={x.location} key={x.id}>
            <SidebarItemNestedDropDownSubItemLabel
              active={x.location === router.pathname}
            >
              {x.label}
            </SidebarItemNestedDropDownSubItemLabel>
          </SidebarItemNestedDropDownSubItem>
        ))}
      </SidebarItemNestedDropDown>
    </SidebarItemNestedOuter>
  );
};

export default SidebarItemNested;
