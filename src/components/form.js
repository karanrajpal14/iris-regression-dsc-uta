import React from "react"
import FormInput from "../components/formInput"
import Image from "../components/image"

export default class Form extends React.Component {
  state = {
    sepalLength: 0,
    sepalWidth: 0,
    petalLength: 0,
    petalWidth: 0,
    filename: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.predict()
  }

  predict = () => {
    let allImages = ["setosa.jpg", "virginica.jpg", "versicolor.jpg", ""]

    console.log(this.state.sepalLength)
    console.log(this.state.sepalWidth)
    console.log(this.state.petalLength)
    console.log(this.state.petalWidth)

    let randIndex = Math.floor(Math.random() * allImages.length)

    let selectedFile = allImages[randIndex]

    console.log(selectedFile)

    this.setState({
      filename: selectedFile,
    })
  }

  render() {
    return (
      <form action="" method="post" onSubmit={this.handleSubmit}>
        <div className="columns">
          <div className="column">
            <FormInput
              id="sepalLength"
              name="Sepal Length"
              value={this.state.sepalLength}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="column">
            <FormInput
              id="sepalWidth"
              name="Sepal Width"
              value={this.state.sepalWidth}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="column">
            <FormInput
              id="petalLength"
              name="Petal Length"
              value={this.state.petalLength}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="column">
            <FormInput
              id="petalWidth"
              name="Petal Width"
              value={this.state.petalWidth}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <button className="button is-dark" type="submit">
          Submit
        </button>

        <Image filename={this.state.filename} />
      </form>
    )
  }
}
