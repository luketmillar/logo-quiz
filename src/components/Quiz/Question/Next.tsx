import React from 'react'
import Button from '../../Button'


const Next = ({ onClick }: { onClick: React.MouseEventHandler }) => {
    return <Button onClick={onClick}>Next</Button>
}

export default Next