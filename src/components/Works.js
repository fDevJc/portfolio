import React from 'react';
import Work from './Work';

const works = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    title: 'title1',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    title: 'title2',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    title: 'title3',
  },
  {
    id: 4,
    image: 'https://placeimg.com/64/64/4',
    title: 'title4',
  },
];

function Works() {
  return (
    <div className="works">
      {works.map((work) => {
        return <Work key={work.id} image={work.image} title={work.title} />;
      })}
    </div>
  );
}

export default Works;
