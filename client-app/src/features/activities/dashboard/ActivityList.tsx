import { observer } from "mobx-react-lite";
import React, { Fragment, useContext } from "react";
import { Item, Label, Segment } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { ActivityListItem } from "./ActivityListItem";

export const ActivityList: React.FC = observer(() => {
  const activityStore = useContext(ActivityStore);
  const { activitesByDate } = activityStore;
  return (
    <Fragment>
      {activitesByDate.map(([group, activities]) => (
        <Fragment key={group}>
          <Label size="large" color="blue">
            {group}
          </Label>
          <Segment clearing>
            <Item.Group divided>
              {activities.map((activity) => (
                <ActivityListItem key={activity.id} activity={activity} />
              ))}
            </Item.Group>
          </Segment>
        </Fragment>
      ))}
    </Fragment>
  );
});
