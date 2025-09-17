import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  const postData = {
    title: "Indo a Romenia",
    author: "Murilo Wolff",
    date: "07 de Setembro de 2025",
    content: [
      "Olá hoje irei estar documentando minha viagem a Romênia junto da minha família! Irei estar documentando tudo por aqui!",
      "Nós estaremos saindo de Cascavel à São Paulo para conseguirmos ir até o mediterrâneo para viajarmos até o leste europeu"
    ],
    image: "/castelo.png",
    imageAlt: "Castelo do drácula",
    imageCaption: "Castelo do drácula"
  }

  const relatedPosts = [
    "Viagem ao Egito!",
    "Viagem a Alemanha!"
  ]

  const copyright = "Murilo Wolff; 2025 - todos os direitos reservados."

  return (
    <div className="app">
      <Header />
      <Navigation />
      <main>
        <Sidebar relatedPosts={relatedPosts} />
        <Article 
          title={postData.title}
          author={postData.author}
          date={postData.date}
          content={postData.content}
          image={postData.image}
          imageAlt={postData.imageAlt}
          imageCaption={postData.imageCaption}
        />
      </main>
      <Footer copyright={copyright} />
    </div>
  )
}

export default App
