import React from 'react'

function childrenWithProps(childern, props){
    return React.Children.map(props.childern,
        child => React.cloneElement(child, {...props}))
}

export {childrenWithProps}