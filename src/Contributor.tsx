import { ContributorT  } from './types';
import { Card } from 'antd';

const { Meta } = Card;

function Contributor({name, location, picture} : ContributorT) {
    
    return (
        <Card
            style={{ width: 220 }}
            cover={<img alt="example" src={picture.large} />}
        >    
            <Meta 
                title= {name.first}
                description= {`From ${location.city}`}
            />
        </Card>
        
    );
}

export default Contributor