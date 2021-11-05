import { memo } from 'react';

import type { CityListProps } from './types';

import { CityItem } from '../index';

function CityList({ cities }: CityListProps): JSX.Element {
  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {cities.map((city) => (
          <CityItem
            city={city}
            key={city.id}
          />
        ))}
      </ul>
    </section>
  );
}

export default memo(CityList);
