import React from 'react'


class NewsCard extends React.Component {

        render () {
            const {news} = this.props;
            return(
                <div className="center-body">
                    {news.map(n => 
                        
                        <div className="card mb-3">
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img src={n.urlToImage} className="card-img" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">{n.title}</h5>
                              <p className="card-text">{n.description}</p>
                              <p className="card-text"><small className="text-muted">{n.name}</small></p>
                              <a href={n.url} className="btn float-right">Continue</a>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                    )}
                </div>
            )
}
}
export default NewsCard;