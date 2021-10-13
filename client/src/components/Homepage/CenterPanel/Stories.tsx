import { url } from 'inspector';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { State } from '../../../redux/reducers';
import { IUser } from '../../../ts/auth_interfaces';

const list_stories = [
  {
    name: 'User1',
    img: 'https://scontent.fopo2-2.fna.fbcdn.net/v/t1.6435-9/s280x280/245367919_4618288918222353_8738800054913646715_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=365331&_nc_ohc=kDCTnB1LC8EAX8-A0M5&_nc_ht=scontent.fopo2-2.fna&oh=0b007f2671e90de7e34e0291596ea655&oe=618CA5B1',
  },
  {
    name: 'User2',
    img: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/s280x280/244992662_3076973932541883_2389786904720457849_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=535e6e&_nc_ohc=NXgPhZy8JUkAX8nqyVv&_nc_ht=scontent.fopo2-1.fna&oh=0ba654cef21e876a06fbc8d633c4cf99&oe=616B67D9',
  },
];
export default function Stories() {
  const { user }: { user: IUser } = useSelector(
    (state: State) => state.authReducer
  );

  return (
    <div className="flex">
      <CreateStory user={user} />
      {list_stories.map((storie): any => (
        <StoriesContainer storie={storie} />
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
    filter: brightness(0.7);
  }
`;
