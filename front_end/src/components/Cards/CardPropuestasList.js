import React, { Component } from "react";
import PropuestaDataService from "../../services/PropuestaService";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import swal from 'sweetalert';

export default class CardPropuestasList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrievePropuestas = this.retrievePropuestas.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePropuesta = this.setActivePropuesta.bind(this);
    this.removeAllPropuestas = this.removeAllPropuestas.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

    
    this.state = {
      propuestas: [],
      currentPropuesta: null,
      currentIndex: -1,
      searchTitle: "",

      page: 1,
      count: 0,
      pageSize: 3,
    };

    this.pageSizes = [3, 6, 9];
  }

  mostrarAlerta=(propuesta)=>{
    swal("Esta es la alerta " + propuesta.data);
 }
  componentDidMount() {
    this.retrievePropuestas();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  getRequestParams(searchTitle, page, pageSize) {
    let params = {};

    if (searchTitle) {
      params["titulo"] = searchTitle;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  }

  async retrievePropuestas() {
    const { searchTitle, page, pageSize } = this.state;
    const params = this.getRequestParams(searchTitle, page, pageSize);
    let col = this.state.propuestas; 
    col = await PropuestaDataService.getAll(params)
      .then((response) => {
        console.log(params);
        console.log(response.data);  
         return response.data;
      })
      .catch((e) => {
        console.log(e);
      });

     
      if(col){
        
        this.setState({
          propuestas: col,
          count: col.length,
        });
       }
       //alert('::::' + JSON.stringify(this.state.propuestas))
  }

  refreshList() {
    this.retrievePropuestas();
    this.setState({
      currentPropuesta: null,
      currentIndex: -1,
    });
  }

  setActivePropuesta(propuesta, index) {
    this.setState({
      currentPropuesta: propuesta,
      currentIndex: index,
    });
    this.mostrarAlerta(propuesta) ;
  }

  removeAllPropuestas() {
    PropuestaDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handlePageChange(event, value) {
    this.setState(
      {
        page: value,
      },
      () => {
        this.retrievePropuestas();
      }
    );
  }

  handlePageSizeChange(event) {
    this.setState(
      {
        pageSize: event.target.value,
        page: 1
      },
      () => {
        this.retrievePropuestas();
      }
    );
  }

  render() {
    const {
      propuestas,
      currentPropuesta, 
      searchTitle,
      currentIndex,
      page,
      count,
      pageSize,
    } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={this.retrievePropuestas}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Propuestas List</h4>

          <div className="mt-3">
            {"Items per Page: "}
            <select onChange={this.handlePageSizeChange} value={pageSize}>
              {this.pageSizes.map((size) => (
                <option key={size} value={size}>
                  {size} 
                </option>
              ))}
            </select>

            <Pagination
              className="my-3"
              count={count}
              page={page}
              siblingCount={1}
              boundaryCount={1}
              variant="outlined"
              shape="rounded"
              onChange={this.handlePageChange}
            />
          </div>


          <ul className="list-group">
           
                
              
           <table className="items-center w-full bg-transparent border-collapse">
            <thead>
            <tr>
            <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  "bg-blueGray-800 text-blueGray-300 border-blueGray-700"
                   
                }
              >
               ID
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  "bg-blueGray-800 text-blueGray-300 border-blueGray-700"
                 
                }
              >
                Titulo propuesta
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  "bg-blueGray-800 text-blueGray-300 border-blueGray-700"
                }
              >
                Categoría
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  "bg-blueGray-800 text-blueGray-300 border-blueGray-700"
                }
              >
                Estado
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  "bg-blueGray-800 text-blueGray-300 border-blueGray-700"
                }
              ></th>
            </tr>
            </thead>
                  <tbody>
                    {propuestas &&
                      propuestas.map((propuesta, index) => (
                          <tr>
                            <td className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActivePropuesta(propuesta, index)}
                        key={index}
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">{index +1}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">{propuesta.titulo}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">{propuesta.categoria}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">{propuesta.published ? "Published" : "Pending"}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">  
                            <Link
                                to={"/propuestas/guardar?" + propuesta.id}
                                className="badge badge-warning">
                                Edit
                              </Link>  
                            </td>
                          </tr>
                
              ))
            }
              </tbody>
          
             </table>
          </ul>

      
        </div>
        <div className="col-md-6">
          {currentPropuesta ? (
            <div>
              <h4>Propuesta</h4>
             
              <div>
                <label>
                  <strong>Description:</strong>
                </label>
                {currentPropuesta.descripcion}
              </div>
         
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Propuesta...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
