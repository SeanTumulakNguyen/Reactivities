import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { ActivityListItem } from "./ActivityListItem";

export const ActivityList: React.FC = observer(() => {
  const activityStore = useContext(ActivityStore);
  const {
    activitesByDate,
    deleteActivity,
    submitting,
    target,
  } = activityStore;
  return (
    <Segment clearing>
      <Item.Group divided>
        {activitesByDate.map((activity) => (
          <ActivityListItem key={activity.id} activity={activity}/>
        ))}
      </Item.Group>
    </Segment>
  );
});
