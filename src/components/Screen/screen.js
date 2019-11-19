import React, {Component} from 'react'
import './screenstyle.scss'

class Screen extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { screenValue } = this.props
        return(
            <div className='screendesign'>
                <h1> Valor: { screenValue } </h1> 
            </div>
        )
    }
}

export default Screen