import { Link } from "components"
import { StyledTextModule } from "./TextModule.style"

export const TextModule = () =>{
    return <StyledTextModule>
        <div className="text-module-wrap">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, consectetur!</p>
            <Link to="/doniraj" text="Doniraj" variant="accent" type="button"></Link>
        </div>
    </StyledTextModule>
}