import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <img src={props?.repo?.owner?.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props?.repo?.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <button className="btn btn-success" >
                        <Link className="text-white navbar-brand" key={props.repo.id} to={`/repos/${props.repo.owner.login}/${props.repo.name}`} > More Details</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card