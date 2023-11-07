import { Route, Routes } from "react-router-dom"
import TopicPage from "./pages/Topic/Index"
import SignInPage from "./pages/SignIn/Index"
import SignUpPage from "./pages/SignUp/Index"
import { useAuth } from "./hook/useAuth"

function App() {

  const { user } = useAuth();
  
  return (
    <div id="App">

      { user ? (
        <Routes>
          <Route path="/" element={ <TopicPage /> } />
          <Route path="/:username" element={ <TopicPage /> } />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={ <SignInPage /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
        </Routes>
      )}
    </div>
  )
}

export default App