import { CSSProperties } from 'react';

const Avatar = ({
  avatar,
  style,
  className,
}: {
  avatar?: string;
  style?: CSSProperties;
  className?: string;
}) => {
  return (
    <>
      {avatar ? (
        <img
          className={`navbar_avatar ${className}`}
          style={style}
          alt="avatar"
          src={avatar}
        />
      ) : (
        <img
          className={`navbar_avatar shadow ${className}`}
          style={style}
          alt="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
        />
      )}
    </>
  );
};

export default Avatar;
