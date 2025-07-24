import React from 'react'
import Props from './Props'

function PropsPage() {
  return (
    <div>
      <Props title="iPhone 15" price={80000} text= "Know More" color="bg-black" />
      <Props title="Samsung Galaxy S24" price={75000} text= "Buy" color="bg-blue-600" />
      <Props title="Nothing Phone (2)" price="₹45,000" text= "Out of Stock" color="bg-red-700" />
    </div>
  )
}

export default PropsPage;