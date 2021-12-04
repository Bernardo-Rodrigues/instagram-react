import Left from "./Main/Left"
import Sidebar from "./Main/Sidebar";

export default function Main(){
    return(
        <div>
            <div class="corpo">
                <Left/>
                <Sidebar/>
            </div>
        </div>
    );
}