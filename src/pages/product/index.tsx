import './style.scss'
import defaultImg from '../../assets/default.jpg';
import React from 'react';

export const Product = ({product}: any) =>
  <div className='cards'>
    <div className='cards-top'>
      <img className='photo' src={product.avatar.original} onError={e => e.currentTarget.src = defaultImg}/>
      <div className='create'>
        <div>
          <p className='created-by'>created by</p>
          <p className='name'>{product.name}</p>
        </div>
        <p className='type'>{product.type}</p>
      </div>
    </div>
    <div className='cards-bottom'>
      <div className='quantity'>
        <p className='available'>available</p>
        <p>{product.quantity} of 50</p>
      </div>
      <div>
        <p className='price'>price</p>
        <p className='latest-price'>{product.latest_price} ETH</p>
      </div>
    </div>
  </div>

