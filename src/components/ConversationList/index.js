import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import OrganizationListItem from '../OrganizationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Organizations from '../../constants/Oraganizations';
import Users from '../../constants/Users';
import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
    let newConversations = Users.map(user => {
      return {
        photo: user.profile_image,
        name: user.name,
        text: user.status
      };
    });
    setConversations([...conversations, ...newConversations])
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <h3>Organizations</h3>
        <ConversationSearch />
        {
          Organizations.map(organization => 
            <OrganizationListItem key={organization.name} data={organization}/>
          )
        }
        <h3>Users</h3>
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }

      </div>
    );
}