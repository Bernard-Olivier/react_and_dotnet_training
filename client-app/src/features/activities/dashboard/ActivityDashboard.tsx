import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import {  useEffect } from "react";
import LoadingComponent from "../../../app/layout/loadingComponents";
import ActivityFilters from "./ActivityFilters";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadingInitial, loadingActivities, activitiesRegistery } = activityStore;

  useEffect(() => {
    if (activitiesRegistery.size <= 1) loadingActivities();
  }, [activitiesRegistery.size, activityStore, loadingActivities]);

  if (loadingInitial) return <LoadingComponent content={"Loading activities..."} />;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityFilters />
      </Grid.Column>
    </Grid>
  );
});
