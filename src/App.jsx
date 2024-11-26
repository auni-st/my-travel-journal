import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const dataElements = data.map((d) => {
    return(
      <Card 
        key = {d.id}
        item = {d}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {dataElements}
      </section>
      {/* <Card /> */}

    </div>
  )
}

export default App
