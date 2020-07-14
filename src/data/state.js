import React from 'react';
import {
  ADD_POST,
  INPUT_MESSAGE,
  INPUT_POST
} from "../utils/constants";

export const addPostActionCreator = (text) => ({type: ADD_POST, inputValue: text});
export const inputPostActionCreator = (text) => ({type: INPUT_POST, inputValue: text});
export const inputMessageActionCreator = (text) => ({type: INPUT_MESSAGE, inputValue: text})

export let store = {
  _data: {
    dialogs: [
      {id: 1, author: 'Eva'},
      {id: 2, author: 'Oleg'},
      {id: 3, author: 'Ola'},
      {id: 4, author: 'Max'}
    ],
    messages: [
      {message: 'Hi'},
      {message: 'Bye'},
      {message: 'Good luck'},
      {message: 'So so'},
    ],
    posts: [
      {
        id: 1,
        img: 'https://us.123rf.com/450wm/irinalevitskaya/irinalevitskaya1802/irinalevitskaya180200102/96364553-wow-pop-art-face-sexy-surprised-woman-with-blonde-curly-hair-and-open-mouth-holding-binoculars-in-he.jpg?ver=6',
        text: 'It is my first post'
      },
      {
        id: 2,
        img: 'https://thumbs.dreamstime.com/b/print-146697723.jpg',
        text: 'It is my second post'
      },
      {
        id: 3,
        img: 'https://image.freepik.com/free-vector/_1441-271.jpg',
        text: 'It is my third post'
      },
    ],
    friends: [
      {
        id: 1,
        img: 'https://img3.stockfresh.com/files/s/studiostoks/m/28/8471293_stock-vector-avatar-portrait-of-a-man-straightens-his-tie.jpg',
        name: 'Oleg'
      },
      {
        id: 2,
        img: 'https://img3.stockfresh.com/files/s/studiostoks/m/64/8471294_stock-vector-avatar-portrait-of-a-retro-nurse.jpg',
        name: 'Ola'
      },
      {
        id: 3,
        img: 'https://www.featurepics.com/StockImage/20160705/lady-thinking-stock-illustration-4144233.jpg',
        name: 'Eva'
      },

    ],
    currentPost: {
      text: ''
    },
    currentMessage: {
      text: ''
    }
  },
  _callSubscriber() {
    console.log('hi')
  },
  getData() {
    return this
  },
  setData() {
    console.log('set smth')
  },
  addPost(textMessage) {
    let newPost = {
      id: 5,
      img: 'https://www.featurepics.com/StockImage/20160705/lady-thinking-stock-illustration-4144233.jpg',
      text: textMessage
    };
    this._data.posts.push(newPost);
    this.inputPost('')
    this._callSubscriber(this);
  },
  inputPost(inputText) {
    this._data.currentPost.text = inputText;
  },
  inputMessage(inputText){
    this._data.currentMessage.text = inputText;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch (action) {
    if(action.type === 'ADD_POST') {
      this.addPost(action.inputValue)
    } else if (action.type === 'INPUT_POST') {
      this.inputPost(action.inputValue)
    } else if (action.type === 'INPUT_MESSAGE') {
      this.inputMessage(action.inputValue)
    }
  }
}

export default store;