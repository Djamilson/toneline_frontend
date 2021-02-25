import React, { useCallback, useEffect, useState } from 'react';

import { Navigation, MenuLI, NavigationButton } from './styles';

interface IMenu {
  label: string;
  selected: boolean;
  scroll: string;
}
interface IProps {
  menus: IMenu[];
}

const MeNavigation: React.FC<IProps> = ({ menus }) => {
  const [scroll, setScroll] = useState<number>(0);
  const [serealizableList, setSerealizableList] = useState<IMenu[]>(() => {
    return [] as IMenu[];
  });

  const load = useCallback(
    (value) => {
      setSerealizableList(
        menus?.map((menu: IMenu) => {
          if (menu.label === value) {
            return { ...menu, selected: true };
          }
          return menu;
        }),
      );
    },
    [menus, setSerealizableList],
  );

  useEffect(() => {
    load('Home');
  }, [load]);

  useEffect(() => {
    window.scrollTo({
      top: Number(scroll),
      behavior: 'smooth',
    });
  }, [scroll]);

  return (
    <Navigation>
      {serealizableList?.map((menu: IMenu) => {
        return (
          <MenuLI key={menu.label}>
            <NavigationButton
              type="button"
              selected={menu.selected}
              onClick={() => setScroll(Number(menu.scroll))}
            >
              <span>{menu.label}</span>
            </NavigationButton>
          </MenuLI>
        );
      })}
    </Navigation>
  );
};

export default MeNavigation;
