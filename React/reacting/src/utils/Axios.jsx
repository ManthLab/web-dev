import axios from 'axios';
import React from 'react'

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com'               // OutSourcing API 
});

export default instance;