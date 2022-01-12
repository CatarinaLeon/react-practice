import React, { Component } from 'react';
import LabelInput from '../_shared/labelInput/labelInput';
import { Form } from './TransactionForm.style.js';
import { postTransaction } from '../../utils/api';

export default class TransactionForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const { dataForm, addData, transType, setError } = this.props;
    postTransaction(transType, dataForm)
      .then(transaction => addData({ dataForm: transaction, transType }))
      .catch(error => setError(error));
  };

  render() {
    const { openCategoriesList, handleChange, dataForm } = this.props;
    const { date, time, category, sum, currency, comment } = dataForm;
    return (
      <Form onSubmit={this.handleSubmit}>
        <button type="submit">OK</button>
        <LabelInput
          name="date"
          handleChange={handleChange}
          title="День"
          type="date"
          value={date}
        />
        <LabelInput
          name="time"
          handleChange={handleChange}
          title="Время"
          type="time"
          value={time}
        />
        <LabelInput
          name="category"
          handleChange={handleChange}
          title="Категория"
          type="button"
          handleClick={openCategoriesList}
          value={category.title}
        />
        <LabelInput
          name="sum"
          handleChange={handleChange}
          title="Сумма"
          type="text"
          placeholder="Введите сумму"
          value={sum}
        />
        <LabelInput
          name="currency"
          handleChange={handleChange}
          title="Валюта"
          type="button"
          value={currency}
        />
        <LabelInput
          name="comment"
          handleChange={handleChange}
          type="text"
          placeholder="Коментарий"
          value={comment}
        />
      </Form>
    );
  }
}
