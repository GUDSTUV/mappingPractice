import './App.css'
import Entry from "./Entry"
import Emojipediea from "./Emojipediea"


function App() {
  function createCards(NewEntry) {
    return (
      <Entry
        key={NewEntry.id}
        emoji={NewEntry.emoji}
        title={NewEntry.title}
        description={NewEntry.description}
        
        
      />
  )
}

  return (
<>
      <h1>Emojipedia</h1>
      <div className='cards'>

        {Emojipediea.map(createCards)}

        {/* <Entry
          emoji="🎇"
          title="Star"
          description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui fuga architecto repudiandae modi culpa dolore saepe voluptas, maiores mollitia veritatis ad minus blanditiis distinctio enim eos alias labore quia?"
        />

        <Entry emoji="🎈"
          title="Balloon"
          description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui fuga architecto repudiandae modi culpa dolore saepe voluptas, maiores mollitia veritatis ad minus blanditiis distinctio enim eos alias labore quia?"/>
        <Entry emoji="⚽"
          title="Football"
          description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui fuga architecto repudiandae modi culpa dolore saepe voluptas, maiores mollitia veritatis ad minus blanditiis distinctio enim eos alias labore quia?"/> */}
        
        
      {/* <div className='card1'>
        <image>👨</image>
        <h2>Funny Emoji</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui fuga architecto repudiandae modi culpa dolore saepe voluptas, maiores mollitia veritatis ad minus blanditiis distinctio enim eos alias labore quia?</p>

      </div>

      <div className='card1'>
        <image>👨</image>
        <h2>Funny Emoji</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui fuga architecto repudiandae modi culpa dolore saepe voluptas, maiores mollitia veritatis ad minus blanditiis distinctio enim eos alias labore quia?</p>

      </div>

            <div className='card1'>
        <image>👨</image>
        <h2>Funny Emoji</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui fuga architecto repudiandae modi culpa dolore saepe voluptas, maiores mollitia veritatis ad minus blanditiis distinctio enim eos alias labore quia?</p>

      </div> */}


      </div>
      
    </>
  )

}

export default App
