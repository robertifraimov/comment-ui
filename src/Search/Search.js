
import React, { useEffect, useState } from 'react';
import { UserService } from '../services/user.service';
import './Search.scss';
import SearchResult from '../Search/SearchResult';


export default function Search() {

        const [query,setQuery] = useState('');
        const [users,setUsers] = useState([]);
    
        useEffect(() => {
           if (!query) {
               return;
           }
           async function getUsers() {
            try {
                setUsers(await UserService.search(query));
            } catch(err) {
                console.log(err);
            }
        }
           getUsers();
        }, [query]);
    
        
        function hasNoResults () {
            return users.length === 0 && query.length > 0;
        }
    

    return (
        <div className="Comment d-flex justify-content-center">
			<div className="col col-lg-4 my-5">
				<div className="text-center">
                    <h1>Search</h1>
                </div>
                <form onSubmit={Search}>
                             
                    <div className="form-group my-3">
                        <label>Email</label>
                        <input className="form-control"
                            type="email" id="email" name="email" 
                            value={query}  onChange={(e) => setQuery(e.target.value)}/>
                    </div>

                </form>

                 
                <article className="Comment-Post">

                    <header>
                        <div>
                            <h2>Results:</h2>
                        </div>
                    </header>

                    <div>

                        <div>
                            {users.map(user => {
                            return <SearchResult key={user._id} user={user}/>         
                            })}
                        </div>
                        { hasNoResults() && 'Sorry, there is no user with this email'}
                    </div>

                </article>

                
            </div>
        </div>
    )
}
