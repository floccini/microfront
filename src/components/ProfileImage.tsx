import { useEffect, useState } from 'react';

const ProfileImage = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    fetch('https://api.github.com/users/floccini')
      .then((response) => response.json())
      .then((data) => setImageUrl(data.avatar_url))
      .catch((error) =>
        console.error('Error fetching GitHub profile image:', error)
      );
  }, []);

  return (
    <>
      <a href="https://github.com/floccini" target="_blank">
        <img
          src={imageUrl}
          alt="GitHub Profile"
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            border: '2px solid #22c55e',
            padding: '2px',
          }}
        />
      </a>
    </>
  );
};

export default ProfileImage;
