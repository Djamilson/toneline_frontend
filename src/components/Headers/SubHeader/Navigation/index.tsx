import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
  const location = useLocation();

  const [scroll, setScroll] = useState<number>(0);
  const [serealizableList, setSerealizableList] = useState<IMenu[]>(() => {
    return [] as IMenu[];
  });

  const history = useHistory();

  const goBackHome = useCallback(() => {
    history.push('/home');
  }, [history]);

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
      {location?.pathname.localeCompare('/privacypolicy') === 0 ||
      location.pathname.localeCompare('/termsofuse') === 0 ? (
        <MenuLI>
          <NavigationButton type="button" selected onClick={() => goBackHome()}>
            <span>Home</span>
          </NavigationButton>
        </MenuLI>
      ) : (
        serealizableList?.map((menu: IMenu) => {
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
        })
      )}
    </Navigation>
  );
};

export default MeNavigation;
