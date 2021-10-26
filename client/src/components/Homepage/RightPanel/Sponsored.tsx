import React from 'react';
const ads = [
  {
    img: 'https://scontent.fopo2-2.fna.fbcdn.net/v/t45.5328-4/c0.0.960.960a/p960x960/239339339_4391914094255244_4930223873092751033_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=c48759&_nc_ohc=TxAkghoCXlwAX9_W9As&_nc_ht=scontent.fopo2-2.fna&oh=ba77d272386eea614421c23650e58eee&oe=617C6627',
    title: 'This is an ad',
    description: 'Description for ad nº1',
  },
  {
    img: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/246506319_23849194224240706_6317549090845152382_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=67cdda&_nc_ohc=ujpmaHLrHE4AX8B-1tQ&_nc_ht=scontent.fopo2-1.fna&oh=c8662612081c54d266bbb831730441d6&oe=617858F8',
    title: 'This is another ad',
    description: 'Description for ad nº2',
  },
];

export default function Sponsored() {
  return (
    <div>
      <h1 className="text-lg text-gray-100 my-4"> Sponsored</h1>
      <ul>
        {ads.map((ad, i) => (
          <li
            key={i}
            className="flex flex-wrap m-3 ml-0 cursor-pointer hover:bg-gray-400 rounded-xl p-2"
          >
            <img
              src={ad.img}
              alt={ad.title}
              height="100px"
              width="150px"
              className="rounded-xl"
            />
            <div className="flex flex-col ml-3 justify-center">
              <h1 className="font-bold text-md"> {ad.title}</h1>
              <p className="text-sm"> {ad.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
