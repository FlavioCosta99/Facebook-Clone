import React from 'react';
const ads = [
  {
    img: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t45.1600-4/p476x249/245962482_23848831210690721_4525671604610413927_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=xb7S30-k_aQAX9oHjxB&_nc_ht=scontent.fopo2-1.fna&oh=75a1b019e1c1cf1176fa724d0a492735&oe=61771E85',
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
