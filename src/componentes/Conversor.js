import React, { Component } from "react";
import "./Conversor.css"



export default class Conversor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    }

    this.converter = this.converter.bind(this)
  }

  converter() {
    let de_para = `${this.props.moedaA}-${this.props.moedaB}`
    let url = `https://economia.awesomeapi.com.br/last/${de_para}`

    fetch(url)
    .then(res => {
      return res.json()
    }).then(data => {
      let endereco = `${this.props.moedaA}${this.props.moedaB}`
      let cotacao = data[endereco].high
      let moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2)
      this.setState({moedaB_valor})
    })
  }

  render() {
    return (
      <div className="conversor">
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        <input type="number" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}} id="numbertxt" />
        <input id="buttonclick" type="button" value="Converter" onClick={this.converter}/>
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    )
  }
}
