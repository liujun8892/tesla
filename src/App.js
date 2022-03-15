import logo from './logo.svg'
import Header from './components/Header'
import Home from './components/Home'
import Section from './components/Section'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpeg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpeg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpeg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpeg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in Americay"
        backgroundImg="solar.jpeg"
        leftBtnText="order-now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpeg"
        leftBtnText="order-now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpeg"
        leftBtnText="Shop Now"
      />
    </div>
  )
}

export default App
