/* eslint-disable prettier/prettier */

import React, { ChangeEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import BlueLogo from '../../assets/svg/BlueLogo';
import Navbar from '../../components/Navbar/Navbar';
import Footer from 'src/components/Footer/Footer';
import { PageContainer } from 'src/components/PageContainer/PageContainer';
import { InputBox } from '../SignUp/SignUp.styled';
import { RegisterBikeForm } from './AdminPage.styled';
import { useRegisterBike } from 'src/hooks/useRegisterBike';
import { register } from 'module';

export default function AdminPage() {
  // title: Joi.string().required(),
  // description: Joi.string().required(),
  // price: Joi.number().required(),
  // category: Joi.string().valid('bicycle', 'scooter').required(),
  // condition: Joi.string().valid('new', 'used').required(),
  // imageUrl: Joi.array().items(Joi.string()),
  // createdAt: Joi.date(),

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const { registerBike, loading, error, isRegisteredBike } = useRegisterBike();

  const handleRegisterBike = () => {
    const bikeData = {
      title,
      description,
      price: parseFloat(price), // Convert the price string to a floating-point number
      category,
      condition,
      imageUrl,
    };
    registerBike(bikeData); // Pass the bikeData object to the registerBike function
  };

  const renderInput = (
    input_type:
      | 'Title'
      | 'Description'
      | 'Price'
      | 'Category'
      | 'Condition'
      | 'ImageUrl',
  ) => {
    let value: string, onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    const inputName = input_type.toLowerCase().replace(' ', '_');

    switch (inputName) {
      case 'title':
        value = title;
        onChange = (event) => setTitle(event.target.value);
        break;
      case 'description':
        value = description;
        onChange = (event) => setDescription(event.target.value);
        break;
      case 'price':
        value = price;
        onChange = (event) => setPrice(event.target.value);
        break;
      case 'category':
        value = category;
        onChange = (event) => setCategory(event.target.value);
        break;
      case 'condition':
        value = condition;
        onChange = (event) => setCondition(event.target.value);
        break;
      case 'imageurl':
        value = imageUrl;
        onChange = (event) => setImageUrl(event.target.value);
        break;
      default:
        value = '';
        onChange = () => {};
    }

    return (
      <InputBox
        value={value}
        onChange={onChange}
        placeholder={input_type}
        type={input_type.includes('Password') ? 'password' : 'text'}
      />
    );
  };

  return (
    <PageContainer>
      <Navbar />
      <RegisterBikeForm>
        <div>{renderInput('Title')}</div>
        <div>{renderInput('Description')}</div>
        <div>{renderInput('Price')}</div>
        <div>{renderInput('Category')}</div>
        <div>{renderInput('Condition')}</div>
        <div>{renderInput('ImageUrl')}</div>
      </RegisterBikeForm>

      <button onClick={() => handleRegisterBike()}></button>
    </PageContainer>
  );
}
