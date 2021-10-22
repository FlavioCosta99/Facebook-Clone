import { useRef } from 'react';

import Avatar from '../../../Avatar';
import useOutsideClick from '../../../useOutsideClick';
import { IPosts } from '../../../../ts/auth_interfaces';
const ModalShowLikes = ({
  likes,
  setShowLikes,
}: {
  likes: Partial<IPosts>[];
  setShowLikes: Function;
}) => {
  const ref: any = useRef();
  useOutsideClick(ref, () => setShowLikes());

  return (
    <div className="fixed w-full h-full bg-gray-400 bg-opacity-75 left-0 top-0 flex justify-center items-center">
      <div ref={ref}>
        <div
          className="bg-white"
          style={{ width: '300px' }}
          onClick={(e: any) => e.stopPropagation()}
        >
          <div className="flex items-center justify-end p-2 border-b-2 border-gray-400">
            <div className="bg-gray-400 p-1 flex items-center rounded-xl ">
              <i
                data-visualization="css-img"
                className="close_btn cursor-pointer"
                onClick={() => setShowLikes()}
              />
            </div>
          </div>
          <ul className="pb-3">
            {likes.map((like: any) => (
              <li className="p-3 m-2 flex justify-between">
                <div className="flex items-center">
                  <Avatar avatar={like.avatar} />
                  <p className="ml-2"> {like.name} </p>
                </div>
                <button className="bg-gray-400 flex items-center p-1">
                  <i
                    data-visualcompletion="css-img"
                    className="add_user_icon mr-1"
                  ></i>
                  <p className="text-sm"> Add </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ModalShowLikes;
