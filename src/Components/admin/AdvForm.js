import React, { Component } from "react";
import { AdvFormStyled } from "./AdvFormStyled";
import { createNewAdv } from "../../services/Api";

const categories = ["phones", "laptops"];
const initialState = { name: "", image: "", description: "", price: 0, isSale: false, category: categories[0] };

class AdvForm extends Component {
  state = { ...initialState };

  onHandleChange = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };
  onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await createNewAdv(this.state);
    // this.props.addNewAdv({ ...this.state, id: response.data.name });
    this.setState({ ...initialState });
  };

  render() {
    const { name, image, description, price, isSale, category } = this.state;
    return (
      <AdvFormStyled onSubmit={this.onHandleSubmit} className="formAdv">
        <label>
          Наименование:
          <input type="text" name="name" value={name} onChange={this.onHandleChange} />
        </label>
        <label>
          Изображение:
          <input type="text" name="image" value={image} onChange={this.onHandleChange} />
        </label>
        <label>
          Описание:
          <input type="text" name="description" value={description} onChange={this.onHandleChange} />
        </label>
        <label>
          Цена:
          <input type="text" name="price" value={price} onChange={this.onHandleChange} />
        </label>
        <label>
          Распродажа:
          <input type="checkbox" name="isSale" checked={isSale} onChange={this.onHandleChange} />
        </label>

        <label>
          Категория:
          <select name="category" value={category} onChange={this.onHandleChange}>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add adv</button>
      </AdvFormStyled>
    );
  }
}

export default AdvForm;
