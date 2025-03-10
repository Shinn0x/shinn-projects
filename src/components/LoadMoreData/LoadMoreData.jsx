import React, { useEffect, useState } from 'react';
import { useFetch } from '../../customHooks/useFetch';
import './LoadMoreData.css'

export const LoadMoreData = () => {
    const limit = 12;
    // const [skip, setSkip] = useState(0);
    const [products, setProducts] = useState([]);
    const { loading, error, fetchData } = useFetch();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(null);
    const [maxCount, setMaxCount] = useState(null);

    const loadProducts = async () => {
        const url = `https://dummyjson.com/products?limit=${limit}&skip=${limit * count}&select=id,title,description,price,images,category`;
        const result = await fetchData(url);
        if (result && result.products) {
            total === 0 && setTotal(result.total);
            !maxCount && setMaxCount(Math.floor(result.total / limit) + 1);
            setProducts(prev => [...prev, ...result.products]);
            setCount(prevCount => prevCount + 1);
            // setSkip(prev => prev + limit);

            const categoryCount = [...products, ...result.products].reduce((acc, product) => {
                acc[product.category] = (acc[product.category] || 0) + 1;
                return acc;
            }, {});

            const categoryArray = Object.entries(categoryCount).map(([name, count]) => ({ name, count }))
            setCategories([...categoryArray]);
        }
    }

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            loadProducts();
        }, 0)
        return () => clearTimeout(timeOutId);
    }, []);


    const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);

    if (loading) return <div className="text-info text-center">Loading...</div>;

    if (error) return <div className="text-danger text-center">Error: {error.message}</div>;

    return (
        <section id="loadMoreData" className="section-padding">
            <div className="container">
                <h1 className='text-center display-3 fw-bold'>Load More Products</h1>
                <div className="d-flex gap-4 align-items-center mt-5 mb-3">
                    <p className='text-muted fs-5 mb-0'>In Our Store : {total} Products</p>
                    <select className="text-uppercase" onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option className="text-uppercase" value="all">All Products</option>
                        {categories.map((category, index) =>
                            <option className='text-uppercase'
                                key={index}
                                value={category.name}
                            >{category.name} ({category.count})</option>)}
                    </select>
                </div>
                <div className="row mt-3">
                    {filteredProducts.map(product => (
                        <div className="col-md-6 col-lg-3 mb-4" key={product.sku}>
                            <div className="card h-100 shadow-sm image-zoom-wrapper">
                                <img
                                    src={product.images[0]}
                                    className="card-img-top"
                                    alt={product.title}
                                    style={{ height: '250px', objectFit: 'fill' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted text-uppercase">{product.category}</h6>
                                </div>
                                <div className="card-footer">
                                    <span className="text-success fw-bold">${product.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {count < maxCount && (
                    loading ? (
                        <div className="text-center my-3">Loading products...</div>
                    ) : (
                        <div className="text-center">
                            <button
                                className='btn bg-primary text-light'
                                onClick={() => loadProducts()}
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Load more data'}
                            </button>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};
