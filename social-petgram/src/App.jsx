import { ListOfCategories } from "./Components/ListOfCategories"
import { GlobalStyle } from "./Styles/GlobalStyles"
import { ListOfPhotoCards } from "./Components/ListOfPhotoCards"
import { Logo } from "./Components/Logo/Index"
function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}

export default App
