// import React from 'react'

// const AvatarGroup = ({avatars, maxVisible = 3}) => {
//   return (
//     <div className="flex items-center">
//       {avatars.slice(0, maxVisible).map((avatar, index) => (
//         <img
//           key={index}
//           src={avatar}
//           alt={`Avatar ${index}`}
//           className="w-9 h-9 rounded-full border-2 border-white -ml-3 first:ml-0"
//         />
//       ))}
//       {avatars.length > maxVisible && (
//         <div className="w-9 h-9 flex items-center justify-center bg-blue-50 text-sm font-medium rounded-full border-2 border-white -ml-3">
//           +{avatars.length - maxVisible}
//         </div>
//       )}
//     </div>
//   )
// }

// export default AvatarGroup

import React, { useState } from "react";

const Avatar = ({ src, alt, name }) => {
  const [imgError, setImgError] = useState(false);

  // Generate initials from name
  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };


  return (
    <>
      {!imgError && src ? (
        <img
          src={src}
          alt={alt}
          title={name} // Tooltip here
          className="w-9 h-9 rounded-full border-2 border-white -ml-3 first:ml-0 object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          title={name} // Tooltip here
          className="w-9 h-9 flex items-center justify-center bg-blue-500 text-white text-sm font-medium rounded-full border-2 border-white -ml-3 first:ml-0"
        >
          {getInitials(name)}
        </div>
      )}
    </>
  );
};

const AvatarGroup = ({ avatars, maxVisible = 3 }) => {
  return (
    <div className="flex items-center">
      {avatars.slice(0, maxVisible).map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={`Avatar ${index}`}
          name={avatar.name}
        />
      ))}

      {avatars.length > maxVisible && (
        <div className="w-9 h-9 flex items-center justify-center bg-blue-100 text-gray-700 text-sm font-medium rounded-full border-2 border-white -ml-3">
          +{avatars.length - maxVisible}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
