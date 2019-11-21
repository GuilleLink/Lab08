import React, {Component} from 'react'
import './botonstyle.scss'

class Boton extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { id, valor } = this.props
        return(
            <div className="numberbutton">
                <button type='button' onClick={() => this.returnSimbol({ id, valor })}> { valor } </button>
            </div>
        )
    }

    returnSimbol(value){
        this.props.click(value)
    }
}

export default Boton