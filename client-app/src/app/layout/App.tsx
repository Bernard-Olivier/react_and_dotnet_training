import { useEffect, useRef } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./loadingComponents";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();
  const once = useRef(false); // quick fix
  useEffect(() => {
    if (once.current === false){ // quick fix
      activityStore.loadingActivities();
      once.current = true; // quick fix
    }
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent content={"Loading app"} />;

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
