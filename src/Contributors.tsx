import Contributor from "./Contributor";
import './Contributors.css';
import { ContributorT } from "./types";

interface Props {
    contributors: ContributorT[];
}

function Contributors(props: Props){
    return (
        <div className="contributors">
            {props.contributors.map(function(contributor) {
                return (
                    <Contributor
                        key={contributor.cell}
                        cell= {contributor.cell}
                        name={contributor.name}
                        location={contributor.location}
                        picture={contributor.picture}
                    />
                );
            })}
        </div>
    )
}

export default Contributors