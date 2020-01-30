import * as React from 'react';

interface Props {
    userName: string;
}

const PropsComponent = (props: Props) => {
    return (
        <div className="propsNav">
            <h2>Hello user: {props.userName}</h2>
        </div>
    );
};

export default PropsComponent;
