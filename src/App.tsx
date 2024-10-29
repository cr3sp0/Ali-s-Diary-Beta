import "./App.css";
import PageTop from "./components/PageTop";
import PageContent from "./components/PageContent";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="page">
      <PageTop title="Ali's Diary" />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
