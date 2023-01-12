import './App.css';

const App = () => {

    const categories = [
        {
            id: 0,
            title: 'Hats'
        },
        {
            id: 1,
            title: 'Jackets'
        },
        {
            id: 2,
            title: 'Sneakers'
        },
        {
            id: 3,
            title: 'Women\'s'
        },
        {
            id: 3,
            title: 'Men\'s'
        }
    ];

    return (
        <div className="categories-container">
            {categories.map(category => {
                return (
                    <div className="category-container" key={category.id}>
                        {/*<img src="" alt=""/>*/}
                        <div className="background-image"></div>
                        <div className="category-body">
                            <h2>{category.title}</h2>
                            <p>Shop Now</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default App;
