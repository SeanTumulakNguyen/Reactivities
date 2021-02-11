import React, { useContext, useEffect } from "react";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { Link, RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { ActivityDetailedInfo } from "./ActivityDetailedInfo";
import { ActivityDetailedChat } from "./ActivityDetailedChat";
import { ActivityDetailedHeader } from "./ActivityDetailedHeader";
import { ActivityDetailedSidebar } from "./ActivityDetailedSidebar";

interface DetailParams {
  id: string;
}

export const ActivityDetails: React.FC<
  RouteComponentProps<DetailParams>
> = observer(({ match, history }) => {
  const activityStore = useContext(ActivityStore);
  const { activity, loadActivity, loadingInitial } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity)
    return <LoadingComponent content="loading activity" />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader />
        <ActivityDetailedInfo />
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column widht={6}>
        <ActivityDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
});
