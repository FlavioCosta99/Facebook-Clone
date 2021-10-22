import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';
import { IUser } from '../../../ts/auth_interfaces';
import Avatar from '../../Avatar';
import FormField from '../../FormField';

export default function PostsForm() {
  const { user }: { user: IUser } = useSelector(
    (state: State) => state.authReducer
  );
  const handleChange = () => {};
  const [post, setPost] = useState<any>();
  return (
    <div className="w-full bg-white rounded-md shadow-lg">
      <div
        className="flex w-full items-center"
        style={{ padding: '10px', paddingBottom: '0px' }}
      >
        <Avatar
          avatar={user.avatar}
          style={{ height: '50px', width: '50px' }}
        />
        <FormField
          name="postmsg"
          type="text"
          className="w-full"
          style={{ margin: '0' }}
          styleInput={{ border: '0px' }}
          classNameInput="bg-gray-400 "
          required={true}
          placeholder={`What are you thinking about, ${user.name}?`}
          value={post}
          onChange={handleChange}
        />
      </div>
      <div className="divider" />
      <div className="flex justify-around pb-4 form_attachments text-gray-100">
        <div>
          <i data-visualcompletion="css-img" className="live_video"></i>
          Live video
        </div>
        <div>
          <i data-visualcompletion="css-img" className="photo_video"></i>
          Photo/Video
        </div>
        <div>
          <i data-visualcompletion="css-img" className="feeling_activity"></i>
          Feeling/Activity
        </div>
      </div>
    </div>
  );
}
