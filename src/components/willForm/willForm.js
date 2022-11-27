import { useState } from 'react'
import './willform.css'

function WillForm( {handleForm} ) {
  const [count, setCount] = useState(0)

  function createNew(){
    let elm = document.createElement('div')
    let in1 = document.createElement('input')
    let in2 = document.createElement('input')
    in1.setAttribute('type', 'text')
    in2.setAttribute('type', 'text')
    in1.setAttribute('placeholder', 'Property')
    in2.setAttribute('placeholder', 'Beneficiary')
    in1.setAttribute('required', 'required')
    in2.setAttribute('required', 'required')
    elm.append(in1,in2)
    elm.classList.add(['flex', 'justify-between', 'will'])
    document.getElementById('will-container').append(elm)
  }

  function getForm(){
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let instructions = document.getElementById('instructions').value
    let wills = []
    document.querySelectorAll('.will').forEach(elm => {
        let will = []
        elm.childNodes.forEach(child => {
            will.push(child.value)
        })  
        wills.push(will)
    })

    return ({
        'firstName': firstName,
        'lastName': lastName,
        'will': wills,
        'instructions': instructions
    })
  }

  return (
    <div className="WillForm text-gray-700 flex max-[900px]:block">
        <div className='w-5/12 slog max-[900px]:w-full'>
            <h1 className='text-6xl'>Time waits for Nobody,</h1>
            <h2 className='text-4xl'>Create your will Today !!</h2>
        </div>
      <form className='bg-white p-7 drop-shadow-lg rounded-md' id='form' action='/viewWill' onSubmit={(e) => {
        // e.preventDefault()
        let will = getForm()
        handleForm(will)
      }}>
        <div className='flex justify-between w-full'>
          <div className='w-1/2 mr-2'>
            <label htmlFor='first-name'>First Name</label>
            <input type='text' id='first-name' required/>
          </div>
          <div className='w-1/2 mr-1'>
            <label htmlFor='last-name'>last Name</label>
            <input type='text' id='last-name' required/>
          </div>
        </div>        
        <div className='w-full mt-5 border border-gray-300 p-2 pb-10 relative' id='will-container'>
        <h3 className='mb-2'>Set will</h3>
          <div className='flex justify-between will'>
            <input type='text' placeholder='Property' required/>
            <input type='text' placeholder='Beneficiary' required/>
          </div>
          <button type='button' className='add mt-2 block' onClick={() => createNew()}>New +</button>
        </div>
        <div className='mt-7'>
          <h3>Instructions...</h3>
          <textarea className='w-full' id='instructions' required/>
        </div>
        <button type='submit' className='w-full mt-5'>Create WIll</button>
      </form>
    </div>
  )
}

export default WillForm