import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Contact from "./pages/contact";
import Posts from "./pages/posts";
import Counter from "./pages/counter";

// hooks
// FUNCTIONAL COMPONENT
function App() {
  return (
    <div>
      <Routes>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/posts" element={<Posts></Posts>}></Route>
        <Route path="/counter" element={<Counter></Counter>}></Route>
        <Route path="/" element={<Index></Index>}></Route>
      </Routes>
    </div>
  );
}

export default App;
