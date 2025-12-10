import './tela1.css'
import omen from './fotos/Omen.webp'

export default function Tela1() {
  return (
    <div className="container1">
      <img src={omen} className="imagem" />
      <h1>Omen é um Controlador fantasmagórico em Valorant, mestre em manipular sombras e teletransportes para cegar inimigos, criar paranoia e controlar o mapa, sendo ideal para jogadores estratégicos que buscam surpreender e criar espaço para a equipe, com habilidades como Manto Sombrio (smoke), Paranoia (cegueira) e Passos Tenebrosos (teleporte curto). </h1>
    </div>
  );
}