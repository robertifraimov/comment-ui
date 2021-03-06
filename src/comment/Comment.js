
import React, { useState } from 'react';
import Gravatar from 'react-gravatar'
import Modal from '../Modal/Modal';
import MyComponent from '../Moment';
import './Comment.scss';


function Comment ({data}) {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [res,setRes] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    
    function  submit(e) {
        e.preventDefault();
        const body = {
            email, message
        };
        fetch('http://localhost:4000/user', {
            method: 'PUT',
             body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',     
            }
            
        }).then(res => res.json())
        .then(res => {
         console.log(res)
            setRes(res)
        });
        
    }

    return (
        <div className="Comment d-flex justify-content-center">
			<div className="col col-lg-4 my-5">
				<div className="text-center">
					<h1 className="Comment__title">Comments</h1>  
                </div>                 
                    <form onSubmit={submit}>

                        <div className="form-group my-3">
                            <label>Email</label>
                            <input className="form-control"
                                type="email" id="email" name="email"
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="form-group my-3">
                            <label>Message</label>
                            <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        </div>

                        <div className="form-group my-3">
                            <button className="mt-3 Comment__submit-btn">Submit</button>
                        </div>

                    </form>    
                    
                    <article className="Comment-Post">

				        <header>
					        <div className="Comment__email">
                                {res.email}
					        </div>
				        </header>

				        <div className="Comment__image">
                            <Gravatar email={email} onClick={() => setIsOpen(true)} />
				        </div>

				        <div className="Comment__content">
                            {res.message} 
				        </div>

			        </article>
                

                    <Modal open={isOpen} onClose={() => setIsOpen(false)} >

                        <div>

					        <div>
                                Email: {res.email}
					        </div>

                            <div className="created">         
                                Created: <MyComponent/>              
					        </div>

				        </div>

                    </Modal>
                  
            </div>  
        </div>     
    );
}

export default Comment;