import LoginButton from "./components/Auth0/LoginButton";
import LogoutButton from "./components/Auth0/LogoutButton";
import Profile from "./components/Auth0/Profile";

function App() {
    return (
        <>
            <h1>Auth0 Test</h1>
            <article>
                This is a test to see if I can get Auth0 up and running.
            </article>
            <LoginButton />
            <LogoutButton />
            <Profile />
        </>
    );
}

export default App;
