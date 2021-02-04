import React, { useEffect, Fragment, useContext } from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import { LoadingComponent } from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import { observer } from "mobx-react-lite";
import { Route } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import { ActivityForm } from "../../features/activities/form/ActivityForm";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities..." />;

  return (
    <Fragment>
      <NavBar />
      <Icon className="users" />
      <Header.Content>Reactivities</Header.Content>
      <Container style={{ marginTop: "7em" }}>
        <Route exact path="/" component={HomePage} />
        <Route path="/activities" component={ActivityDashboard} />
        <Route path="/createActivity" component={ActivityForm} />
      </Container>
    </Fragment>
  );
};

export default observer(App);
