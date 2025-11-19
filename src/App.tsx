import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import Footer from "./assets/components/footer/Footer"
import Navbar from "./assets/components/navbar/Navbar"
import DeletarTema from "./assets/components/tema/deletartema/DeletarTema"
import FormTema from "./assets/components/tema/formtema/FormTema"
import ListaTemas from "./assets/components/tema/listatemas/ListaTemas"
import ListaPostagens from "./assets/components/postagem/listapostagens/ListaPostagens"
import FormPostagem from "./assets/components/postagem/formpostagem/FormPostagem"
import DeletarPostagem from "./assets/components/postagem/deletarpostagem/DeletarPostagem"



function App() {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/home" element={<Home />} />
							<Route path="/cadastro" element={<Cadastro />} />
							<Route path="/temas" element={<ListaTemas />} />
							<Route path="/cadastrartema" element={<FormTema />} />
							<Route path="/editartema/:id" element={<FormTema />} />
							<Route path="/deletartema/:id" element={<DeletarTema />} />
							<Route path="/postagens" element={<ListaPostagens />} />
							<Route path="/cadastrarpostagem" element={<FormPostagem />} />
							<Route path="/editarpostagem/:id" element={<FormPostagem />} />
							<Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	)
}

export default App
