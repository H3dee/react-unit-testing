import { useEffect, useState } from 'react';
import { getUser } from './util/getUser';
import { Search } from './components/Search';
import './App.css';

function App() {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState(null);

    const searchChangeHandler = ({ target }) => {
        setSearch(target.value);
    };

    useEffect(() => {
        let isMounted = true

        const loginUser = async () => {
            const user = await getUser()
            
            if (!isMounted) return;

            setUser(user);
        };

        loginUser();

        return () => {
            isMounted = false
        }
    }, []);

    return (
        <div className="App">
            {user && <div>Logged in as {user.name}</div>}
            <img src="" alt="alt text" />
            <Search value={search} searchChangeHandler={searchChangeHandler}>
                Search:
            </Search>
            <br />
            <p>Searching for {search ? search : '...'}</p>
        </div>
    );
}

export default App;
