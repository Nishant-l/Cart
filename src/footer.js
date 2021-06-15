import React from 'react';

const Total = (props) => {
    return(
        <div style={style.foo}>
            Total :{props.total}
        </div>
    )
};

const style={
    foo:{
        fontSize:25,
        padding:10,
        marginLeft:60
    }
}

export default Total;