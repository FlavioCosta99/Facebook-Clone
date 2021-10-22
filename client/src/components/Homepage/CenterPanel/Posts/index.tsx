import { useSelector } from 'react-redux';
import { State } from '../../../../redux/reducers';
import { IPosts, IUser } from '../../../../ts/auth_interfaces';
import PostContainer from './PostContainer';

const list_posts: Array<IPosts> = [
  {
    id: '1',
    user: { id: '1', name: 'User1', avatar: '' },
    description: 'Post example 1',
    date: new Date(),
    likes: [
      { id: '1', name: 'User1', avatar: '' },
      { id: '2', name: 'User2', avatar: '' },
    ],
    comments: [
      {
        user: { id: '1', name: 'User1', avatar: '' },
        text: 'Comment',
        date: new Date(),
      },
      {
        user: { id: '2', name: 'User2', avatar: '' },
        text: 'Comment nº2',
        date: new Date(),
      },
    ],
  },
  {
    id: '2',
    user: { id: '2', name: 'User2', avatar: '' },
    description: 'Post example 2',
    date: new Date(),
    image:
      'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    likes: [
      { id: '1', name: 'User1', avatar: '' },
      { id: '2', name: 'User2', avatar: '' },
    ],
    comments: [
      {
        user: { id: '1', name: 'User1', avatar: '' },
        text: 'Comment',
        date: new Date(),
      },
      {
        user: { id: '2', name: 'User2', avatar: '' },
        text: 'Comment nº2',
        date: new Date(),
      },
    ],
  },
];
export default function Posts() {
  const { user }: { user: IUser } = useSelector(
    (state: State) => state.authReducer
  );
  return (
    <div>
      {list_posts.map((post) => (
        <PostContainer post={post} user={user} />
      ))}
    </div>
  );
}
