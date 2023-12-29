import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import {  useEffect } from "react";
import LoadingComponent from "../../../app/layout/loadingComponents";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadingInitial, loadingActivities, activitiesRegistery } = activityStore;

  useEffect(() => {
    if (activitiesRegistery.size <= 1) loadingActivities();
  }, [activitiesRegistery.size, activityStore, loadingActivities]);

  if (loadingInitial) return <LoadingComponent content={"Loading app"} />;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity Filters</h2>
      </Grid.Column>
    </Grid>
  );
});
