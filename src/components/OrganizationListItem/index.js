import React, {useEffect} from 'react';
import shave from 'shave';
import '../ConversationListItem/ConversationListItem.css';


export default function OrganizationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

    const { logo, name } = props.data;

    return (
      <div className="conversation-list-item">
        <img className="conversation-photo" src={logo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title"><b>{ name }</b></h1>
        </div>
      </div>
    );
}