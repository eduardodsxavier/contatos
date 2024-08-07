import ShowContactList from './Contacts'

export default function Home () {
  function Header() {
    return (
      <header>
        <button>Add Contact</button>
      </header>
    )
  }

  return (
    <main>
      <Header/>
      <ul>
        <ShowContactList/>
      </ul>
    </main>
  )
}
