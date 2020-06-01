import React from 'react'


class NewsCard extends React.Component {

        render () {
            const {news} = this.props;
            return(
                <div className="center-body">
                    {news.map(n => 
                        
                        <div className="card">
                        <h5 className="card-header">{n.title}</h5>
                         <div className="card-body">
                         <h5 className="card-title">{n.author}</h5>
                         <p className="card-text">{n.content}</p>
                         <a href={n.url} class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        
                    )}
                </div>
            )
}
}
export default NewsCard;