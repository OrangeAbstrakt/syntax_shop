import React from 'react'


function FilterSidebar() {
  return (
    <div className='side-bar'>        
        <div className='cat-1'>
            <p className='cat1-heading'>Color</p>
            <div className='cl1 cl'></div>
            <div className='cl2 cl'></div>
            <div className='cl3 cl'></div>
            <div className='cl4 cl'></div>
            <div className='cl5 cl'></div>
            <div className='cl6 cl'></div>
            <div className='cl7 cl'></div>
            <div className='cl8 cl'></div>
            <div className='cl9 cl'></div>
        </div>
        <div className='cat-2'>
            <p className='br1'>Nike</p>
            <p className='br2'>Adidas</p>
            <p className='br3'>New Balance</p>
            <p className='br4'>Converse</p>
            <p className='br5'>Puma</p>
        </div>
        <div className='cat-3'>
            <p className='sr1'>Sort By</p>
            <p className='sr2'>Featured</p>
            <p className='sr3'>Newest</p>
            <p className='sr4'>Lowest Price</p>
            <p className='sr5'>Highest Price</p>

        </div>
    </div>
  )
}

export default FilterSidebar