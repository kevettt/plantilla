import React from 'react'
import exercisesImg from '../images/exercise.png'
import './styles/Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exercisesImg} alt="" className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Technique Guides</h1>
                            <p>Leran amazing workout an calithecniques</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card