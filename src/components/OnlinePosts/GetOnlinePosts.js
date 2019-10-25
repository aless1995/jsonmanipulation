    import React, { Component } from 'react';
    import './GetOnlinePosts.css'
    // get posts from online api
    // it's return a json file
    class GetOnlinePosts extends Component {
        constructor(props){
            super(props);
            this.state = {
                error : null,
                isLoaded : false,
                posts : []          
            };
        }
        componentDidMount(){
            // 
            // 
            fetch("http://localhost:1337/api/products")
            .then( response => response.json())
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        isLoaded : true,
                        posts : result
                    });
                },
                // Handle error 
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            )
        }
        render() {
            const {error, isLoaded, posts} = this.state;
            if(error){
                return <div>Error in loading</div>
            }else if (!isLoaded) {
                return <div>Loading ...</div>
            }else{
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
      }
      
      export default GetOnlinePosts;





			//   return (
            //       <tr key = {key}>
            //           <td>{item.Company}</td>
			// 		  <td>{item.TimeStampRicevimento}</td>
			// 		  <td>{item.CodiceFornitore}</td>
            //           <td>{item.Fornitore}</td>
            //           <td>{item.CodiceArticolo}</td>
            //           <td>{item.Articolo}</td>
			// 		  <td>{item.DescrizioneArticolo}</td>
			// 		  <td>{item.CertificatiUL}</td>
			// 		  <td>{item.CertificatiDeiMateriali}</td>
			// 		  <td>{item.Registrazione Controllo Lotti Fornitura}</td>
            //       </tr>
            //   )