import { ListOfCategories } from "./Components/ListOfCategories"
import { GlobalStyle } from "./GlobalStyles"
import { ListOfPhotoCards } from "./Components/ListOfPhotoCards"
function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}

export default App
