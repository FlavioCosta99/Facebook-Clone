import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../../redux/actions/post-actions';
import { State } from '../../../redux/reducers';
import { IUser } from '../../../ts/auth_interfaces';
import Avatar from '../../Avatar';
import FormField from '../../FormField';

export default function PostsForm() {
  const { user }: { user: IUser } = useSelector(
    (state: State) => state.authReducer
  );

  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [imageName, setImageName] = useState<string>('');

  const convertToBase64 = (file: any) => {
    if (file) {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        setImageName(file.name);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    }
  };
  const handleFileUpload = async (e: any) => {
    //const base64: any = await convertToBase64(file);
    setImageName(e.target.files[0]?.name);
    setImage(e.target.files[0]);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('description', text);
    dispatch(createPost(formData));
    setImageName('');
    setImage('');
    setText('');
  };
  return (
    <div className="w-full bg-white rounded-md shadow-lg">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div
          className="flex w-full items-center"
          style={{ padding: '10px', paddingBottom: '0px' }}
        >
          <Avatar
            avatar={user.avatar}
            style={{ height: '50px', width: '50px' }}
          />
          <FormField
            name="text"
            type="text"
            className="w-full"
            style={{ margin: '0' }}
            styleInput={{ border: '0px' }}
            classNameInput="bg-gray-400 "
            required={true}
            placeholder={`What are you thinking about, ${user.name}?`}
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />
        </div>
        <div className="divider" />
        <div className="flex justify-around pb-4 form_attachments text-gray-100">
          <div>
            <i data-visualcompletion="css-img" className="live_video"></i>
            Live video
          </div>
          <div className="relative cursor-pointer">
            <input
              type="file"
              name="myFile"
              accept=".jpeg, .png, .jpg"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileUpload}
            />
            <i data-visualcompletion="css-img" className="photo_video"></i>
            {imageName ? (
              <p
                style={{
                  whiteSpace: 'pre',
                  maxWidth: '150px',
                  overflow: 'hidden',
                }}
              >
                {' '}
                {imageName}{' '}
              </p>
            ) : (
              <p> Photo/Video</p>
            )}
          </div>
          <div>
            <i data-visualcompletion="css-img" className="feeling_activity"></i>
            Feeling/Activity
          </div>
        </div>
      </form>
    </div>
  );
}
