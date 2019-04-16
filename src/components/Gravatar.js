import React from "react";
import md5 from "md5";

// Más info del Gravatar en: http://gravatar.com
function Gravatar(props) {
  const hash = md5(props.email);
  return (
    <img
      className={props.className}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
