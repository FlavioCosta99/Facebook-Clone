import { url } from 'inspector';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { State } from '../../../redux/reducers';
import { IUser } from '../../../ts/auth_interfaces';

const list_stories = [
  {
    name: 'User1',
    img: 'https://randomwordgenerator.com/img/picture-generator/53e3d54a4c57a814f1dc8460962e33791c3ad6e04e507440762e7ad39344c4_640.jpg',
  },
  {
    name: 'User2',
    img: 'https://randomwordgenerator.com/img/picture-generator/57e6d2474b52aa14f1dc8460962e33791c3ad6e04e5077497c2a7cd49545c0_640.jpg',
  },
];
export default function Stories() {
  const { user }: { user: IUser } = useSelector(
    (state: State) => state.authReducer
  );

  return (
    <div className="flex">
      <CreateStory user={user} />
      {list_stories.map((storie, i): any => (
        <StoriesContainer key={i} storie={storie} />
      ))}
    </div>
  );
}

const CreateStory = ({ user }: { user: IUser }) => {
  const bg_image: String = user.avatar
    ? user.avatar
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png';

  return (
    <div className=" shadow-lg rounded-3xl create_story_container">
      <div
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        className="rounded-t-3xl create_story_bg"
      />
      <div className="create_story_btn cursor-pointer">
        <i data-visualcompletion="css-img"></i>
      </div>
      <div
        style={{ width: '100%', height: '30%' }}
        className="bg-white rounded-b-3xl flex justify-center items-end font-bold pb-2 cursor-pointer"
      >
        <h1 className="text-center">
          Create <br /> Story
        </h1>
      </div>
    </div>
  );
};

const StoriesContainer = ({ storie }: any) => {
  return (
    <Container img={storie.img}>
      <p className="absolute text-white text-xl p-3 w-full bottom-0">
        {' '}
        {storie.name}{' '}
      </p>
    </Container>
  );
};

const Container = styled.div<{ img: string }>`
  position: relative;
  height: 280px;
  width: 158px;
  transform: scale(0.8);
  margin-right: 5px;
  ::before {
    border-radius: 20px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props: any) => props.img});
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
  }
`;
