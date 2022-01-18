import { InstUISettingsProvider, canvas, AppNav, Heading, View } from "@instructure/ui";
import Container from "./Container";
import TestForm from "./TestForm";

const App = () => {
  return (
    <InstUISettingsProvider theme={canvas}>
      <Container>
        <AppNav
          screenReaderLabel="App navigation"
          renderBeforeItems="Awesome LTI"
          visibleItemsCount={3}
        >
          <AppNav.Item renderLabel="Feature 1" />
          <AppNav.Item renderLabel="Feature 2" />
        </AppNav>
        <View margin="medium">
          <Heading>Instructure UI + Final Form</Heading>
        </View>
        <TestForm />
      </Container>
    </InstUISettingsProvider>
  );
};

export default App;
