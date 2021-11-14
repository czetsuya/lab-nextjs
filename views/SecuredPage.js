import React from 'react';

const SecuredPage = ({signOut}) => {
  return (
      <React.Fragment>
        <div>Secured</div>
        <button onClick={signOut}>Sign out</button>
      </React.Fragment>

  );
}

export default SecuredPage;