const Home = () => {
    const handleClick = (event) => {
        console.log('Clicked!!!', event.target);
    }

    const handleClickAgain = (name) => {
        console.log(`Hello ${name}`);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('gopi')}>Click me again</button>
        </div>
     );
}
 
export default Home;