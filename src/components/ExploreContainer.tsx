import React, { createRef, useEffect } from 'react';
import './ExploreContainer.css';

import { IonSearchbar } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const searchbarRef = createRef<HTMLIonSearchbarElement>();
  
  useEffect(() => {
    if (searchbarRef.current) {
      if (typeof searchbarRef.current.setFocus !== 'undefined') {
        console.log("GOING TO SET FOCUS");
        searchbarRef.current.setFocus();
      } else {
        console.log("FUNCTION DOESN'T EXIST?");
      }
    }

    setTimeout(() => {
      if (searchbarRef.current) {
        console.log("GOING TO SET FOCUS AFTER TIMEOUT");
        searchbarRef.current.setFocus();
        // console.log(searchbarRef.current);
      }
    }, 4000);

  }, [searchbarRef]);

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <IonSearchbar ref={searchbarRef} />
    </div>
  );
};

export default ExploreContainer;
