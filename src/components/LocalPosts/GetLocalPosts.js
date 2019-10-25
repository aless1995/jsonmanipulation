import React, { Component } from 'react';
import posts from './posts.js';
// get posts from online api
// it's return a json file
class GetLocalPosts extends Component {
    constructor(props){
        super(props);
        this.state = {            
            posts :posts            
        };
    }
    render() {
        const {posts} = this.state;
        return(
            <div>
                <ol className="item">
                {
                    posts.map(post => (
                        <li key={post.TimeStampRicevimento} align="start">
                            <div>
                            <p className="Company">{post.Company}</p>
                            <p className="TimeStampRicevimento">{post.TimeStampRicevimento}</p>
                            <p className="CodiceFornitore">{post.CodiceFornitore}</p>
                            <p className="Fornitore">{post.Fornitore}</p>
                            <p className="CodiceFornitore">{post.CodiceFornitore}</p>
                            <p className="CodiceArticolo">{post.CodiceArticolo}</p>
                            <p className="Articolo">{post.Articolo}</p>
                            <p className="DescrizioneArticolo">{post.DescrizioneArticolo}</p>
                            <p className="Certificati UL">{post.CertificatiUL}</p>
                            <p className="Certificati Dei Materiali">{post.CertificatiDeiMateriali}</p>
                            <p className="Registrazione Controllo Lotti Fornitura">{post.RegistrazioneControlloLottiFornitura}</p>
                            </div>
                        </li>
                    ))
                }
                </ol>
            </div>
        );
    }
  }
  
  export default GetLocalPosts;