
import './App.css'
import ClassBAsedComponent from './component/class-base-component'
import Button from './component/context-api/Button'
import Text from './component/context-api/Text'
import { FetchData } from './component/FetchData'
import Form from './component/form/form'
import CheckFunction from './component/product'
import UseReducer from './component/use-reducer/UseReducer'

function App() {


  return (
    <>
      <UseReducer />
      {/* <Form /> */}

      {/* below two component is for context api */}
      {/* <Text />   
      <Button /> */}

      {/* <CheckFunction name="Anupam" surname="Sharma" /> */}
      {/* <FetchData />      practised toggle */}
      {/* <ClassBAsedComponent /> */}
    </>
  )
}

export default App
