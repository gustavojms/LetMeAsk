import logoImg from '../assets/images/logo.svg';
import { Button } from "../components/Button";
import '../styles/room.scss';
import { RoomCode } from "../components/RoomCode";
import { useParams } from "react-router-dom";

type RoomParams = {
    id: string;
}

export function Room() {
    const params = useParams<RoomParams>();
    const roomId = params.id!;

    return(
        <div id="page-room">
            <header>
                <div className="content" >
                    <img src={ logoImg } alt="letmeask"/>
                    <RoomCode code={ roomId } />
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala</h1>
                    <span>Perguntas</span>
                </div>

                <form>
                    <textarea placeholder="O que você quer perguntar?"/>

                    <div className="form-footer">
                        <span>Para enviar uma perguntar, <button>faça seu login.</button></span>
                        <Button type="submit">
                            Enviar pergunta
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}